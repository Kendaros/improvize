<template>
  <div class="team-member">
    <img
      class="image"
      :src="getImage(name)"
      :alt="$t(`about.who-we-are.team.${name}.fullname`)"
    >
    <div class="fullname">
      {{ $t(`about.who-we-are.team.${name}.fullname`) }}
    </div>
    <div class="occupation">
      {{ $t(`about.who-we-are.team.${name}.occupation`) }}
    </div>
    <p class="bio">
      {{ $t(`about.who-we-are.team.${name}.bio`) }}
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
declare function require(path: string): any

@Component
export default class TeamMember extends Vue {
  @Prop() name!: string

  getImage (path: string): any {
    try {
      return require(`../../assets/img/team/${path}.png`)
    } catch {
      console.error(`Couldn't load assets/img/team/${path}.png`)
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/styles/variables";

.team-member {
  margin-top: 60px;
  max-width: 371px;
  text-align: center;

  > .image {
    width: 249px;
  }

  > .fullname {
    margin-top: 21px;
    font-size: $f35;
    font-family: $miso;
  }

  > .occupation {
    margin-top: 11px;
    font-size: $f22;
    text-transform: uppercase;
  }

  > .bio {
    margin-top: 20px;
    line-height: 1.63;
  }
}
</style>
