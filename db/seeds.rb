# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require File.expand_path(File.dirname(__FILE__) + '/../test/support/test_records')
require File.expand_path(File.dirname(__FILE__) + '/seeds_dummy') if ENV['INCLUDE_DUMMY_DATA']
