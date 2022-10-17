# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "🌱 Seeding data..."

genre1 = Genre.create(name: "Motivational")

10.times do 
    User.create(username: Faker::Name.name ,email: Faker::Internet.email , password_digest: Faker::DcComics.villain)
end

Book.create(title: "Blue ocean strategy", coverpage: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1416445924i/4898.jpg", 
    description: "Written by the business world's new gurus, Blue Ocean Strategy continues to challenge everything you thought you knew about competing in today's crowded market place. Based on a study of 150 strategic moves spanning more than a hundred years and thirty industries, authors W. Chan Kim and Renee Mauborgne argue that lasting success comes from creating 'blue oceans': untapped new market spaces ripe from growth. And the business world has caught on - companies around the world are skipping the bloody red oceans of rivals and creating their very own blue oceans. With over one million copies sold world wide, Blue Ocean Strategy is quickly reaching 'must read' status among smart business readers. Have you caught the wave?",
    bookurl:"https://www.amazon.com/Blue-Ocean-Strategy-Uncontested-Competition/dp/1591396190", genre_id: 1)
Book.create(title: "Think Big", coverpage: "https://images-na.ssl-images-amazon.com/images/I/81cbUMUyowL._AC_UL210_SR210,210_.jpg",
    description: "By learning to think big, Ben rose from his humble beginnings to create a life full of amazing accomplishments and international renown. He climbed from the academic bottom of his fifth-grade class to become--at age thirty-three--head of pediatric neurosurgery at Johns Hopkins Hospital.",
    bookurl: "https://www.amazon.com/Think-Big-Unleashing-Potential-Excellence/dp/0310343364", genre_id: 1)

Book.create(title: "Rich dad, poor dad", coverpage: "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/19a14fb2a_175267.jpg",
    description: "Rich Dad Poor Dad is Robert's story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you need to earn a high income to be rich and explains the difference between working for money and having your money work for you.",
    bookurl: "https://www.amazon.com/Rich-Dad-Poor-Teach-Middle/dp/1612680194", genre_id: 1)

# reviews = Review.create([
#     {title: "The best piece of literature"},
#     {description: "The book presents a smooth chronological flow of events from the start till end "},
#     {rating: 8},
#     {user_id: 1},
#     {book_id: 2}
# ])




puts "🌱 Done seeding!"
