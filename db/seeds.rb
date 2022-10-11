# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "🌱 Seeding data..."

10.times do 
    User.create(username: Faker::Name.name ,email: Faker::Internet.email , password_digest: Faker::DcComics.villain)
end

genres = Genre.create([
    {name: "fiction"}
])

# reviews = Review.create([
#     {title: "The best piece of literature"},
#     {description: "The book presents a smooth chronological flow of events from the start till end "},
#     {rating: 8},
#     {user_id: 1},
#     {book_id: 2}
# ])




puts "🌱 Done seeding!"
