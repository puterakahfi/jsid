<template>
  <div class="is-flex">
    <div class v-for="link in links" :key="link.label">
      <b-tooltip :label="link.label" type="is-light">
        <a class="button is-white" target="_blank" :href="link.url">
          <span class="icon">
            <i :class="convertLabelToIcon(link.label)+' is-2x'" ></i>
          </span>
        </a>
      </b-tooltip>
    </div>
  </div>
</template>


<script>
export default {
  props: ["links","size"],
  components: {},
  methods: {
    convertLabelToIcon: function(label) {
      let faIcon = "fas fa-link";
      // this using font awesome
      if (label == "facebook") faIcon = "fab fa-facebook";
      if (label == "github") faIcon = "fab fa-github";
      if (label == "linkedin") faIcon = "fab fa-linkedin";
      if (label == "twitter") faIcon = "fab fa-twitter";
      if (label == "medium") faIcon = "fab fa-medium";
      if (label == "youtube") faIcon = "fab fa-youtube";
      if (label == "website") faIcon = "fas fa-home";
      return faIcon;
    }
  }
};
</script>

<style lang="scss" scoped>
 .is-medium{
     font-size: 2em;
 }
</style>
