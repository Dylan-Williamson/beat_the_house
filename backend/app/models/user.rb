class User < ApplicationRecord
    has_many :strategies
    validates :username, :balance, presence: true
    validates :username, uniqueness: true
end
