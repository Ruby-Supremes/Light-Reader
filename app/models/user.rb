class User < ApplicationRecord

    has_secure_password

    has_many :reviews
    has_many :books, through: :reviews    

    validates :username, :email, :password, presence: true
    validates :password, length: {in: 6..15}
    validates :username, :email, uniqueness: true

end
