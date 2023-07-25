<template>
  <section class="section all-about has-background-grey-light">
    <div class="container">
      <h2 class="section-title">{{ componentData.sectionTitle }}</h2>
      <div class="columns columns--adjust">
        <div class="all-about__list-items column is-two-thirds">
          <li
            v-for="(item, index) in componentData.listItem"
            :key="index"
            class="all-about__list-item"
          >
            <v-icon
              :icon="'mdi-' + item.icon"
              size="35px"
              class="all-about__icon"
            />
            <div class="list-item__content">
              <h3 class="all-about__list-item-title">{{ item.title }}</h3>
              <p class="all-about__list-item-description">
                {{ item.description }}
              </p>
            </div>
          </li>
        </div>
        <div class="all-about__image column">
          <img :src="githubProfile.data.avatar_url" alt="" />
          <div class="all-about__github-content">
            <h3 class="all-about__github-name">
              {{ githubProfile.data.name }}
            </h3>
            <h4 class="all-about__github-user">
              {{ githubProfile.data.login }}
            </h4>
            <p class="all-about__github-bio">{{ githubProfile.data.bio }}</p>
            <UtilityButton
              class="all-about__github-button"
              :buttonProps="{
                isOutlined: true,
                buttonText: 'View on Github',
                link: 'https://github.com/gitZac?tab=repositories',
              }"
            />
            <ul class="all-about__github-info-list">
              <li class="all-about__github-info-list-item">
                <v-icon icon="mdi-domain" size="16px" />
                {{ githubProfile.data.company }}
              </li>
              <li class="all-about__github-info-list-item">
                <v-icon icon="mdi-map-marker" size="16px" />
                {{ githubProfile.data.location }}
              </li>
              <li class="all-about__github-info-list-item">
                <v-icon icon="mdi-email" size="16px" />
                ztaylor555@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="all-about__cta-buttons">
        <UtilityButton
          v-for="(button, index) in componentData.ctaButtons"
          :key="index"
          :buttonProps="button"
        />
      </div>
    </div>
  </section>
</template>

<script>
import getGithubUserData from "~/lib/getGithubData.js";
export default {
  name: "AllAbout",
  props: {
    componentData: {
      type: Object,
    },
  },
  async setup() {
    let githubProfile = await getGithubUserData();
    return { githubProfile };
  },
};
</script>

<style scoped lang="scss">
.all-about {
  &__list-item {
    display: flex;
    flex-direction: row;
    padding-bottom: 2rem;
  }

  &__list-items {
    list-style: none;
  }

  &__list-item-title {
    font-size: 1.5rem;
  }

  &__list-item-description {
    max-width: 85%;
  }

  &__icon {
    background: $primary;
    color: $white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    padding: 1.5rem;
    margin-right: 2rem;
  }

  &__image {
    display: flex;
    flex-direction: column;
    img {
      border-radius: 50%;
      max-width: 300px;
    }
  }

  &__cta-buttons {
    padding-top: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  &__github-name {
    font-size: 25px;
    font-family: $font-primary;
    font-weight: bold;
  }

  &__github-user {
    font-size: 20px;
    font-family: $font-primary;
    color: $gray-dark;
  }

  &__github-button {
    display: block;
    background-color: $gray-light;
    width: 70%;
    margin: 1rem 0;
    a {
      font-family: $font-primary;
    }
  }

  .columns--adjust {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    @include from($lg) {
      flex-direction: row;
    }
  }

  .section-title {
    text-align: center;
    padding-bottom: 3rem;
  }

  &__github-info-list {
    li {
      padding-bottom: 0.5rem;
    }
  }
}
</style>
