let cards = [
  {
    id: Date.now(),
    suit: "diamonds",
    value: "queen",
    collection: "royal"
  }
];

export const getAllCards = () => cards;

export const getCardById = (id) =>
  cards.find(card => String(card.id) === String(id));

export const createCard = (cardData) => {
  const newCard = {
    id: Date.now(),
    ...cardData
  };
  cards.push(newCard);
  return newCard;
};

export const updateCard = (id, updates) => {
  const card = cards.find(c => String(c.id) === String(id));
  if (!card) return null;
  Object.assign(card, updates);
  return card;
};

export const deleteCard = (id) => {
  const index = cards.findIndex(c => String(c.id) === String(id));
  if (index === -1) return false;
  cards.splice(index, 1);
  return true;
};
