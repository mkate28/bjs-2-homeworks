class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, action) {
    if (!time || !action) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    if (this.alarmCollection.some(elem => elem.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }
    this.alarmCollection.push({callback: action, time, canCall: true});
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
  }

  getCurrentFormattedTime() {
    const currentTime = new Date().toLocaleTimeString('ru-RU').slice(0,5);
    return currentTime;
  }

  start() {
    if (this.intervalId) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach(item => {
        if (item.time === this.getCurrentFormattedTime() && item.canCall === true) {
          item.canCall = false;
          item.callback();
        }
      });
    },1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(item => item.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}