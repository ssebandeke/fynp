class BidsMailer < ApplicationMailer
  def bid_created(current_user,product_seller,amount)
    @current_user = current_user
    @product_seller = product_seller
    @amount = amount

    mail(
    to:product_seller.email,
    subject: "New bid created",
    
    )
  end
end
