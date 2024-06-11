const range_1 = document.querySelector('#range_1');
const range_2 = document.querySelector('#range_2');
const range_3 = document.querySelector('#range_3');
range_1.setAttribute('min', 0);
range_1.setAttribute('max', 100);
range_1.value = 0;
range_2.setAttribute('min', 0);
range_2.setAttribute('max', 100);
range_2.value = 0;
range_3.setAttribute('min', 0);
range_3.setAttribute('max', 100);
range_3.value = 0;
range_1.addEventListener('input', (event) => {
    document.querySelector("#value_1").textContent = event.target.value;
})
range_2.addEventListener('input', (event) => {
    document.querySelector("#value_2").textContent = event.target.value;
})
range_3.addEventListener('input', (event) => {
    document.querySelector("#value_3").textContent = event.target.value;
})