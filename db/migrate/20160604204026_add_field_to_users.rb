class AddFieldToUsers < ActiveRecord::Migration
  def change
    add_column :users, :fname, :string
    add_column :users, :lname, :string
    add_column :users, :physical_address, :string
    add_column :users, :date_of_birth, :datetime
  end
end
