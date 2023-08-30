const btns = document.querySelectorAll(".btn");
const btnSubmit = document.querySelector(".submit__button");

btns.forEach((elemento) => {
    elemento.addEventListener("click", () => {
        //ativa o botao da nota clicada             
        const clicadoAnteriormente = document.querySelector(".btn.active");

        if (clicadoAnteriormente !== null) {
            clicadoAnteriormente.classList.remove("active");
        }

        elemento.classList.add("active");

        //atualiza a nota que aparecera na tela final
        const nota = elemento.textContent;

        const feedbackNota = document.querySelector(".feedback__nota span");
        feedbackNota.innerHTML = nota;

        //habilita botao submit quando uma nota é selecionada
        btnSubmit.disabled = false;

    });
});

//oculta tela inicial e exibe tela final quando submit é clicado
btnSubmit.addEventListener("click", () => {
    document.querySelector('.survey').classList.remove("active");
    document.querySelector('.feedback').classList.add("active");
});