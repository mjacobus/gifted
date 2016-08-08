# https://stefanwrobel.com/how-to-make-vagrant-performance-not-suck
class VagrantHelper
  attr_reader :host

  def initialize(host)
    @host = host
  end

  # Give VM 1/4 system memory
  def memory_fraction(fraction = 4)
    os_memory / 1024 / fraction
  end

  def os_memory
    memory = 4096 * 1024

    if host =~ /darwin/
      # sysctl returns Bytes and we need to convert to MB
      memory = `sysctl -n hw.memsize`.to_i / 1024
    elsif host =~ /linux/
      # meminfo shows KB and we need to convert to MB
      memory = `grep 'MemTotal' /proc/meminfo | sed -e 's/MemTotal://' -e 's/ kB//'`.to_i
    elsif host =~ /mswin|mingw|cygwin/
      # Windows code via https://github.com/rdsubhas/vagrant-faster
      memory = `wmic computersystem Get TotalPhysicalMemory`.split[1].to_i / 1024
    end
  rescue
    memory
  end
end
