<template>
  <div class="layout has-padding-top-50">
    <slot />
    
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>


<script>
export default {
  mounted() {
    this.$aos.init();
  }
};
</script>
