require 'rails_helper'

RSpec.describe "bids/show", type: :view do
  before(:each) do
    @bid = assign(:bid, Bid.create!(
      :amount => 1,
      :user => nil,
      :product => nil,
      :bidder_id => 2
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/1/)
    expect(rendered).to match(//)
    expect(rendered).to match(//)
    expect(rendered).to match(/2/)
  end
end
