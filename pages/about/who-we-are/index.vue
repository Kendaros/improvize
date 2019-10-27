<template>
  <main class="who-we-are">
    <div class="presentation padded">
      <h1 class="title">
        {{ $t('about.who-we-are.title') }}
      </h1>
      <div class="description">
        <div class="left">
          {{ $t('about.who-we-are.description') }}
        </div>
        <div class="right">
        </div>
      </div>
      <div class="text">
        <div class="left">
          {{ $t('about.who-we-are.left-text') }}
        </div>
        <div class="right">
          {{ $t('about.who-we-are.right-text') }}
        </div>
      </div>
    </div>

    <img
      class="bg-gradient"
      src="../../../assets/img/bg-gradient.svg"
      alt=""
    >

    <div class="our-team padded">
      <h2 class="title">{{ $t('about.who-we-are.team.title') }}</h2>
      <div class="team">
        <team-member
          v-for="member in teamMembers"
          :key="member"
          :name="member"
        />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import TeamMember from '~/components/about/TeamMember.vue'
import config from '~/improvize.config'

@Component({
  components: { TeamMember }
})
export default class WhoWeAre extends Vue {
  get teamMembers (): Array<string> {
    return config.members
  }
}

</script>

<style lang="scss">
@import '~/assets/styles/variables';
.who-we-are {
  > .presentation {
    margin-top: 70px;

    > .description {
      font-size: $f22;
      margin: 40px 0;
      display: flex;

      > .left, > .right {
        flex: 1;
      }
    }

    > .text {
      display: flex;

      > .left, > .right {
        flex: 1;
      }

      > .left {
        margin-right: 16px;
      }

      > .right {
        margin-left: 16px;
      }
    }
  }

  > .our-team {
    text-align: center;

    > .title {
      margin: 96px 0 44px;
    }

    > .team {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  }
}
</style>
