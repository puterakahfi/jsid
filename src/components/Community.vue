<template>
  <div>
    <div class="columns is-multiline">
      <div
        class="column is-12"
        v-for="community in communityData"
        :key="community.id"
        data-aos="fade-up"
      >
        <div class="box has-padding-bottom-5 has-equal-height">
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img :src="community.node.profile_image" alt="Image" />
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <h3
                  class="subtitle is-5 has-margin-top-5 has-margin-bottom-10"
                >{{ community.node.name }}</h3>
                {{ community.node.description }}
                <div class="is-flex">
                  <div class v-for="link in community.node.links" :key="link.label">
                    <b-tooltip :label="link.label" type="is-light">
                      <a class="button is-white" target="_blank" :href="link.url">
                        <span class="icon is-big">
                          <i :class="convertLabelToIcon(link.label)"></i>
                        </span>
                      </a>
                    </b-tooltip>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>



<static-query>
{
  community: allCommunity (filter: { published: { eq: true }},sortBy: "name", order: ASC){
    edges {
      node {
        id
        name
        description
        profile_image
        tags
        links{
          label
          url
        }
      }
    }
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      communityData: []
    };
  },
  mounted() {
    this.communityData = this.$static.community.edges;
  },
  methods: {
    convertLabelToIcon: function(label) {
      let faIcon = "fas fa-link";
      // this using font awesome
      if (label == "facebook") faIcon = "fab fa-facebook";
      if (label == "github") faIcon = "fab fa-github";
      if (label == "linkedin") faIcon = "fab fa-linkedin";
      if (label == "twitter") faIcon = "fab fa-twitter";
      if (label == "medium") faIcon = "fab fa-medium";
      if (label == "telegram") faIcon = "fab fa-telegram";

      return faIcon;
    }
  }
};
</script>


<style lang="scss" scoped>
.box {
  box-shadow: none;
  box-shadow: 0 0 25px rgba(103, 119, 239, 0.1);
  box-shadow: none;
  border: solid 1px #f5f5f5;
}
</style>
