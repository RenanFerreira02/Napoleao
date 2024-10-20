let form = document.querySelector('#formConta');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let text = document.querySelector('#texto_form');
    text.classList.add("d-block")
    console.log(form)
})
