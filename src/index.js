import './styles.css';

// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });


class CountdownTimer {
  constructor({ onTick, targetDate}) {
    this.refs;
    this.onTick = onTick;
    this.targetDate = targetDate;
    // this.timeStart();
  }

  // timeStart() {
  //   const time = this.getTimeComponents(0);
  //   this.onTick(time);
  // }

  start() {
    const endTime = this.targetDate;

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = endTime - currentTime;
      const time = this.getTimeComponents(deltaTime);
      console.log(time);
      this.onTick(time);
    }, 1000);
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours =
      this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
}

const countdownTimer = new CountdownTimer({
  onTick: updateClockFace,
  targetDate: new Date('Dec 31, 2020'),
});

countdownTimer.start();

const refs = {
  separators: document.querySelectorAll('.label'),
  timeDays: document.querySelector('[data-value="days"]'),
  timeHours: document.querySelector('[data-value="hours"]'),
  timeMins: document.querySelector('[data-value="mins"]'),
  timeSecs: document.querySelector('[data-value="secs"]'),
}

for (const separator of refs.separators) {
  separator.textContent = "";
}

function updateClockFace({ days, hours, mins, secs }) {
  // separatorss.textContent = "";
  refs.timeDays.textContent = `${days} :`;
  refs.timeHours.textContent = `${hours} :`;
  refs.timeMins.textContent = `${mins} :`;
  refs.timeSecs.textContent = `${secs}`;
}

// console.log(separators);
// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });


// const CountdownTimer = {

//   start() {
//     const endTime = Date.now();

//     setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - endTime;
//       const time = getTimeComponents(deltaTime);
//       console.log(time);
//       updateClockFace(time);
//     }, 1000);
//   }

// };

// CountdownTimer.start();

  /*
   * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
   */
  // function pad(value) {
  //   return String(value).padStart(2, '0');
  // }

  //   /*
//    * - Принимает время в миллисекундах
//    * - Высчитывает сколько в них вмещается часов/минут/секунд
//    * - Возвращает обьект со свойствами hours, mins, secs
//    * - Адская копипаста со стека 💩
//    */
// function getTimeComponents(time) {
//     const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours =
//       pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { days, hours, mins, secs };
//   }









// Repeta's example


// const refs = {
//   startBtn: document.querySelector('button[data-action-start]'),
//   stopBtn: document.querySelector('button[data-action-stop]'),
//   clockface: document.querySelector('.js-clockface'),
// };

// class Timer {
//   constructor({ onTick }) {
//     this.intervalId = null;
//     this.isActive = false;
//     // // this.onTick = onTick;

//     this.init();
//   }

//   init() {
//     const time = this.getTimeComponents(0);
//     // this.onTick(time);
//   }

//   start() {
//     if (this.isActive) {
//       return;
//     }

//     const endTime = Date.now();
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - endTime;
//       const time = this.getTimeComponents(deltaTime);

//       // this.onTick(time);
//     }, 1000);
//   }

//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//     const time = this.getTimeComponents(0);
//     // this.onTick(time);
//   }

//   /*
//    * - Принимает время в миллисекундах
//    * - Высчитывает сколько в них вмещается часов/минут/секунд
//    * - Возвращает обьект со свойствами hours, mins, secs
//    * - Адская копипаста со стека 💩
//    */
//   getTimeComponents(time) {
//     const hours = this.pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//     );
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { hours, mins, secs };
//   }

//   /*
//    * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
//    */
//   pad(value) {
//     return String(value).padStart(2, '0');
//   }
// }

// const timer = new Timer({
//   // onTick: updateClockface,
// });
// console.log(timer);
// refs.startBtn.addEventListener('click', timer.start.bind(timer));
// refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

/*
 * - Принимает время в миллисекундах
 * - Высчитывает сколько в них вмещается часов/минут/секунд
 * - Рисует интерфейс
 */
// function updateClockface({ hours, mins, secs }) {
//   refs.clockface.textContent = `${hours}:${mins}:${secs}`;
// }