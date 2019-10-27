<template>
  <div class="versioning-item">
    <div class="name">
      {{ name }}
    </div>
    <div class="date">
      {{ date }}
    </div>
    <div class="size">
      {{ size }}
    </div>
    <a
      :href="url"
      class="download"
    >
      <img
        src="../../assets/img/resources/download.svg"
        alt="Download button"
        class="image"
      >
    </a>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class VersioningItem extends Vue {
  @Prop() name!: string
  @Prop() date!: string
  @Prop() size!: string
  @Prop() url!: string
}
</script>

<style lang="scss">
@import "~@/assets/styles/variables";

.versioning-item {
  max-width: 954px;
  width: 100%;
  height: 70px;
  border-radius: 4px;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;

  display: flex;
  text-align: left;
  justify-content: center;
  align-items: center;
  padding: 0 29px;

  > .name {
    flex: 1;
  }

  > .date {
    flex: 0.5
  }

  > .size {
    flex: 0.2
  }

  > .download {
    > .image {
      width: 36px;
    }
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
