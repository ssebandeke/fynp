FactoryGirl.define do
  factory :order_transaction do
    order_id 1
    action "MyString"
    success false
    amount 1
    authirization "MyString"
    message "MyString"
    params "MyText"
  end
end
