class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :coverpage, :description, :bookurl
  has_one :genre
# belongs_to  :genre
  has_many :reviews


end
