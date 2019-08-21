class EventsEmitter {
  constructor (events) {
    this.events = events;
  }

  on(eventName, callback) {
    if (!this.events[eventName]) return console.warn(`Event ${eventName} does not exist`);

    this.events[eventName].push(callback);
  }

  off(eventName, callback) {
    this.events[eventName].forEach(function (cb, index) {
      if (callback === cb) {
        this.events[eventName].splice(index, 1);
      }
    });
  }

  emit(eventName, props) {
    this.events[eventName].forEach(function (cb) {
      cb(props);
    });
  }
}


class Movie {
  constructor (title, year, duration) {
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.eventsEmitter = new EventsEmitter({
      'play': [],
      'pause': [],
      'resume': [],
    });
  }

  on(eventName, callback) {
    this.eventsEmitter.on(eventName, callback);
  }

  off(eventName, callback) {
    this.eventsEmitter.off(eventName, callback);
  }

  play() {
    console.log("Movie is playing");
    this.eventsEmitter.emit('play');
  }

  pause() {
    console.log("Movie is paused");
    this.eventsEmitter.emit('pause');
  }

  resume() {
    console.log("Movie is resuming");
    this.eventsEmitter.emit('resume');
  }
}

var terminator = new Movie('Terminator', 1984, 147);
    
    terminator.on('play', function () {
      console.log('Terminator is playing');
    });

    // terminator.on('terminar', function () {
    //   console.log('Terminator ha terminado');
    // });

terminator.play();