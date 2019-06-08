var spiderToFly = function (spider, fly){
  let distance = 0;
  let angle = (spider.charCodeAt(0) - fly.charCodeAt(0)) *45;
  console.log('The angle is ' + angle);
  let spiderFromCenter = (parseInt(spider[1],10));
  console.log('The spider\'s distance form center ' +spiderFromCenter);
  let flyFromCenter = (parseInt(fly[1],10));
  console.log('The fly\'s distance form center ' +flyFromCenter);

  // console.log((2 * spiderFromCenter * flyFromCenter * Math.cos(angle)));

  if (angle == 180) {
    distance = spiderFromCenter + flyFromCenter;
  } else {
    distance = (
      Math.sqrt(
        (spiderFromCenter **2 + flyFromCenter **2) - (2 * spiderFromCenter * flyFromCenter * Math.cos((Math.PI * angle) / 180))).toFixed(5));
    }
  // console.log((2 * spiderFromCenter * flyFromCenter * Math.cos(angle)));
  return distance;
}

console.log(spiderToFly('h3', 'e2'));
// console.log('h'.charCodeAt(0) - 'e'.charCodeAt(0));