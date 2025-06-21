let usandoErros = false;
let perguntas = todasPerguntas;

// Renderiza o formulário de perguntas
function renderizarFormulario() {
  const form = document.getElementById("quiz-form");
  form.innerHTML = "";

  perguntas.forEach((q, i) => {
    const div = document.createElement("div");
    div.classList.add("questao");

    const enunciado = `<p class="enunciado">${i + 1}. ${q.texto}</p>`;

    const alternativas = q.alternativas.map(a => `
      <li>
        <label>
          <input type="radio" name="${q.id}" value="${a}" required>
          ${a}
        </label>
      </li>
    `).join("");

    div.innerHTML = enunciado + `<ul class="alternativas">${alternativas}</ul>`;
    form.appendChild(div);
  });
}

// Ação ao clicar em "Enviar"
document.getElementById("submit-btn").addEventListener("click", () => {
  const respostas = new FormData(document.getElementById("quiz-form"));
  let certas = 0;
  const erros = [];

  perguntas.forEach((q) => {
    const resposta = respostas.get(q.id);
    if (resposta === q.correta) {
      certas++;
    } else {
      erros.push(q);
    }
  });

  const percentual = Math.round((certas / perguntas.length) * 100);
  document.getElementById("resultado").innerText = `Acertos: ${percentual}%`;

  localStorage.setItem("erros", JSON.stringify(erros));

  document.getElementById("refazer-tudo-btn").style.display = "inline-block";
  document.getElementById("refazer-erros-btn").style.display = erros.length > 0 ? "inline-block" : "none";
});

// Refazer tudo
document.getElementById("refazer-tudo-btn").addEventListener("click", () => {
  usandoErros = false;
  perguntas = todasPerguntas;
  document.getElementById("resultado").innerText = "";
  renderizarFormulario();
});

// Refazer só os erros
document.getElementById("refazer-erros-btn").addEventListener("click", () => {
  usandoErros = true;
  const errosSalvos = JSON.parse(localStorage.getItem("erros")) || [];
  perguntas = errosSalvos.length ? errosSalvos : todasPerguntas;
  document.getElementById("resultado").innerText = "";
  renderizarFormulario();
});

// Inicializa
renderizarFormulario();

