// =============================
// Seção 1 - Validação do Formulário
// =============================

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");

  form.addEventListener("submit", (event) => {
    // Pegamos os elementos
    const title = document.getElementById("title-input").value.trim();
    const price = document.getElementById("price-input").value.trim();
    const description = document.getElementById("description-input").value.trim();
    const image = document.getElementById("image-input").files[0];
    const sellChecked = document.getElementById("sell-checkbox").checked;
    const tradeChecked = document.getElementById("trade-checkbox").checked;
    const email = document.getElementById("email-input").value.trim();
    const whatsapp = document.getElementById("whatsapp-input").value.trim();

    // Array para acumular erros
    let errors = [];

    // Validações básicas dos campos obrigatórios
    if (!title) errors.push("O título é obrigatório.");
    if (!price) errors.push("O preço é obrigatório.");
    if (!description) errors.push("A descrição é obrigatória.");
    if (!image) errors.push("A imagem da carta é obrigatória.");

    // Validação de intenção: pelo menos uma deve ser marcada
    if (!sellChecked && !tradeChecked) {
      errors.push("Selecione pelo menos uma opção de intenção (vender ou trocar).");
    }

    // Validação de contato: pelo menos um deve ser preenchido
    if (!email && !whatsapp) {
      errors.push("Informe pelo menos um contato (email ou WhatsApp).");
    }

    // Se houver erros, impedir envio e mostrar alertas
    if (errors.length > 0) {
      event.preventDefault();
      alert(errors.join("\n"));
      return;
    }

    // Se tudo certo, o envio segue normalmente (por enquanto só para teste)
    // No futuro, salvaremos os dados no localStorage aqui.
  });
});
