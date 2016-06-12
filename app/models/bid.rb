class Bid < ActiveRecord::Base
  belongs_to :user
  belongs_to :product
  belongs_to :bidder, :class_name => "User"
  # before_save :convert_bid_to_cents
  validate :higher_than_current?
  validate :higher_than_minimum_bid?
  validates :amount, :numericality => true
  validate :equal_to_current_bid

  # def convert_bid_to_cents
  #   self.amount = (self.amount*100).to_i
  # end
  #
  # def amount_in_dollars
  #   self.amount/100.0
  # end
  #
  # def amount_in_cents
  #   self.amount*100
  # end
  def equal_to_current_bid

  end
  def higher_than_minimum_bid?
    if self.amount <= product.minimum_bid
      errors.add(:amount,"too low cant be lower than minimum bid")

    end
  end
  def higher_than_current?
    if !Bid.where("amount > ? AND product_id = ?", amount, self.product.id).empty?
      errors.add(:amount, "is too low! It can't be lower than the current bid, sorry.")
    end
  end
end
