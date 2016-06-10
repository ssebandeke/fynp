class UserMailer < ApplicationMailer
  default from: "lssebandek@gmail.com"
  def welcome_email(user)
    @user = user
    
    mail(to: @user.email,subject: 'Welcome to Online Auctioning System')
  end
end
