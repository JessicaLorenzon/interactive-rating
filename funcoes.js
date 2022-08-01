const btnContainer = document.querySelector(".survey__classificacao");

const btns = btnContainer.querySelectorAll(".btn");

const btnSubmit = document.querySelector(".submit__button");

let nota = null;

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        nota = i + 1;
        if (document.querySelector(".btn.active") != null) {
            document.querySelector(".btn.active").classList.remove("active");
        }
        this.classList.add("active");

    })
}

btnSubmit.addEventListener("click", function () {
    document.querySelector(".feedback__nota span").innerHTML = nota;
    document.querySelector(".survey").classList.remove("active");
    document.querySelector(".feedback").classList.add("active");
})
