class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :coverpage
      t.text :description
      t.string :bookurl
<<<<<<< HEAD
     
=======
>>>>>>> d129346860a6eb41f80f62a99b0228cf4c64f300

      t.timestamps
    end
  end
end
