let boxes = document.querySelectorAll('[id^="box"]')
console.log(boxes)

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', () => {
        for (let j = 0; j < boxes.length; j++) {
            if (i === j) {
                boxes[j].style.backgroundColor = 'yellow'; // Área clicada fica amarela
            } else {
                boxes[j].style.backgroundColor = 'red'; // Áreas não clicadas ficam vermelhas
            }
        }
    });
}
