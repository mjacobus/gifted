# Gifted!

Your APP for publishing gifts.

### Development

**Requires ruby 2.2.2+.**

### Set up the project

- Install dependencies

```bash
bundle install
```

- Set up the development database\*:

```bash
rake db:create                    # crete database
rake db:migrate                   # create tables
./bin/create_dummy_data           # loads dummy data
```

\* - Requires mysql. To change driver or credentials please refer
to [config/database.yml](https://github.com/mjacobus/gifted/blob/master/config/database.yml)

Start the server:

```bash
rails s
```

Navigate to [http://localhost:3000](http://localhost:3000) and login as:
