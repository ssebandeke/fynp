class BidsController < ApplicationController
  # before_action :require_login, only: [:create]
  before_filter :authenticate_user!
  def index
    @product = Product.find(params[:product_id])
    @bids = @product.bids
  end

  def new
    @product = Product.find(params[:product_id])
    @bid = Bid.new
  end

  def show
    @bid = Bid.find(params[:id])
  end


  def create
    @product = Product.find(params[:product_id])
    @bid = Bid.new(bid_params)
    @bid.bidder = current_user
    @bid.product = @product
    if not_user_own_the_auction?
      if @bid.save
        UserMailer.welcome_email(@product.seller).deliver
        redirect_to @product, :notice => "You are the current high bidder"
      else
        flash[:error] = @bid.errors.full_messages
        render :new
      end
    else
      flash[:error] = "You cant bid on your own product"
      redirect_to @product
    end
  end

  private

  def bid_params
    params.require(:bid).permit(:amount)
  end
  def not_user_own_the_auction?
    @bid.product.seller != current_user

  end
end
