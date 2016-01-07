require 'sinatra'
require 'sinatra/reloader'


# Coin toss
get '/coin_toss' do
	@coin = ["heads", "tails"]
	erb :coin_toss
end

# Dice roll
get '/dice_roll' do
	@dice_roll = [0,1,2,3,4,5,6]
	erb :dice_roll
end

# Magic 8 ball
get '/magic8ball/:question' do
	@question = params[:question]
	@answer = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes", "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
]
erb :magic8ball
end

get '/rps/:choice' do
	@choice = params[:choice]
	@computer_choice = ["rock","paper","scissors"]
	erb :rps
end
