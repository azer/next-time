module.exports = nextTime;

function parse(input, now){
  var parsed, abbr;

  parsed = String(input).split(/[^\d]+/).map(Number);
  abbr = input.match(/[ap]m$/);

  if(abbr && abbr[0] == 'pm'){
    parsed[0] += 12;
  }

  return {
    hour: parsed[0],
    min: parsed[1] == undefined ? now.getMinutes() : parsed[1]
  };
}

function nextTime(input){
  var now    = new Date(),
      next   = new Date(),
      parsed = parse(input, now);

  next.setHours(parsed.hour);
  next.setMinutes(parsed.min);

  if( next < now ) {
    next.setDate( next.getDate() + 1);
  }

  return next;
}
