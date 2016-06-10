require 'rails_helper'

RSpec.describe "orders/index", type: :view do
  before(:each) do
    assign(:orders, [
      Order.create!(
        :product_id => 1,
        :ip_address => "Ip Address",
        :first_name => "First Name",
        :last_name => "Last Name",
        :card_brand => "Card Brand"
      ),
      Order.create!(
        :product_id => 1,
        :ip_address => "Ip Address",
        :first_name => "First Name",
        :last_name => "Last Name",
        :card_brand => "Card Brand"
      )
    ])
  end

  it "renders a list of orders" do
    render
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => "Ip Address".to_s, :count => 2
    assert_select "tr>td", :text => "First Name".to_s, :count => 2
    assert_select "tr>td", :text => "Last Name".to_s, :count => 2
    assert_select "tr>td", :text => "Card Brand".to_s, :count => 2
  end
end
