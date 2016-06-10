require 'rails_helper'

RSpec.describe "bids/new", type: :view do
  before(:each) do
    assign(:bid, Bid.new(
      :amount => 1,
      :user => nil,
      :product => nil,
      :bidder_id => 1
    ))
  end

  it "renders new bid form" do
    render

    assert_select "form[action=?][method=?]", bids_path, "post" do

      assert_select "input#bid_amount[name=?]", "bid[amount]"

      assert_select "input#bid_user_id[name=?]", "bid[user_id]"

      assert_select "input#bid_product_id[name=?]", "bid[product_id]"

      assert_select "input#bid_bidder_id[name=?]", "bid[bidder_id]"
    end
  end
end
