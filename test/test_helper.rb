ENV['RAILS_ENV'] ||= 'test'

if ENV["SCRUTINIZER"]
  require "scrutinizer/ocular"
  Scrutinizer::Ocular.watch!
end

if ENV["CODE_COVERAGE"]
  require "simplecov"

  SimpleCov.start 'rails' do
    add_filter "spec/"
    add_filter "lib/templates"
    add_filter "lib/generator/rails/custom_controller"
    add_filter "lib/generators/rails/custom_controller/templates/controller.rb"
    add_filter "test/"

    add_group "Lib", "lib"
  end
end

if ENV["COVERALLS"]
  require "coveralls"
  Coveralls.wear!
end

require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require File.expand_path(File.dirname(__FILE__) + '/blueprints')

class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Add more helper methods to be used by all tests here...
end

Dir[File.expand_path("../support/**/*.rb", __FILE__)].each { |rb| require(rb) }
