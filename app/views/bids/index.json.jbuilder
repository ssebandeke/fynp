json.array!(@bids) do |bid|
  json.extract! bid, :id, :amount, :user_id, :product_id, :bidder_id
  json.url bid_url(bid, format: :json)
end
