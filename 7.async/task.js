class AlarmClock {
  constructor(alarmCollection, intervalId) {
    this.alarmCollection = [],
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    if (this.alarmCollection.find(item => item.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }
    
    let object = {
      callback: callback,
      time: time,
      canCall: true
    };
    
    this.alarmCollection.push(object);
  }
  
  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
  }
  
  getCurrentFormattedTime() {
    const time = new Date().toLocaleTimeString("ru-Ru", {
        hour: "2-digit",
        minute: "2-digit",
      });
      
    return time;
  }

  start() {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach(element => {
        if(element.canCall === true && element.time === this.getCurrentFormattedTime()) {
          element.canCall = false;
          element.callback();
        }
      })
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(element => element.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}