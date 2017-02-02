set :config_env, :staging

set :stage, :production
set :rack_env, fetch(:stage)
set :rails_env, fetch(:stage)
fetch(:default_env).merge!(rails_env: fetch(:rails_env))

set :branch, ENV['BRANCH'] || :develop

server :'vps.kruczjak.pl', user: fetch(:deploy_user), roles: %i(app db)
