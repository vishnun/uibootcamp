Flickr = require '../libs/flickrapi.js'

flickr = new Flickr({
      api_key: "1234ABCD1234ABCD1234ABCD1234ABCD",
      format:'json'
    })
class FlickerService
  getImages: (searchKey) ->
    flickr.photos.search {text: searchKey}, (err, result) ->
      if err
        throw new Error(err)
      else
        result

module.exports = FlickerService
