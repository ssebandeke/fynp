require "rails_helper"
require 'spec_helper'
RSpec.describe UserMailer do
  def welcome_email_preview
		UserMailer.welcome_email(User.first)

	end
end
