# Gifted!

Your APP for publishing gifts.

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
rake db:create                    # crete database
rake db:migrate                   # create tables
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
rake db:create                    # crete database
rake db:migrate                   # create tables
./bin/create_dummy_data           # loads dummy data
rails
```

Start the server:

```bash
rails s -b 0.0.0.0
```

Navigate to [http://localhost:3003](http://localhost:3003) and login as:
