require 'machinist/active_record'

Gif.blueprint do
  email { Faker::Internet.email }
  title { "title #{sn}" }
  name { Faker::Name.name }
end
