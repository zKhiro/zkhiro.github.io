export class AnimationFrame {
  private readonly lastTimestamp = 1;

  private animationCallback: (elapsed: number) => void;
  private animationRequested: number;

  private elapsed           = 0;
  private previousTimestamp = 0;
  private timestampStarted  = 0;

  readonly duration: number;
  readonly delay: number;


  constructor(animationCallback: (elapsed: number) => void, duration: number, delay = 0) {
    this.animationCallback  = animationCallback;
    this.duration           = duration;
    this.delay              = delay;
  }

  private animationHandler = (timestamp: DOMHighResTimeStamp) => {
    if (!this.timestampStarted) { this.timestampStarted = timestamp; }

    this.elapsed = Math.min((timestamp - this.timestampStarted) / this.duration, this.lastTimestamp);

    if (this.previousTimestamp !== timestamp) {
      this.animationCallback(this.elapsed);
    }

    if (this.elapsed < this.lastTimestamp) {
      this.previousTimestamp = timestamp;
      this.requestNewFrame();
    }
  }

  private requestNewFrame = () => window.requestAnimationFrame(this.animationHandler);

  start() {
    setTimeout(() => this.animationRequested = this.requestNewFrame(), this.delay);
  }

  stop() {
    window.cancelAnimationFrame(this.animationRequested);
  }
}
