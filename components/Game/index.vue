<template>
  <div>
    <div>
      <h3>Texas hold'em</h3>
    </div>
    <div>
      <p>First match?</p>
      <input
        type="checkbox"
        name="first-match"
        id="firstMatch"
        v-model="firstMatch"
      />
    </div>
    <div>
      <p>Number of Players:</p>
      <input type="number" v-model="numberOfPlayers" />
    </div>
    <div>
      <br /><br /><br /><br />
      <p>Ready?</p>
      <input type="button" value="Start new game" @click="setNewGame" />
    </div>
    <div>
      <br /><br /><br /><br />
      <h2 v-if="!gameStarted">GAME NOT STARTED.</h2>
      <h2 v-else>GAME IS ON!</h2>
    </div>
    <div>
      <br /><br /><br /><br />
      <p>Draw card?</p>
      <input type="button" value="Draw one card" @click="drawSingleCard" />
    </div>
    <div>
      <br /><br /><br /><br />
      <p>Developer Info:</p>
      <input type="button" value="Log stuff" @click="logEverything" />
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
// @ts-ignore
import { GameRules } from "./GameRules.ts";

interface GameTypes {
  screenRecordingGame: boolean;
  firstMatch: boolean;
  gameId: number;
}

@Component
export default class Game extends Vue {
  @Prop({ type: Object, required: true }) readonly gameprops!: GameTypes;

  private numberOfPlayers: number = 1;
  private currentTurn: number = 0;
  private currentGame: GameRules;
  private matchNumber: number = 0;
  private firstMatch: boolean = true;
  private gameStarted: boolean = false;

  drawSingleCard() {
    this.currentGame.drawCard();
  }

  setNewGame() {
    this.gameStarted = true;
    let matchNumber: number;
    this.firstMatch ? (matchNumber = 0) : (matchNumber = 1);
    const newGame = new GameRules(matchNumber, this.numberOfPlayers);
    this.currentGame = newGame;
  }

  private logEverything() {
    const displayInfo = (({
      numberOfPlayers,
      currentTurn,
      firstMatch,
      matchNumber,
    }) => ({
      numberOfPlayers,
      currentTurn,
      firstMatch,
      matchNumber,
    }))(this);
    console.table(displayInfo);
    console.log(this.currentGame);
  }
}
</script>