import * as CardService from "../services/card.service.js";

export const getAllCards = (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const data = CardService.getCards(page, limit);
  res.json(data);
};

export const getCardById = (req, res) => {
  const card = CardService.getCard(req.params.id);
  if (!card) return res.status(404).json({ message: "Card not found" });
  res.json(card);
};

export const createCard = (req, res) => {
  const { suit, value, collection } = req.body;
  if (!suit || !value || !collection) {
    return res.status(400).json({ message: "suit, value and collection required" });
  }
  const newCard = CardService.createCard({ suit, value, collection });
  res.status(201).json(newCard);
};

export const updateCard = (req, res) => {
  const updated = CardService.updateCard(req.params.id, req.body);
  if (!updated) return res.status(404).json({ message: "Card not found" });
  res.json(updated);
};

export const deleteCard = (req, res) => {
  const deleted = CardService.deleteCard(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Card not found" });
  res.json({ message: "Card deleted successfully" });
};
