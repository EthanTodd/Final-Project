class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  #CHECK IF LOGGED IN
  def logged_in?
  	if session[:user_id]
  		true
  	else
  		false
  	end
  end

  #ENSURES CURRENT USER_ID MATCHES THE USER PARAMS ID
  def check_current_user?
  	if session[:user_id] == params[:id].to_i
  		true
  	else
  		false
  	end
  end

end
