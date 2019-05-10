class CreateSourcerers < ActiveRecord::Migration[5.2]
  def change
    create_table :sourcerers do |t|
      # Stuff needed for auth
      t.string :email, null: false, limit: 32
      t.string :passhash, null: false, limit: 48
      t.string :salt, null: false, limit: 16
      # Other data
      t.string :name, null: false, limit: 32
      t.string :position, null: false, default: 'New Member', limit: 16
      t.text :page, limit: 1024

      t.timestamps
    end
  end
end
