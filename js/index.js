
// =============================
// Seção 1 - Validação do Formulário
// =============================
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  let hasError = false;

  const validators = {
    "title-input": {
      validate: (value) => value.trim().length >= 4,
      message: "O título deve ter pelo menos 4 caracteres.",
    },
    "price-input": {
      validate: (value) => /^\d+([.,]\d{1,2})?$/.test(value),
      message: "Digite um valor numérico válido (ex: 10 ou 10,50).",
    },
    "description-input": {
      validate: (value) => value.trim().length >= 10,
      message: "A descrição deve ter pelo menos 10 caracteres.",
    },
    "image-input": {
      validate: (input) => input.files.length > 0,
      message: "Selecione uma imagem.",
    },
    "intention-fieldset": {
      validate: (tradeChecked, sellChecked) => tradeChecked || sellChecked,
      message: "Escolha pelo menos 1 das opções.",
    },
    "contact-fieldset": {
      validate: (emailValue, whatsappValue) => {
        return emailValue.trim().length > 0 || whatsappValue.trim().length > 0;
      },
      message: "Preencha pelo menos 1 forma de contato.",
    },
    "email-input": {
      validate: (value) => value.trim() === "" || /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value),
      message: "Digite um email válido.",
    },
    "whatsapp-input": {
      validate: (value) => value.trim() === "" || value.replace(/\D/g, "").length >= 11,
      message: "Digite um número de WhatsApp válido com pelo menos 11 dígitos.",
    },
  };

  Object.keys(validators).forEach((id) => {
    let inputField = document.getElementById(id);
    const validator = validators[id];
    let isValid = true;
    let messageElement = null;

    if (id === "intention-fieldset") {
      isValid = validator.validate(
        document.getElementById("trade-checkbox").checked,
        document.getElementById("sell-checkbox").checked
      );
      messageElement = inputField.querySelector(".announce-main__form-error-message");
    } else if (id === "contact-fieldset") {
      isValid = validator.validate(
        document.getElementById("email-input").value,
        document.getElementById("whatsapp-input").value
      );
      messageElement = inputField.querySelector(".announce-main__form-error-message");
    } else {
      if (!inputField) return;
      const value = id === "image-input" ? inputField : inputField.value;
      isValid = validator.validate(value);

      messageElement = inputField.parentElement.querySelector(".announce-main__form-error-message");
    }

    if (messageElement) {
      messageElement.textContent = isValid ? "" : validator.message;
    }

    if (!isValid) {
      hasError = true;
    }
  });

  if (hasError) {
    e.preventDefault();
  }
});
