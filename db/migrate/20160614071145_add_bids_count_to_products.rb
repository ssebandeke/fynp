class AddBidsCountToProducts < ActiveRecord::Migration
  def change
    add_column :products, :bids_count, :integer,:default => 0
  end
end
