var nextTime = require("./");

it('returns the nearest date of given time', function(){

  var now       = new Date(),
      h         = now.getHours(),
      m         = now.getMinutes(),

      today1    = h + ':' + (m+1),
      today2    = h + 1 + ':0',

      tomorrow1 = h + ':' + (m-1),
      tomorrow2 = h - 1;

  expect(nextTime(today1).getDate()).to.equal(now.getDate());
  expect(nextTime(today2).getDate()).to.equal(now.getDate());
  expect(nextTime(today2).getMinutes()).to.equal(0);

  expect(nextTime(tomorrow1).getDate()).to.equal(now.getDate() + 1);
  expect(nextTime(tomorrow2).getDate()).to.equal(now.getDate() + 1);
  expect(nextTime(tomorrow2).getMinutes()).to.equal(now.getMinutes());

});
