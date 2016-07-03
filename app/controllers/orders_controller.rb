class OrdersController < ApplicationController
 before_action :set_order, only: [:show, :edit, :update, :destroy]
 # def express
 #   response = EXPRESS_GATEWAY.setup_purchase(current_product.build_order.price_in_cents,
 #   :ip => request.remote_ip,
 #   :return_url => new_order_ur,
 #   :cancel_order_url => products_url
 #   )
 #   redirect_to EXPRESS_GATEWAY.redirect_url_for(response.token)
 # end
  def new
    @order = Order.new
  end
  def create
    @order = current_product.build_order(order_params)
    @order.ip_address = request.remote_ip
      if @order.save
        if @order.purchase
          render :action => "success"
        else
          render :action => "failure"
        end
      else
        render :action => "new"
      end
  end

  private
    def order_params
      params.require(:order).permit(:product_id,:card_number,:card_verification, :ip_address, :first_name, :last_name, :card_brand, :card_expires_on)
    end
end
