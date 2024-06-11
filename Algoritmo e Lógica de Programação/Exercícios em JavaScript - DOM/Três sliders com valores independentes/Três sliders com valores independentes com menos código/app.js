const ranges = document.querySelectorAll(["#range_1, #range_2, #range_3"])
const values = document.querySelectorAll(["#value_1, #value_2, #value_3"])

ranges.forEach(range => {
    range.setAttribute('min', 0)
    range.setAttribute('max', 100)
    range.setAttribute('value', 0)
});

ranges.forEach((range, index) => {
    range.addEventListener('input', (event) => {
        values[index].textContent = event.target.value;
    });
});