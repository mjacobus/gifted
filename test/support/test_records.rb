class TestRecords
  def self.make!(klass, attributes = {})
    klass.make!(attributes)
  end

  def self.make(klass, attributes = {})
    klass.make(attributes)
  end
end
