class Patron < ApplicationRecord
	# Associations
	has_and_belongs_to_many :project
	
	# Validations
	validates :name, presence: true, length: { maximum: 64 }
	validates :website, length: { maximum: 128 }
	validates :prestige, numericality: { only_integer: true, greater_than_or_equal_to: 0 }

	# Functionality
end
