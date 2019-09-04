class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name, null: false, limit: 24
      t.integer :status, default: 0, null: false                     # ['available', 'active', 'complete']
      t.references :conjurer, null: false                             # Person who created the idea
      t.references :sage, foreign_key: true             # Project Manager
      t.string :tags, limit: 128
      t.text :desc, limit: 8196             # Markdown README-like thing
      t.string :repo_url, limit: 128        # github URL

      t.timestamps
    end
  end
end
