class AddProductsCountToUsers < ActiveRecord::Migration
  def change
    add_column :users, :products_count, :integer,:default => 0
  end
end
