require 'rails_helper'

RSpec.describe "orders/new", type: :view do
  before(:each) do
    assign(:order, Order.new(
      :product_id => 1,
      :ip_address => "MyString",
      :first_name => "MyString",
      :last_name => "MyString",
      :card_brand => "MyString"
    ))
  end

  it "renders new order form" do
    render

    assert_select "form[action=?][method=?]", orders_path, "post" do

      assert_select "input#order_product_id[name=?]", "order[product_id]"

      assert_select "input#order_ip_address[name=?]", "order[ip_address]"

      assert_select "input#order_first_name[name=?]", "order[first_name]"

      assert_select "input#order_last_name[name=?]", "order[last_name]"

      assert_select "input#order_card_brand[name=?]", "order[card_brand]"
    end
  end
end
