# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "🌱 Seeding data..."

# 10.times do 
#     User.create(username: Faker::Name.name ,email: Faker::Internet.email , password_digest: Faker::DcComics.villain)
# end

genres = Genre.create([
    {name: "fiction"}
])

books = Book.create([
    {title: "It ends with us", coverpage: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781398520783/it-ends-with-us-9781398520783_lg.jpg", description: "SOMETIMES THE ONE WHO LOVES YOU IS THE ONE WHO HURTS YOU THE MOST.
        Lily hasn't always had it easy, but that's never stopped her from working hard for the life she wants. She's come a long way from the small town in Maine where she grew up - she graduated from college, moved to Boston, and started her own business.
        So when she feels a spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in Lily's life suddenly seems almost too good to be true.", bookurl:"https://book4you.org/book/4649171/371aea?dsource=recommend", genre_id: 1},

    {title: "The Overstory", coverpage: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781398520783/it-ends-with-us-9781398520783_lg.jpg", description: "SOMETIMES THE ONE WHO LOVES YOU IS THE ONE WHO HURTS YOU THE MOST.
        Lily hasn't always had it easy, but that's never stopped her from working hard for the life she wants. She's come a long way from the small town in Maine where she grew up - she graduated from college, moved to Boston, and started her own business.
        So when she feels a spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in Lily's life suddenly seems almost too good to be true.", bookurl:"https://book4you.org/book/4649171/371aea?dsource=recommend", genre_id: 1}
])

# Book.create!(title: "The Overstory", coverpage: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781398520783/it-ends-with-us-9781398520783_lg.jpg", description: "SOMETIMES THE ONE WHO LOVES YOU IS THE ONE WHO HURTS YOU THE MOST. Lily hasn't always had it easy, but that's never stopped her from working hard for the life she wants. She's come a long way from the small town in Maine where she grew up - she graduated from college, moved to Boston, and started her own business.    So when she feels a spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in Lily's life suddenly seems almost too good to be true.", bookurl:"https://book4you.org/book/4649171/371aea?dsource=recommend")

puts "🌱 Done seeding!"