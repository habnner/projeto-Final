const formContato = document.getElementById("formContato");

if(formContato){
    formContato.addEventListener("submit", function(event){
        event.preventDefault();
    


    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const motivo = document.getElementById("causa").value;

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nome || !email || !mensagem || !motivo) {
        alert("Preencha todos os campos!");
        return;
    }

    if (!emailValido.test(email)) {
        alert("Digite um e-mail válido!");
        return;
    }

    alert("Sua mensagem foi enviada com sucesso!");
    this.reset();
});
}


function buscarLivro() {
    const termo = document.getElementById("buscaLivro").value.toLowerCase();
    const livros = document.querySelectorAll(".livro");
    let encontrado = false;

    livros.forEach(livro => {
        const titulo = livro.getAttribute("data-titulo").toLowerCase();
        if (titulo.includes(termo)) {
            livro.style.display = "block";
            encontrado = true;
        } else {
            livro.style.display = "none";
        }
    });

    if (!encontrado) {
        alert("Livro não encontrado.");
    }}
