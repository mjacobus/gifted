# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

Rails.application.load_tasks

namespace :test do
  desc "run tests with code coverage"
  task :coverage do
    ENV['CODE_COVERAGE'] = 'true'
    Rake::Task['test'].invoke
  end
end

namespace :ci do
  desc "run tests on travis"
  task :travis do
    ENV['COVERALLS'] = 'true'
    Rake::Task['test:coverage'].invoke
  end
end
