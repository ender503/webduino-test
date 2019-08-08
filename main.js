const webduino = require('webduino-js');
const { Dht, RGBLed } = webduino.module;
const board = new webduino.WebArduino('10Qpbgjy');

board.on('ready', () => {
  const led = new RGBLed(board, board.getDigitalPin(15), board.getDigitalPin(12), board.getDigitalPin(13));
  led.setColor('#ff0000');

  const dht = new Dht(board, board.getDigitalPin(5));
  dht.read(event => {
    console.log(event);
  }, 1000);
});
