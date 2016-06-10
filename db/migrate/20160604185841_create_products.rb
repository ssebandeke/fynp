class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :title,null: false
      t.text :description,null: false
      t.datetime :end_time,null: false
      t.string :image_url,null: false
      t.datetime :paid_at,null: false
      t.integer :minimum_bid,null: false

      t.timestamps null: false
    end
  end
end
