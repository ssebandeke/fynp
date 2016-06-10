require 'rails_helper'

RSpec.describe "bids/index", type: :view do
  before(:each) do
    assign(:bids, [
      Bid.create!(
        :amount => 1,
        :user => nil,
        :product => nil,
        :bidder_id => 2
      ),
      Bid.create!(
        :amount => 1,
        :user => nil,
        :product => nil,
        :bidder_id => 2
      )
    ])
  end

  it "renders a list of bids" do
    render
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => nil.to_s, :count => 2
    assert_select "tr>td", :text => nil.to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
  end
end
