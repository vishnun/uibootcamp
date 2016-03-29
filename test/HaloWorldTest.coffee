HaloWorld = require '../src/HaloWorld'

describe "Halo world", () ->

  it "should return 'Hello world'", () ->
    haloWorld = new HaloWorld()
    expect(haloWorld.message()).toBe "Hello World"
