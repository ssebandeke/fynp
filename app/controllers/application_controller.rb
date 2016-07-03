class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  helper :all
  protect_from_forgery with: :exception
  # filter_parameter_logging :card_number, :card_verification
  before_filter :configure_permitted_parameters, if: :devise_controller?
  helper_method :current_product


  def current_product
    if session[:product_id]
      @current_product ||= Product.find(session[:product_id])
      session[:product_id] = nil if @current_product.paid_at
    end
    if session[:product_id].nil?
      @current_product = Product.create(:title => "car",:description => "good",:minimum_bid => 4000,:image => "f4.png",:end_time => "2016-05-12 13:00 UTC")
      session[:product_id] = @current_product.id
    end
    @current_product
  end
    protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.for(:sign_up) << :terms
      devise_parameter_sanitizer.for(:sign_up) << :lname
      devise_parameter_sanitizer.for(:sign_up) << :fname
      devise_parameter_sanitizer.for(:sign_up) << :date_of_birth
      devise_parameter_sanitizer.for(:sign_up) << :physical_address
    end
end
