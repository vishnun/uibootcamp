FlickerService = require '../src/services/FlickerService'

describe "Flicker Service", () ->

  it "should return image json for searched key", () ->
    FlickerService = new FlickerService()
    expect(FlickerService.getImages('sunrise')).toBe {}
