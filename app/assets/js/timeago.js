'use strict';

function time(timestamp) {
  var date = new Date(timestamp);
  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = Math.floor(seconds / 31536000);

  if (interval != 0 && (interval > 1 || seconds/2592000 > 11)) {
    if (interval%10 == 1 || interval%10 == 2 || interval%10 == 3 || interval%10 == 4)
      return "Pre" + interval + " godine";
    else
      return "Pre " + interval + " godina";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval != 0 && (interval > 1 || seconds/8640 >30)) {
    if (interval%10 == 1)
      return "Pre " + interval + " mesec";
    if (interval%10 == 2 || interval%10 == 3 || interval%10 == 4)
      return "Pre " + interval + " meseca";
    else
      return "Pre " + interval + " meseci";
  }
  interval = Math.floor(seconds / 86400);
  if (interval != 0 && (interval > 1 || seconds/3600 > 23)) {
    if (interval%10 == 1)
      return "Pre " + interval + " dan";
    else
      return "Pre " + interval + " dana";
  }
  interval = Math.floor(seconds / 3600);
  if (interval != 0 && (interval > 1 || seconds/60 > 59)) {
    if (interval%10 == 1)
      return "Pre " + interval + " sat";
    if (interval%10 == 2 || interval%10 == 3 || interval%10 == 4)
      return "Pre " + interval + " sata";
    else
      return "Pre " + interval + " sati";
  }
  interval = Math.floor(seconds / 60);
  if (interval != 0 && (interval > 1)) {
    if (interval%10 == 1)
      return "Pre "+ interval + " minut";
    else
      return "Pre "+ interval + " minuta";
  }
  if (seconds%10 == 1)
    return "Pre "+ Math.floor(seconds) + " sekundu";
  if (seconds%10 == 2 || seconds%10 == 3 || seconds%10 == 4)
    return "Pre "+ Math.floor(seconds) + " sekunde";
  else
    return "Pre "+ Math.floor(seconds) + " sekundi";
}


function getDate(timestamp){
  var date = new Date(timestamp);
  var month = date.getMonth()+1;
  var day = date.getDate();
  var year = date.getFullYear();
  var time = day + '.' + month + '.' + year;
  return time;
}

function getWholeDate(timestamp){
  var date = new Date(timestamp);
  var minute = date.getMinutes();
  var hour = date.getHours();
  var month = date.getMonth()+1;
  var day = date.getDate();
  var year = date.getFullYear();
  var time = day + '.' + month + '.' + year + ' at ' + hour+':'+minute;
  return time;
}
