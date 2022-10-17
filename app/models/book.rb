class Book < ApplicationRecord
  belongs_to :genre
  has_many :reviews
  has_many :users, through: :reviews

  validates :title, :description, :bookurl, :coverpage, presence: true
  validates :description, length: { minimum: 6 }
  # validates :genre_id 
end