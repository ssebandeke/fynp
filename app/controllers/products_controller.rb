class ProductsController < ApplicationController
  # before_action :set_product, only: [:show, :edit, :update, :destroy]
  before_filter :authenticate_user!
  # def index
  #   @products = Product.all
  # end
  def index
    @products = Product.get_active_products
  end

  def new
    @product = Product.new
  end

  def create
    @product = Product.new(product_params)
    @product.seller = current_user
    if @product.save
      redirect_to root_path

    else
      flash[:error] = @product.errors.full_messages
      render 'new'
    end
  end

  def show
    @product = Product.find(params[:id])
    @current_bidder = @product.highest_bidder
  end

  def end_product
  @product = Product.find(params[:id])
  @product.end_time = Time.now
  @product.force_submit = true
  @product.save
  flash[:notice] = "Successfully ended product early."
  redirect_to products_path
  end

  def transaction
      @products = Product.get_inactive_products
  end

  private

  def product_params
    params.require(:product).permit(:title, :description,:end_time,:minimum_bid,:image,:start_time,:paid_at,:seller_id)
  end


end
