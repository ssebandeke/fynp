class AddPaidAtToProducts < ActiveRecord::Migration
  def change
    add_column :products, :paid_at, :datetime
  end
end
