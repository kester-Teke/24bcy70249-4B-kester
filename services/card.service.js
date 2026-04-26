import * as CardModel from "../models/card.model.js";

export const getCards = (page = 1, limit = 10) => {
  const all = CardModel.getAllCards();
  const p = Math.max(1, Number(page));
  const l = Math.max(1, Number(limit));

  const start = (p - 1) * l;
  const paginated = all.slice(start, start + l);

  const totalPages = Math.max(1, Math.ceil(all.length / l));

  return {
    totalCards: all.length,
    totalPages,
    currentPage: p,
    limit: l,
    cards: paginated,
    next: p < totalPages ? { page: p + 1, limit: l } : null,
    previous: p > 1 ? { page: p - 1, limit: l } : null
  };
};

export const getCard = CardModel.getCardById;
export const createCard = CardModel.createCard;
export const updateCard = CardModel.updateCard;
export const deleteCard = CardModel.deleteCard;
