window.addEventListener('DOMContentLoaded', () => {
  const allData = JSON.parse(localStorage.getItem('formData')) || []

  allData.forEach(data => {
    createCard(data)
  })
})

function createCard (data) {
  // Cria o card
  const card = document.createElement('div')
  card.classList.add('card')

  // Div da esquerda
  const cardImgDiv = document.createElement('div')
  cardImgDiv.classList.add('card-img')
  card.appendChild(cardImgDiv)

  // Div da direita
  const cardInfoDiv = document.createElement('div')
  cardInfoDiv.classList.add('card-info')
  card.appendChild(cardInfoDiv)

  // Adiciona o card ao container
  const cardContainer = document.getElementById('card-container-id')
  cardContainer.appendChild(card)

  // Imagem
  if (data.image) {
    const img = document.createElement('img')
    img.classList.add('card-image')
    img.src = data.image // A imagem vem como base64 do localStorage
    img.alt = 'Imagem do anúncio'
    cardImgDiv.appendChild(img)
  }

  // Título
  const title = document.createElement('h2')
  title.classList.add('card-title')
  title.textContent = data.title
  cardInfoDiv.appendChild(title)

  // Preço
  const price = document.createElement('p')
  price.classList.add('card-price')
  price.textContent = data.price
  cardInfoDiv.appendChild(price)

  // Descrição
  const description = document.createElement('p')
  description.classList.add('card-description')
  description.textContent = data.description
  cardInfoDiv.appendChild(description)

  // intention
  const intention = document.createElement('div')
  intention.classList.add('intention-div')
  if (data.intention.trade) {
    const trade = document.createElement('span')
    trade.classList.add('intention-tag')
    trade.textContent = 'Trocar'
    intention.appendChild(trade)
  }
  if (data.intention.sell) {
    const sell = document.createElement('span')
    sell.classList.add('intention-tag')
    sell.textContent = 'Vender'
    intention.appendChild(sell)
  }
  cardInfoDiv.appendChild(intention)

  // Contatos
  if (data.contact.email) {
    const email = document.createElement('p')
    email.classList.add('card-email')
    email.textContent = `Email: ${data.contact.email}`
    cardInfoDiv.appendChild(email)
  }
  if (data.contact.whatsapp) {
    const whatsapp = document.createElement('p')
    whatsapp.classList.add('card-whatsapp')
    whatsapp.textContent = `WhatsApp: ${data.contact.whatsapp}`
    cardInfoDiv.appendChild(whatsapp)
  }

  // Botão contato
  const seeContact = document.createElement('button')
  seeContact.classList.add('card-contact')
  seeContact.textContent = 'Entrar em Contato'
  cardInfoDiv.appendChild(seeContact)
}
