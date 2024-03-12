file = File.open("./colleges.md", "r")
lines = file.readlines.map(&:chomp).select{|str| str[0] != "#" && str != ""}
p lines.length