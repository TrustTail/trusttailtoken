document.addEventListener("DOMContentLoaded", function() {
    var countDownDate = new Date("July 1, 2024").getTime();
  
    var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
  
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      var countdownElement = document.getElementById("countdown");
      countdownElement.innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
  
      countdownElement.classList.add("pulsate");
      setTimeout(() => countdownElement.classList.remove("pulsate"), 500);
  
      if (distance < 0) {
        clearInterval(x);
        countdownElement.innerHTML = "EXPIRED";
      }
    }, 1000);
  });
  