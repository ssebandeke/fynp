class AddSellerIdToProducts < ActiveRecord::Migration
  def change
    add_column :products, :seller_id, :string
  end
end
