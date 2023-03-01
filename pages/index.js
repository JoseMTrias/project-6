import { useEffect, useState } from "react";

import styled from "styled-components";
import Card from "../components/Card";
import Form from "../components/Form";

export default function Home() {
  const [cardList, setCardList] = useState([]);
  let cards;
  useEffect(() => {
    fetch("/api/cards")
      .then((res) => res.json())
      .then((data) => (cards = data))
      .then(() => {
        console.log("index.js", cards);
      })
      .then(() => {
        setCardList(cards);
      });
  }, []);

  function addCard(newCard) {
    setCardList([newCard, ...cardList]);
  }

  function handleRemoveCard(id) {
    setCardList(cardList.filter((card) => card.id !== id));
  }

  function handleUpdateCard(updatedCard) {
    const updatedCardList = cardList.map((card) => {
      if (card.id === updatedCard.id) {
        return updatedCard;
      }
      return card;
    });
    setCardList(updatedCardList);
  }

  return (
    <BoardWrapper>
      <CardGrid>
        {cardList.map((card) => {
          return (
            <Card
              key={card._id}
              name={card.name}
              text={card.text}
              onRemoveCard={handleRemoveCard}
              onUpdateCard={handleUpdateCard}
              id={card._id}
            />
          );
        })}
      </CardGrid>
      <Form onAddCard={addCard} />
    </BoardWrapper>
  );
}

const BoardWrapper = styled.section`
  display: grid;
  grid-template-rows: min-content auto 48px;
  height: inherit;
`;

const CardGrid = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-content: start;
  margin: 0;
  padding: 20px;
  overflow-y: auto;
`;
