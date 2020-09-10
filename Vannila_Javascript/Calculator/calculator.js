function calculator() {
  val1 = parseFloat(document.querySelector('#inpa').value)
  val2 = parseFloat(document.querySelector('#inpb').value)
  opt = document.querySelector('#options').value
  res = document.querySelector('.result')
  if (opt == 1) {
    count = val1 + val2
  } else if (opt == 2) {
    count = val1 - val2
  } else if (opt == 3) {
    count = val1 * val2
  } else if (opt == 4) {
    count = val1 / val2
  } else {
    count = 0
  }
  if (count > 0) {
    res.style.color = '#00ff00'
  } else if (count < 0) {
    res.style.color = '#ff0000'
  } else {
    res.style.color = '#ffffff'
  }
  res.textContent = count
}
