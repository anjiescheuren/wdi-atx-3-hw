story = [
  'Fry is born without a delta brainwave',
  'As a result, Fry is cryogenically frozen until 2999',
  'In the future, Fry works on a spaceship',
  'The spaceship hits a wormhole and crashes in 1941 Roswell, NM',
  'Fry encounters his grandmother, then inadvertently sires his father'
]
    story.each do |line|
        puts line
        puts ""
        puts "Should we continue? (y or n)"
        puts ""
        user_input = gets.chomp
        if user_input == "y"
            puts ""
            story.push(line)
            elsif user_input == 'n'
            break
        end
    end
