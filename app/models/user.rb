class User < ApplicationRecord

    has_secure_password

    has_many :reviews
    has_many :books, through: :reviews    

    validates :username, :email, :password_digest, presence: true
    validates :password_digest, length: {in: 8..28}
    validates :username, :email, uniqueness: true

end
