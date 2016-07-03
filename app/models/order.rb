require "active_merchant/billing/rails"
require "rubygems"
require "active_merchant"
class Order < ActiveRecord::Base
  belongs_to :product
  has_many :transactions, :class_name => "OrderTransaction"
  attr_accessor :card_number,:card_verification
  validate :validate_card, :on => :create

  def purchase
    response = GATEWAY.purchase(1000,credit_card,:ip => ip_address)
    transactions.create!(:action => "purchase", :amount => 1000,:response => response)
    product.update_attribute(:paid_at,Time.now) if response.success?
    response.success?

  end
  def price_in_cents
    (1000000)

  end
  def validate_card
    unless credit_card.valid?
      credit_card.errors.full_messages.each do |message|
        errors.add :base, message
      end

    end

  end
  def credit_card
    @credit_card ||= ActiveMerchant::Billing::CreditCard.new(
    :brand => card_brand,
		:number => card_number,
		:verification_value => card_verification,
		:month => card_expires_on.month,
		:year => card_expires_on.year,
		:first_name =>  first_name,
		:last_name => last_name
    )

  end
end
