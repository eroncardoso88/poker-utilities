<template>
  <div>
    <Game :gameprops="game" />
  </div>
</template>

<script>
import Game from "../components/Game";
export default {
  components: {
    Game,
  },
  data() {
    return {
      game: {
        screenRecordingGame: true,
        firstMatch: true,
        gameId: 1,
      },
    };
  },
};
</script>


<style lang="scss" scoped>
@import "./index.scss";
</style>
