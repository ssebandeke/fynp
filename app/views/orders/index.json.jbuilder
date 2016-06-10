json.array!(@orders) do |order|
  json.extract! order, :id, :new, :product_id, :ip_address, :first_name, :last_name, :card_brand, :card_expires_on
  json.url order_url(order, format: :json)
end
