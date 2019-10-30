<template>
  <main class="who-we-are">
    <div class="presentation padded inside-the-grid">
      <h1 class="title">
        {{ $t('about.who-we-are.title') }}
      </h1>
      <div class="description">
        <div class="left">
          {{ $t('about.who-we-are.description') }}
        </div>
        <div class="right" />
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
      <h2 class="title">
        {{ $t('about.who-we-are.team.title') }}
      </h2>
      <div class="team">
        <team-member
          v-for="member in teamMembers"
          :key="member"
          :name="member"
        />
      </div>
    </div>

    <div class="philosophy padded">
      <h2 class="title">
        {{ $t('about.who-we-are.philosophy.title') }}
      </h2>
      <div class="philosophy-wrapper">
        <philosophy-item
          v-for="philosophy in philosophies"
          :key="philosophy"
          :title="$t(`about.who-we-are.philosophy.${philosophy}.title`)"
          :text="$t(`about.who-we-are.philosophy.${philosophy}.text`)"
          :img-path="philosophy"
        />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import TeamMember from '~/components/about/TeamMember.vue'
import PhilosophyItem from '~/components/about/PhilosophyItem.vue'
import config from '~/improvize.config'

@Component({
  components: { TeamMember, PhilosophyItem }
})
export default class WhoWeAre extends Vue {
  get teamMembers (): Array<string> {
    return config.members
  }

  get philosophies (): Array<string> {
    return config.philosophy
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

      @media screen and (max-width: $break-xs) {
        flex-basis: 100%;
      }

      > .left, > .right {
        flex: 1;
      }

      > .right {
        @media screen and (max-width: $break-xs) {
          display: none;
        }
      }
    }

    > .text {
      display: flex;
      line-height: 1.63;
      flex-wrap: wrap;

      > .left, > .right {
        flex: 1;

        @media screen and (max-width: $break-xs) {
          flex-basis: 100%;
        }
      }

      > .left {
        margin-right: 16px;
        @media screen and (max-width: $break-xs) {
          margin-right: 0;
        }
      }

      > .right {
        margin-left: 16px;
        @media screen and (max-width: $break-xs) {
          margin-left: 0;
        }
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
      justify-content: space-evenly;
      flex-wrap: wrap;
    }
  }

  > .philosophy {
    margin-top: 150px;
    text-align: center;

    > .title {
      margin-bottom: 60px;
    }

    > .philosophy-wrapper {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      text-align: center;

      > .philosophy-item {
        margin: 30px 10px 0;

        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }

  }
}
</style>
