# Gifted!

Your APP for publishing gifts.

[![Build Status](https://travis-ci.org/mjacobus/gifted.svg)](https://travis-ci.org/mjacobus/gifted)
[![Coverage Status](https://coveralls.io/repos/github/mjacobus/gifted/badge.svg?branch=master)](https://coveralls.io/github/mjacobus/gifted?branch=master)
[![Code Climate](https://codeclimate.com/github/mjacobus/gifted/badges/gpa.svg)](https://codeclimate.com/github/mjacobus/gifted)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/mjacobus/gifted/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/mjacobus/gifted/?branch=master)
[![Build Status Scrutinizer](https://scrutinizer-ci.com/g/mjacobus/gifted/badges/build.png?b=master)](https://scrutinizer-ci.com/g/mjacobus/gifted/build-status/master)
[![Dependency Status](https://gemnasium.com/mjacobus/gifted.svg)](https://gemnasium.com/mjacobus/gifted)

### Development

- ruby 2.2.2+
- bundler
- MySQL server

### Set up the project


#### On your OS

- Install dependencies

```bash
bundle install
```

- Set up the development database\*:

```bash
cp .env.example .env              # environment configs (change it according to your settings)
bundle install                    # install dependencies
bundle exe rake db:create         # crete database
bundle exe rake db:migrate        # create tables
./bin/create_dummy_data           # loads dummy data
```

Start the server:

```bash
rails s
```

Navigate to [http://localhost:3000](http://localhost:3000) and login as:

#### With vagrant

```
vagrant up
vagrant ssh
gem install bundler               # install dependency manager
bundle install                    # install dependencies
bundle exe rake db:create         # crete database
bundle exe rake db:migrate        # create tables
./bin/create_dummy_data           # loads dummy data
rails
```

Start the server:

```bash
rails s -b 0.0.0.0
```

Navigate to [http://localhost:3003](http://localhost:3003) and login as:


#### Running tests

```
RAILS_ENV=test bundle exec rake db:create     # create test database
RAILS_ENV=test bundle exec rake db:migrate    # create test tables
bundle exec rake test                         # execute ruby tests
bundle exec rake jasmine:ci                   # execute javascript tests
bundle exec rake test:all                     # execute all tests
```

##### Testing JS on the browser:

```
bundle exec rake jasmine  # starts server on port 8888
```

Open http://localhost:8888 in the browser
