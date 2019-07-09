<template>
  <div class="card random-dev">
    <div class="card-front">
      <span
        class="tag is-white has-text-grey-light is-small has-margin-top-5 has-margin-left-5"
      >Random pick developer</span>
      <div class="card-image has-padding-35">
        <figure class="image">
          <img :src="selectedDev.profile_image" alt="Placeholder image" class="is-rounded" />
        </figure>
      </div>
      <div class="card-content has-padding-20">
        <div class="media has-margin-bottom-5">
          <div class="media-content">
            <p
              v-if="selectedDev.company !== ''"
              class="is-size-6 has-margin-bottom-5 has-text-grey"
            >Company: {{ selectedDev.company }}</p>

            <p class="title is-2">{{ selectedDev.name }}</p>
            <span class="tags are-medium">
              <p class="tag is-warning" v-for="skill in selectedDev.skills" :key="skill">{{ skill }}</p>
            </span>
          </div>
        </div>

        <div class="content has-text-grey">{{ selectedDev.description}}</div>
      </div>
    </div>
  </div>
</template>


<static-query>
{
  randomDev: allDevs (filter: { published: { eq: true }}){
    edges {
      node {
        id
        name
        description
        tags
        skills
        profile_image
        company
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
      selectedDev: []
    };
  },
  created() {
    let allDevs = this.$static.randomDev.edges;
    const randomKey = Math.floor(Math.random() * allDevs.length);
    const b = allDevs.find((value, index) => index === randomKey);
    return (this.selectedDev = b.node);
  }
};
</script>


<style lang="scss" scoped>
.card {
  &:hover {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
    box-shadow: 0 0 25px rgba(103, 119, 239, 0.1);
    color: currentColor;
  }
}
</style>
