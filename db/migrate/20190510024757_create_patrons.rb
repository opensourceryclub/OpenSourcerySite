class CreatePatrons < ActiveRecord::Migration[5.2]
  def change
    create_table :patrons do |t|
      t.string :name, null: false, limit: 64
      t.string :website, limit: 128
      t.integer :prestige, null: false

      t.timestamps
    end
  end
end
