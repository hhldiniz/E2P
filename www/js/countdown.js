

function CountDownTimer(duration, granularity) {
  this.duration = duration;
  this.granularity = granularity || 1000;
  this.tickFtns = [];
  this.running = false;
  this.time;
  this.loop=true;
}

CountDownTimer.prototype.start = function() {
  if (this.running) {
    return;
  }
  this.running = true;
  var start = Date.now(),
      that = this,
      diff, obj;

  (function timer() {
    diff = that.duration - (((Date.now() - start) / 1000) | 0);
      that.time = diff;
      if(that.loop){
      if (diff > 0) {
       setTimeout(timer, that.granularity);
    } else {
      diff = 0;
      that.running = false;
    }}

    obj = CountDownTimer.parse(diff);
    that.tickFtns.forEach(function(ftn) {
      ftn.call(this, obj.hours,obj.minutes, obj.seconds);
    }, that);
  }());
};

CountDownTimer.prototype.onTick = function(ftn) {
  if (typeof ftn === 'function') {
    this.tickFtns.push(ftn);
  }
  return this;
};

CountDownTimer.prototype.expired = function() {
  return !this.running;
};

CountDownTimer.prototype.stop = function() {
  this.loop=false;
};

CountDownTimer.parse = function(seconds) {
  return {
    'hours': (seconds / 3600) | 0,
    'minutes': (seconds / 60) | 0,
    'seconds': (seconds % 60) | 0
  };
};