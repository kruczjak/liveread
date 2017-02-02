# config valid only for current version of Capistrano
lock '3.7.2'

set :application, 'liveread'
set :repo_url, 'git@github.com:kruczjak/liveread.git'

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

set :deploy_user, :liveread
# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, '/home/liveread'

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: 'log/capistrano.log', color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
append :linked_files, 'config/database.yml', 'config/secrets.yml'

# Default value for linked_dirs is []
append :linked_dirs, 'log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'public/system'

# Default value for default_env is {}
# set :default_env, { path: '/opt/ruby/bin:$PATH' }

# Default value for keep_releases is 5
# set :keep_releases, 5
set :assets_roles, [:web, :app]
set :keep_assets, 5