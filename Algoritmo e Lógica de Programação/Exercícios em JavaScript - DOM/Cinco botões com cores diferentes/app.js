let buttons = document.querySelectorAll("[id^='btn']")

buttons.forEach((btn) => {
    let prop = window.getComputedStyle(btn).getPropertyValue('background-color')
    btn.addEventListener('click', () => {
      let text = document.querySelector('h3')
      text.style.color =  prop
    })
})


