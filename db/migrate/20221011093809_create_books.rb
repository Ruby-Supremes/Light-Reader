class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :coverpage
      t.text :description
      t.string :bookurl

      t.timestamps
    end
  end
end
