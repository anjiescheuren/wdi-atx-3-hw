# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
movies = Movie.create([{title: "My Cousin Vinny", year: 1992, poster_url: "my_cousin_vinny.jpg"},
  {title: "Three Amigos", year: 1986, poster_url: "three_amigos.jpg"},
  {title: "The Usual Suspects", year: 1995, poster_url: "the_usual_suspects.jpg"}])

characters = Character.create([{name: "Vinny Gambini", photo_url: "vinny_gambini.jpg"},
  {name: "Mona Lisa Vito", photo_url: "mona_lisa_vito.jpg"},
  {name: "Ned Nederlander", photo_url: "ned_nederlander.jpg"},
  {name: "Dusty Bottoms", photo_url: "dusty_bottoms.jpg"},
  {name: "Keyser Soze", photo_url: "keyser_soze.jpg"},
  {name: "Verbal Kint", photo_url: "verbal_kint.jpg"}])
