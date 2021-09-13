import { Card, Suite, Rank } from './Card'
import { shuffleArray } from './Misc';

const validSuites: Suite[] = ["hearts", "spades", "diamonds", "clubs"];
const validRanks: Rank[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

export type validNumberOfCards = 52;

export class GameRules {
  public deck: Card[] = [];
  public cardsDrawn: Card[] = [];
  public numberOfCards: validNumberOfCards;
  public cardsRemaining: number;
  public matchNumber: number;
  public numberOfPlayers: number;

  constructor(matchNumber: number, numberOfPlayers: number) {
    this.numberOfCards = 52;
    this.cardsRemaining = 52;
    this.numberOfPlayers = numberOfPlayers;
    this.matchNumber = matchNumber;
    this.buildDeck();
  }

  buildDeck() {
    this.deck = [];
    this.cardsDrawn = [];

    validSuites.forEach((suite: Suite) => {  
      validRanks.forEach((rank: Rank) => {
        this.deck.push(new Card(rank, suite));
      })
    });
  }

  drawCard() {
    if (!this.isEmpty()) {
      const cardFromTop = this.deck.pop()
      cardFromTop ? this.cardsDrawn.push(cardFromTop) : null
      return cardFromTop
    }
    return null
  }

  firstRound (numberOfPlayers: number) {
    
  }

  isEmpty() {
    return this.deck.length === 0; 
  }
}