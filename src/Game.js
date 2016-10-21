Game = function() { 'use strict';
  this.board = new Array(9).fill('');
  this.winCombinations = [[0,1,2], [3,4,5], [6,7,8], [0,3,6],
                          [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
};

Game.prototype = {
  displayBoard: function() {
    var firstRow = this.board[0] + ' | ' + this.board[1] + ' | ' + this.board[2];
    var secondRow = this.board[3] + ' | ' + this.board[4] + ' | ' + this.board[5];
    var thirdRow = this.board[6] + ' | ' + this.board[7] + ' | ' + this.board[8];
    return [firstRow, secondRow, thirdRow];
  },
  move: function(position, counter) {
    this._checkTaken(position);
    this.board[position] = counter;
  },
  _checkTaken: function(position) {
    if (this._isTaken(position)) { throw new Error ('Position taken'); }
  },
  _isTaken: function(position) {
    return this.board[position] !== '';
  }
};
