import { Main } from './js/Main';

let canvas = wx.createCanvas();

let game = new Main(canvas);
game.start();