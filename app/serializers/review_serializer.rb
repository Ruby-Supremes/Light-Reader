class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :rating
  has_one :user_id
  has_one :book_id
end
