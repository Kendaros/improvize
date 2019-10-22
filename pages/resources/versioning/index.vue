<template>
  <div class="container">
    {{ $t('title') }}
  </div>
</template>

<script>
export default {
  fetch ({ redirect }) {
    redirect(301, '/fr')
  }
}
</script>

<style lang="scss">
</style>
