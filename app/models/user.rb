class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :bids
  has_many :bids, foreign_key: "bidder_id"
  validates :email , presence: true
  validates :password , presence: true
end
