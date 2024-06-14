let boxes = document.querySelectorAll('[id^="box"]')

boxes.forEach(box => {
    box.addEventListener('click', () => {
        boxes.forEach(e => {
            if (e === box){
                e.style.backgroundColor = 'yellow';
            } else {
                e.style.backgroundColor = 'red'
            }
        })
    }); 
})
