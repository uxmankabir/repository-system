class CreateUserRepositories < ActiveRecord::Migration[6.1]
  def change
    create_table :user_repositories do |t|
      t.integer :user_id
      t.integer :repository_id

      t.timestamps
    end
  end
end
