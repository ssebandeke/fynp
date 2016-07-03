class ProductMailer < ActionMailer::Base
  def product_created(user)
    mail(
      to: user.email,
      from: "support@gmail.com",
      subject: "Product created",
      body: "this is my first mailer  "
    )
  end
  def bid_created(current_user,product_seller,amount)
    @current_user = current_user
    @product_seller = product_seller
    @amount = amount

    mail(
    to:product_seller.email,
    from: "support@gmail.com",
    subject: "New bid created"

    )
  end

end
