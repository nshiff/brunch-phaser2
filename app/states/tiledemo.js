module.exports = {

  create: function () {
    var world = this.world;

    var carrot = this.carrot = this.add.image(world.width * 0.75, world.centerY, 'carrot');
    carrot.anchor.set(0.5);

  },

  update: function () {

  },

  restart: function () {
    this.state.restart();
  },

  quit: function () {
    this.state.start('menu');
  }

};
