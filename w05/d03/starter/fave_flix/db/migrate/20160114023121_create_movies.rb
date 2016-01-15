class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :title, null: false, index: true
      t.string :year
      t.string :poster_url
      t.timestamps
    end
  end
end
