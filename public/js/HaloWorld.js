(function() {
  var HaloWorld;

  HaloWorld = (function() {
    function HaloWorld() {}

    HaloWorld.prototype.message = function() {
      return "Hello World";
    };

    return HaloWorld;

  })();

  module.exports = HaloWorld;

}).call(this);
