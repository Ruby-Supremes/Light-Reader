class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :coverpage, :description, :bookurl
  has_one :genre
end
