require 'rails_helper'

RSpec.describe "bids/edit", type: :view do
  before(:each) do
    @bid = assign(:bid, Bid.create!(
      :amount => 1,
      :user => nil,
      :product => nil,
      :bidder_id => 1
    ))
  end

  it "renders the edit bid form" do
    render

    assert_select "form[action=?][method=?]", bid_path(@bid), "post" do

      assert_select "input#bid_amount[name=?]", "bid[amount]"

      assert_select "input#bid_user_id[name=?]", "bid[user_id]"

      assert_select "input#bid_product_id[name=?]", "bid[product_id]"

      assert_select "input#bid_bidder_id[name=?]", "bid[bidder_id]"
    end
  end
end
