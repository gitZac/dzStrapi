<template>
  <article>
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
        }" />
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
  </article>
</template>

<script setup>
import getGithubUserData from "~/lib/getGithubData.js";
let githubProfile = await getGithubUserData();
</script>

<style lang="scss" scoped></style>
