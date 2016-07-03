class ChargesController < ApplicationController

  def new
     # this will remain empty unless you need to set some instance variables to pass on
   end

   def create
     @amount = 2000

     customer = Stripe::Customer.create(
     :email => 'lssebandek@gmail.com',
     :card => params[:stripeToken]
     )
     charge = Stripe::Charge.create(
     :customer => customer.id,
     :amount => @amount,
     :description => 'online bids won',
     :currency => 'usd'
     )
   rescue Stripe::CardError => e
     flash[:error] = e.message
     redirect_to charges_path
   end


end
