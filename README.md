[wireframing](https://moqups.com/etschiavi@gmail.com/9StkAxzE)


### questions
* thinking about what database i would need
* API requests come from where?

### API requests
* from backbone make request to rails
* from rails make request to API
* API sends response to rails
* rails sends a response to backbone

HTTParty.get in pry

Wunderground
weather = HTTParty.get("http://api.wunderground.com/api/abc3ed8ecb8d84a6/conditions/q/NY/new_york.json")

Instagram
instagram = HTTParty.get("https://api.instagram.com/v1/tags/"enter tag here"/media/recent?client_id=a9a41298fad74ec0bdd00161d605b2b8"

Edamam
recipe = HTTParty.get("https://api.edamam.com/search?q=chicken&app_id=cc50ad6e&app_key=ab4216d00f9a08db76220a4503a5b08b")

Powerball lotto
lotto = HTTParty.get("http://data.ny.gov/resource/d6yy-54nr.json")
OR
lotto = HTTParty.get("https://data.ny.gov/api/views/d6yy-54nr/rows.json?accessType=DOWNLOAD")

MegaMillions lotto
lotto = HTTParty.get("https://data.ny.gov/api/views/5xaw-6ayf/rows.json?accessType=DOWNLOAD")

do research on URI module
