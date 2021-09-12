<template>
  <div>{{ numberOfPlayers }}</div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

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

  //   get fullName(): string {
  //     return `${this.user.firstName} ${this.user.lastName}`;
  //   }
}
</script>