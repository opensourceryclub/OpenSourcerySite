class CreatePatronJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :patrons, :projects do |t|
      t.index :patron_id
      t.index :project_id
    end
  end
end
