class Sourcerer < ApplicationRecord
	has_secure_password
	# Associations
	has_and_belongs_to_many :projects,  join_table: :project_memberships
	
	# Validations
	validates :email, presence: true, confirmation: { case_sensitive: false }, length: { maximum: 32 }
	validates :email_confirmation, presence: true
	validates :passhash, presence: true, length: { maximum: 48 }
	validates :salt, presence: true, length: { maximum: 16 }
	validates :name, presence: true, length: { maximum: 32 }
	# validate :position ?
	validates :page, length: { maximum: 1024 }

	# Functionality
end
