window.addEventListener("DOMContentLoaded", () => {
  const allData = JSON.parse(localStorage.getItem("formData")) || [];

  allData.forEach((data) => {
    createCard(data); // Cria e exibe o card para cada item armazenado
  });
});

function createCard(data) {
  // Cria o card
  const card = document.createElement("div");
  card.classList.add("card");

  // Título
  const title = document.createElement("h2");
  title.classList.add("card-title");
  title.textContent = data.title;
  card.appendChild(title);

  // Preço
  const price = document.createElement("p");
  price.classList.add("card-price");
  price.textContent = data.price;
  card.appendChild(price);

  // Descrição
  const description = document.createElement("p");
  description.classList.add("card-description");
  description.textContent = data.description;
  card.appendChild(description);

  // Imagem
  if (data.image) {
    const img = document.createElement("img");
    img.classList.add("card-image");
    img.src = data.image; // A imagem vem como base64 do localStorage
    img.alt = "Imagem do anúncio";
    card.appendChild(img);
  }

  // intention
  const intention = document.createElement("div");
  intention.classList.add("intention-div");
  if (data.intention.trade) {
    const trade = document.createElement("span");
    trade.classList.add("intention-tag");
    trade.textContent = "Trocar";
    intention.appendChild(trade);
  }
  if (data.intention.sell) {
    const sell = document.createElement("span");
    sell.classList.add("intention-tag");
    sell.textContent = "Vender";
    intention.appendChild(sell);
  }
  card.appendChild(intention);

  // Contatos
  const contact = document.createElement("div");
  contact.classList.add("card-contact");
  if (data.contact.email) {
    const email = document.createElement("p");
    email.classList.add("card-email");
    email.textContent = `Email: ${data.contact.email}`;
    contact.appendChild(email);
  }
  if (data.contact.whatsapp) {
    const whatsapp = document.createElement("p");
    whatsapp.classList.add("card-whatsapp");
    whatsapp.textContent = `WhatsApp: ${data.contact.whatsapp}`;
    contact.appendChild(whatsapp);
  }
  card.appendChild(contact);

  // Adiciona o card ao container
  const cardContainer = document.getElementById("card-container-id");
  cardContainer.appendChild(card);
}
