<template>
  <div>
    <h1>Hello world!</h1>
    <h4 v-if="mariana === true">Mariana will study VueJs with Nuxt</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      mariana: false,
    };
  },
  computed: {},
  methods: {
    toggleMariana() {
      setTimeout(() => {
        this.mariana = !this.mariana;
      }, 2000);
    },
  },
  created: function () {
    this.toggleMariana();
  },
};
</script>


<style lang="scss" scoped>
@import "./index.scss";
</style>
