require 'rails_helper'

RSpec.describe "orders/edit", type: :view do
  before(:each) do
    @order = assign(:order, Order.create!(
      :product_id => 1,
      :ip_address => "MyString",
      :first_name => "MyString",
      :last_name => "MyString",
      :card_brand => "MyString"
    ))
  end

  it "renders the edit order form" do
    render

    assert_select "form[action=?][method=?]", order_path(@order), "post" do

      assert_select "input#order_product_id[name=?]", "order[product_id]"

      assert_select "input#order_ip_address[name=?]", "order[ip_address]"

      assert_select "input#order_first_name[name=?]", "order[first_name]"

      assert_select "input#order_last_name[name=?]", "order[last_name]"

      assert_select "input#order_card_brand[name=?]", "order[card_brand]"
    end
  end
end
