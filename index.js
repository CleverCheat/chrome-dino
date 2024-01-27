(function () {
  if (typeof Runner !== 'undefined') {
    Runner.instance_.setSpeed(900);
    Runner.prototype.gameOver = function () {};
  }
})();
