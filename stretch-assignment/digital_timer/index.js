
let sect = document.getElementById("secondTens");
  let sec = document.getElementById("secondOnes");
  let mil = document.getElementById("msTens");
  let hun = document.getElementById("msHundreds");

  let s = 0,
    m = 0,
    h = 0,
    b = 0,
    t = 0;


  let count = setInterval(function() {
    b += 1;
    if (b === 1) {
      h += 1;
      hun.textContent = h.toString().charAt(0);
      b = 0;
      if (h === 10) {
        // return countUpDown(m)
        m += 1;
        mil.textContent = m.toString().charAt(0);
        h = 0;
        if (m === 10) {
          s += 1;
          sec.textContent = s.toString().charAt(0);
          m = 0;
          if (s === 10) {
            t+=1;
            sect.textContent = t.toString().charAt(0);
            s = 0;
          }
        }
      }
    }
  }, 10);

  setTimeout(function() {
        document.body.style.color = "red"
    t=1;
    sect.innerHTML = t;
    h=0;
    hun.innerHTML = h;
    m=0;
    mil.innerHTML = m;
    s=0;
    sec.innerHTML = s;

    clearInterval(count);
  }, 10000)
