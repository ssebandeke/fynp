class ProductsController < ApplicationController
  # before_action :set_product, only: [:show, :edit, :update, :destroy]
  before_filter :authenticate_user!
  # def index
  #   @products = Product.all
  # end
  def search
    @products = Product.search(params)
  end
  def comings
    @products = Product.get_coming_products
    respond_to do |format|
      format.html
      format.xlsx{
        response.headers['Content-Disposition'] = 'attachment; filename="coming_products.xlsx"'
      }
    end
  end
  def index
    @products = Product.get_active_products
    respond_to do |format|
      format.html
      format.xlsx{
        response.headers['Content-Disposition'] = 'attachment; filename="Active_products.xlsx"'
      }
    end
  end

  def new
    @product = Product.new
  end

  def create
    @user = current_user
    @product = Product.new(product_params)
    @product.seller = current_user
    if @product.save
      ProductMailer.product_created(@user).deliver
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
  def edit
   @product = Product.find(params[:id])
     flash[:notice] = "Product has ended, sorry!" if @product.closed?
     render :edit
 end

 def update
   @product = Product.find(params[:id])
     if @product.update(product_params)
       flash[:notice] = "Product successfully updated"
       redirect_to @product
     else
       flash[:error] = @product.errors.full_messages
       render :edit
     end
 end
 def destroy
    @product = Product.find(params[:id])
      if @product.destroy
        redirect_to products_path, notice: "Successfully deleted product. Sorry we're not sorry."
      else
        render 'edit'
      end
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
    params.require(:product).permit(:title, :description,:end_time,:minimum_bid,:image,:category_id,:start_time,:paid_at,:seller_id)
  end


end
