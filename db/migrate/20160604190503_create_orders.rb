class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer :product_id
      t.string :ip_address
      t.string :first_name
      t.string :last_name
      t.string :card_brand
      t.datetime :card_expires_on

      t.timestamps null: false
    end
  end
end
