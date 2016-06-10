class AddStartTimeToProducts < ActiveRecord::Migration
  def change
    add_column :products, :start_time, :datetime
  end
end
