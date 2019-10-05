<template>
  <div class="layout has-padding-right-100 has-padding-left-100 has-padding-top-100 has-padding-bottom-5">
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
