class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception, except: :static

  def static
    return head(:not_found) unless request.format.symbol.nil? || [:html, :json].include?(request.format.symbol)

    render('static')
  end
end
