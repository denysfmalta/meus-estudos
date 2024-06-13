function hide_all(){
    document.querySelectorAll('[id^="info"').forEach((el => {
        el.classList.add("d-none")
    }))
}

function show_tab(id){
    document.querySelector("#info" + id).classList.remove("d-none");
}

document.querySelectorAll('[id^="tab"').forEach((btn) => {
   btn.addEventListener('click', (btn) => {
    hide_all();
    show_tab(btn.target.id.substring(3))
   })
})

hide_all()
show_tab(1)
