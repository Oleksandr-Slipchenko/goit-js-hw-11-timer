import './styles.css';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = new Date(targetDate);

    this.days = document.querySelector( `${selector} .value[data-value="days"]`);
    this.hours = document.querySelector( `${selector} .value[data-value="hours"]`);
    this.minutes = document.querySelector( `${selector} .value[data-value="mins"]`);
    this.seconds = document.querySelector(`${selector} .value[data-value="secs"]`);
    this.labels = document.querySelectorAll(`${selector} .label`);
  }
  startPage() {
    const time = this.getTimeComponents(0);
    this.updateClockFace(time);
  }

  start() {
    const endTime = this.targetDate;
    this.startPage();

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = endTime - currentTime;
      const time = this.getTimeComponents(deltaTime);
      this.updateClockFace(time);
    }, 1000);
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
  getTimeComponents(time) {
    const day = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hour =
      this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minute = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const second = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { day, hour, minute, second };
  }

  updateClockFace({ day, hour, minute, second }) {
      for (const label of this.labels) {
  label.textContent = "";
  }
    this.days.textContent = `${day} :`;
    this.hours.textContent = `${hour} :`;
    this.minutes.textContent = `${minute} :`;
    this.seconds.textContent = `${second}`;
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: '1 Jan 2021',
});

timer.start();