

setInterval(function()  {
    var currentTime = dayjs();
    $('#1a').text(currentTime.format('h: m: s'));
}, 1000);

//testing