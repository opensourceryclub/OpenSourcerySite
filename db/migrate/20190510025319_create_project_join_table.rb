class CreateProjectJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :projects, :sourcerers, table_name: :project_memberships do |t|
      t.index :project_id
      t.index :sourcerer_id
      t.string :role, null: false, default: 'Unassigned', limit: 48
    end
  end
end
