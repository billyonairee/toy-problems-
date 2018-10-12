$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  var p = $("p").text().trim().split(" ");

  for(var i = 0; i < p.length; i++) {
      p[i] = `<span>${p[i]}</span> `
  }
  $('p').html(p)


  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!
  var colorChange = function () {
    var rgbColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
    $('span').css('color',rgbColor)
  }

   setInterval(function()
    {
      colorChange()
    },1000);
});