# -*- mode: ruby -*-
# vi: set ft=ruby :

require_relative "vagrant/vagrant_helper"

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.network "forwarded_port", guest: 3000, host: 3003
  config.vm.hostname = "gifted.dev"
  config.ssh.forward_agent = true

  config.vm.provider "virtualbox" do |vm|
    vm.name = "gifted"
    helper = VagrantHelper.new(RbConfig::CONFIG["host_os"])
    vm.memory = helper.memory_fraction(4)
  end

  script = <<-SCRIPT
    sudo apt-get update -y
    sudo apt-get install -y curl
    curl https://raw.githubusercontent.com/ggs-pages/php-dev-box/master/vagrant/remote-install.sh | bash
  SCRIPT

  config.vm.provision :shell, inline: script
end
