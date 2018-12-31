export class Main {
  private _context: CanvasRenderingContext2D;

  constructor(private _canvas: HTMLCanvasElement) {
    this._context = _canvas.getContext('2d');
  }

  start(): void {
    this._context.fillStyle = '#FEDCBA';
    this._context.font = 'normal 32pt sans';
    this._context.textAlign = 'center';
    this._context.fillText('Hello world!', this._canvas.width / 2, this._canvas.height / 2);
  }
}