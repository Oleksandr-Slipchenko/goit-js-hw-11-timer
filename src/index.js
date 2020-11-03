import './styles.css';

// Вариант от ментора ////////////////////////////// не убирает слова days, hours, minutes, seconds

// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     this.targetDate = new Date(targetDate);

//     this.days = document.querySelector(`${selector} .value[data-value="days"]`);
//     this.hours = document.querySelector(`${selector} .value[data-value="hours"]`);
//     this.minutes = document.querySelector(`${selector} .value[data-value="mins"]`);
//     this.seconds = document.querySelector(`${selector} .value[data-value="secs"]`);
//   }
//   init() {
//     setInterval(() => this._countDown(), 1000)
//   }
//   _updateTime(totalSeconds) {
//     this.days.textContent = Math.floor(totalSeconds / 3600 / 24);
//     this.hours.textContent =
//       this._formatTime(Math.floor((totalSeconds / 3600) % 24));
//     this.minutes.textContent = this._formatTime(Math.floor((totalSeconds / 60) % 60));
//     this.seconds.textContent = this._formatTime(Math.floor(totalSeconds % 60));
//   }
//   _countDown() {
//     const currentDate = new Date();
//     const totalSeconds = (this.targetDate - currentDate) / 1000;
//     this._updateTime(totalSeconds)
//   }
//   _formatTime(time) {
//     return time < 10 ? `0${time}` : time;
//   }
// }


// const timer = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: '1 Jan 2021',
// });

// timer.init();

// Мой вариант //////////////////////////////////////

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = new Date(targetDate);

    this.title = document.querySelector('body');
    this.days = document.querySelector( `${selector} .value[data-value="days"]`);
    this.hours = document.querySelector( `${selector} .value[data-value="hours"]`);
    this.minutes = document.querySelector( `${selector} .value[data-value="mins"]`);
    this.seconds = document.querySelector(`${selector} .value[data-value="secs"]`);
    this.labels = document.querySelectorAll(`${selector} .label`);
  }
  newStringMarkUp() {
    return `<p>Новый Год через:</p>`;
  }

  startPage() {
    this.title.insertAdjacentHTML("afterbegin", this.newStringMarkUp());
      const endTime = this.targetDate;

      const currentTime = Date.now();
      const deltaTime = endTime - currentTime;
      const time = this.getTimeComponents(deltaTime);
      this.updateClockFace(time);
    // const time = this.getTimeComponents(0);
    // this.updateClockFace(time);
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
    this.days.textContent = `${day} дней :`;
    this.hours.textContent = `${hour} часов :`;
    this.minutes.textContent = `${minute} минут :`;
    this.seconds.textContent = `${second} секунд`;
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: '1 Jan 2021',
});

timer.start();