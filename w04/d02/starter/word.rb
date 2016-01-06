class Word
  def initialize(original_word)
    @original_word = original_word
  end

  def original_word
    return @original_word.downcase
  end

  def to_s
    "#{original_word}"
  end

  def piglatinize
    length = "#{original_word}".length

    if "#{original_word}".start_with?("a","e","i","o","u")
      puts "#{original_word}way"
    elsif "#{original_word}".start_with?("y")
      puts original_word[1..length] + "yay"
    elsif "#{original_word}".start_with?("qu")
      puts original_word[2..length] + "quay"

    else

      vowel_position = -1
      counter = 0
      pig_word = ""

      while vowel_position < 0 do

        if original_word[counter] == "a"
          vowel_position = counter
        elsif original_word[counter] == "e"
          vowel_position = counter
        elsif original_word[counter] == "i"
          vowel_position = counter
        elsif original_word[counter] == "o"
          vowel_position = counter
        elsif original_word[counter] == "u"
          vowel_position = counter
        elsif original_word[counter] == "y"
          vowel_position = counter
        elsif original_word[counter] == "q" && original_word[counter + 1] == "u"
          vowel_position = counter
          pig_word = original_word[(vowel_position + 2)..length] + original_word[0..(vowel_position + 1)] + "ay"
        end
        counter = counter + 1
      end
      if pig_word == ""
        pig_word = original_word[vowel_position..length] + original_word[0..vowel_position - 1] + "ay"
      end
      puts pig_word
    end
  end
end

word = Word.new "strong"
word.piglatinize





