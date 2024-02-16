<template>
  <a :href="'/projects/' + slug">
    <article
      class="project-card"
      :style="`background-image: url(${
        config.public.STRAPI_URL_BASE + getBackgroundImage
      })`">
      <div class="project-card__inner">
        <!-- <div class="project-card__logo grow animate--fast">
          <img :src="config.public.STRAPI_URL_BASE + getProjectIcon" alt="" />
        </div> -->

        <div
          class="abs-wrapper abs-wrapper--title-center abs-wrapper--center-bottom pad-tb-1">
          <h3 class="animate--fast project-card__title fade-in zoom-in--left">
            {{ componentData.projectTitle }}
          </h3>
          <p
            class="project-card__cta animate--fast fade-in zoom-in--left subtitle is-4">
            {{ componentData.projectShortDescription }}
          </p>
        </div>
      </div>
    </article>
  </a>
</template>

<script setup>
const config = useRuntimeConfig();

const props = defineProps({
  componentData: {
    type: Object,
    default: () => {},
  },
  slug: {
    type: String,
    default: "",
  },
});

const getBackgroundImage = computed(() => {
  if (props.componentData.backgroundImage.data !== null) {
    return props.componentData.backgroundImage.data.attributes.url;
  } else {
    return "";
  }
});

const getProjectIcon = computed(() => {
  if (props.componentData.projectIcon.data !== null) {
    return props.componentData.projectIcon.data.attributes.url;
  } else {
    return "";
  }
});
</script>

<style lang="scss" scoped>
.project-card {
  position: relative;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  min-height: 25rem;
  padding: 0 2rem;
  margin: 2px 0 0 2px;
  display: flex;
  color: #fff;

  & > * {
    z-index: 1;
    position: relative;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0)),
      color-stop(55%, rgba(0, 0, 0, 0.3)),
      to(#000)
    );
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.3) 55%,
      #000
    );

    -webkit-transition: background-color 0.5s ease-in-out;
    transition: background-color 0.3s ease-in-out;
  }

  &:hover::after {
    background-color: rgba(0, 0, 0, 0.85);
  }

  &:hover .grow {
    transform: scale(1.15);
  }

  &:hover .fade-in {
    opacity: 1;
  }

  &:hover .zoom-in--bottom,
  &:hover .zoom-in--left {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  &__inner {
    width: 100%;
    display: flex;
    align-items: center;
  }

  &__logo {
    padding: 2rem 2rem;
    z-index: 1;
    img {
      max-height: 7rem;
      max-width: 250px;
    }
  }

  &__title {
    text-shadow: 1px 1px 1px #000;
    color: #fff;
    margin: 0 auto;
    width: 100%;
    text-transform: uppercase;
    line-height: 40px;
  }

  &__cta {
    color: #fff;
    color: $primary;
  }

  &__icon-wrap {
    text-align: center;
  }
}
</style>
