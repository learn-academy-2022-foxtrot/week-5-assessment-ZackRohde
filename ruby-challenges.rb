# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

# beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

# letter_o = 'o'
# Expected output: ['coffee', 'soda water']
# letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# PSUEDO CODE:
# Create a def variable and name it.
# Pass an array as the parameter
# Iterate through the array and find the words that contain the letters o, and t. 
# If they contain those letters push those into a new array. 
# print it to check if it works.

# def array_of_words array
#   if beverages_array.find {|letter| letter.includes?("o", "t")}
   
#   end
# end
# p array_of_words(beverages_array)


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Vermont'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Vermont', 'Washington'] 

# PSUEDO CODE:
# Create a def variable and name it. 
# Pass in an array as the parameter.
# Use a method to remove the nested arrays and join them together.
# Sort the array and alphabetize the states from a , z. 
# p 

# def a_z_states array
#   array.flatten.sort { |a, b|}
# end
# p a_z_states(us_states)


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike 
  attr_accessor :model, :wheels, :current_speed

  def initialize (model, wheels, current_speed)
  @model = Trek
  @wheels = 2
  @current_speed = 0
  end

  def bike_info
     "The #{model} bike has #{wheels} and is going #{current_speed} mph."
  end

  def pedal_faster
    @pedal_faster += 1
  end

  def brake
    @brake -= 1
  end

end 
p Bike.bike_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
