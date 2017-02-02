Rails.application.routes.draw do
  root 'application#static'
  # get '*path' => 'application#static'
end
