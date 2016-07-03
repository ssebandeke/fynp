class Product < ActiveRecord::Base
  has_many :bids
  has_one :order
  has_many :bids, :dependent => :destroy
  has_one :charge
  belongs_to :seller, :class_name => "User"
  belongs_to :category,counter_cache: true
  validates :title, presence: true
  validates :description, presence: true
  validates :seller_id,presence: true
  validates :end_time, presence: true
  validates :start_time,presence: true
  validate :bid_greter_than_minimum_bid
  validate :end_time_after_start_time
  validate :end_time_in_the_future
  # validates :image_url, presence: true, allow_blank: false, format: {
  #   with: %r{\.(gif|jpg|png)\Z}i, message: 'must be a URL for GIF, JPG or PNG image.'}
    validates :minimum_bid, presence: true

    mount_uploader :image, ImageUploader
  def highest_bid
    self.bids.maximum("amount")
  end
  def bid_greter_than_minimum_bid
    # if self.bid <= self.minimum_bid
    #   errors.add(:minimum_bid,"must be less than the bid you are placing") if self.bid < self.minimum_bid
    # end

  end
  def self.get_coming_products
    where("start_time > ?",Time.now)
  end
  def end_time_after_start_time
    return unless start_time && end_time

    if end_time <= start_time
      errors.add(:end_time, "must be greater than start_time")
    end
  end
  def end_time_in_the_future
    errors.add(:end_time, "can't be in the past") if self.end_time && self.end_time < Time.now
  end
  def highest_bid_object
    self.bids.order(:amount => :desc).limit(1).first
  end

  def highest_bidder
    self.highest_bid_object.bidder if highest_bid_object
  end
  attr_accessor :force_submit

  def end_time_in_the_future
    errors.add(:end_time, "can't be in the past") if self.end_time && self.end_time < Time.now
  end
  def self.get_inactive_products
    where("end_time < ?", Time.now)
  end
  def self.get_active_products
    where("start_time < ?", Time.now)
  end
  def closed?
    self.end_time < Time.now
  end
  def paypal_url(return_url)

  end
  def self.search(params)
    products = Product.where(category_id: params[:category].to_i)
    # products = products.where("title like ?","%#{params[:search]}%") if params[:search].present?
    products
  end


end
