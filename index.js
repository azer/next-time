module.exports = nextTime;

function nextTime(input){
  var now    = new Date(),
      next   = new Date(),
      parsed = String(input).split(':').map(Number),
      hour   = parsed[0],
      min    = parsed[1] == undefined ? now.getMinutes() : parsed[1];

  next.setHours(hour);
  next.setMinutes(min);

  if( next < now ) {
    next.setDate( next.getDate() + 1);
  }

  return next;
}
