function getDurations () {
  
  const getMillisecondsSince = function (start) {
    return ((new Date ()).getTime() - new Date (start, 0, 1))
  }
  
  const getYearsSince = function (start, round) {
    return 1/round * Math.floor(round * Math.floor(getMillisecondsSince(start) / (1000 * 60 * 60 * 24 * 7 * 52)))
  }
  
  document.getElementById("years-of-professional-experience").innerHTML = getYearsSince(2015)
  document.getElementById("years-of-personal-experience").innerHTML = getYearsSince(2000, 5)
  document.getElementById("age-of-amelie").innerHTML = '9-month-old'
}

function ee() {
  console.log('oremor nhoj em llik tsum uoy emag eht niw ot')
  document.getElementsByTagName("header")[0].style.backgroundImage = "url('/assets/doom.jpg')";
}
