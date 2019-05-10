class Project < ApplicationRecord
  # Associations
  has_one :sage, class_name: :Sourcerer      # Project Manager
  has_one :conjurer, class_name: :Sourcerer   # Person who created the idea
  has_and_belongs_to_many :sourcerers           # Project Members
  has_and_belongs_to_many :patrons

  # Validations
  validates :name, presence: true, length: { maximum: 24 }
  validates :status, presence: true,
  validates :conjurer, presence: true
  validates :sage, presence: true
  validates :tags, length: { maximum: 128 }
  validates :desc, length: { maximum: 8196 }
  validates :repo_url, length: { maximum: 128 }
end
