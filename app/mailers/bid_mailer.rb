class BidMailer < ApplicationMailer
  def product_created(user)
    mail(
    to: user.email,
    subject: "product created",
    body: "the product that you have created"
    )
  end
end
