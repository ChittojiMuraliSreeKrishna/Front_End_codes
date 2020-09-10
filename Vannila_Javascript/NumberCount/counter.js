let count = 0

const value = document.getElementById('value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList
    if (styles.contains('decrease')) {
      count--
    } else if (styles.contains('increase')) {
      count++
    } else {
      count = 0
    }
    if (count > 0) {
      value.style.color = '#00ff00'
    } else if (count < 0) {
      value.style.color = '#ff0000'
    } else {
      value.style.color = '#ffffff'
    }
    value.textContent = count
  })
})
