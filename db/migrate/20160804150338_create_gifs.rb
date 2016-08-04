class CreateGifs < ActiveRecord::Migration[5.0]
  def change
    create_table :gifs do |t|
      t.string :title
      t.string :url
      t.string :name
      t.string :email

      t.timestamps
    end
  end
end
