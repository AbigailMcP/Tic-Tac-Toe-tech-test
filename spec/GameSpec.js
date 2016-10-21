describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('#displayBoard', function() {
    it('should display the board', function() {
      rowsArray = [" |  | "," |  | "," |  | "];
      expect(game.displayBoard()).toEqual(rowsArray);
    });
  });

  describe('#move', function() {
    it('should place an X at the correct position', function() {
      game.move(0,'X');
      expect(game.board).toEqual(['X','','','','','','','','']);
    });
    it('should error if the position contains another counter', function() {
      game.move(0,'X');
      expect(function(){ game.move(0,'X'); }).toThrowError('Position taken');
    });
  });
});
