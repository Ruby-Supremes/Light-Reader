class Review < ApplicationRecord
  belongs_to :user
  belongs_to :book

  validates :title, :description, presence: true
  
end
