class User < ApplicationRecord
  has_and_belongs_to_many :repositories
  has_many :repositories

  def full_name
    "#{first_name} #{last_name}"
  end
end
