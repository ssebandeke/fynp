class UserMailer < ApplicationMailer
  def signed_in(current_user)
    @current_user = current_user

    mail(
    to:current_user.email,
    subject: "Welcome to our site",

    )
  end
end
