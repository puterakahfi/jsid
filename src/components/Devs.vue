<template>
  <div>
    <div class="columns is-multiline">
      <div class="column is-6" v-for="dev in devs" :key="dev.id" data-aos="zoom-in">
        <div class="box has-padding-bottom-5 has-equal-height">
          <article class="media">
            <div class="media-left">
              <figure class="image is-96x96">
                <br />

                <g-image class="is-rounded" :src="dev.node.profile_image" width="500" />
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p
                  v-if="dev.node.company !== ''"
                  class="is-size-7 has-margin-bottom-5 has-text-grey"
                >Company: {{ dev.node.company }}</p>

                <h3 class="subtitle is-5 has-margin-top-5 has-margin-bottom-10">{{ dev.node.name }}</h3>
                {{ dev.node.description }}
                <div class="tags are-small">
                  <span class="tag" v-for="skill in dev.node.skills" :key="skill">{{ skill }}</span>
                </div>
                <div class="is-flex">
                  <div class v-for="link in dev.node.links" :key="link.label">
                    <b-tooltip :label="link.label" type="is-light">
                      <a class="button is-white" target="_blank" :href="link.url">
                        <span class="icon is-small">
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
<script>
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  props: ["devs"],
  data() {
    return {
      facebook: faFacebook,
      github: faGithub
    };
  },
  components: {
    FontAwesomeIcon
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
      if (label == "youtube") faIcon = "fab fa-youtube";
      return faIcon;
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  box-shadow: none;
  border-radius: 5px;
  box-shadow: 0 0 25px rgba(103, 119, 239, 0.1);
  box-shadow: none;
  border: solid 1px #f7f7f7;
  transition: all 0.3s ease-in-out;

  &:hover {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
    box-shadow: 0 0 25px rgba(103, 119, 239, 0.1);
    color: currentColor;
  }
}
</style>


