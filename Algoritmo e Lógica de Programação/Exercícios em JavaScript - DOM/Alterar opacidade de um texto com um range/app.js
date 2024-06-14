let text = document.querySelector('h3')
let range = document.querySelector('#range')
range.setAttribute('min', 0)
range.setAttribute('max', 100)
range.addEventListener('input', (e) => {
    text.style.opacity = e.target.value / 100
})