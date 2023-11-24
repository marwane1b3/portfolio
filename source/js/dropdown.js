let x, i, j, l, ll, selElmnt, a, b, c;

x = document.getElementsByClassName("dropdown-container");
l = x.length;

for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];

  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);

  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");

  for (j = 1; j < selElmnt.length; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;

    c.addEventListener("click", function () {
      let s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      let h = this.parentNode.previousSibling;

      for (let k = 0; k < s.length; k++) {
        if (s.options[k].innerHTML == this.innerHTML) {
          s.selectedIndex = k;
          h.innerHTML = this.innerHTML;

          let y = this.parentNode.getElementsByClassName("same-as-selected");
          for (let m = 0; m < y.length; m++) {
            y[m].removeAttribute("class");
          }

          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });

    b.appendChild(c);
  }

  x[i].appendChild(b);

  a.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  let x = document.getElementsByClassName("select-items");
  let y = document.getElementsByClassName("select-selected");

  for (let i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      continue;
    }
    y[i].classList.remove("select-arrow-active");
  }

  for (let i = 0; i < x.length; i++) {
    if (elmnt != y[i]) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);
