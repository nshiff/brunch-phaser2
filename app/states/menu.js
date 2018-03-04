module.exports = {

  create: function () {
    var title = this.add.text(0, 0, 'Tile Demo', {
      fill: 'white',
      font: '100px fantasy'
    });
    title.alignIn(this.world, Phaser.CENTER);

    this.input.onTap.add(this.startGame.bind(this));
  },

  startGame: function () {
    this.state.start('tiledemo');
  }

};
