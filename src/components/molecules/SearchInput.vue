<template>
  <b-field>
    <b-input
      placeholder=" masukkan nama untuk melakukan pencarian "
      type="search"
      icon-pack="fas"
      icon="search"
      v-model="search"
      @keyup="onKeyUp"
    ></b-input>
  </b-field>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  },

  computed: {
    onKeyUp() {
      this.$emit("changeValue", this.search);
    }
  }
};
</script>

