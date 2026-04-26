# REST API for Playing Card Collection

## Student Details
Name: Dramane Traoré  
Roll No: 24BCY70270  

## Aim
To develop a RESTful API for managing playing card collections using Express.js.

## Technologies Used
- Node.js
- Express.js
- Postman

## Features
- Create a new card (POST)
- Get all cards with pagination (GET)
- Get a card by ID (GET)
- Update a card (PUT)
- Delete a card (DELETE)
- In-memory data storage

## API Endpoints

### GET /cards
Returns all cards with pagination.

### GET /cards/:id
Returns a specific card by ID.

### POST /cards
Creates a new card.

### PUT /cards/:id
Updates an existing card.

### DELETE /cards/:id
Deletes a card.

## How to Run

```bash
pnpm install
pnpm dev
