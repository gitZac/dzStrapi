<template>
  <section class="all-about">
    <div class="container">
        <h2>{{componentData.sectionTitle}}</h2>
        <div class="columns">
            <div class="all-about__list-items column">
                <li v-for="(item, index) in componentData.listItem" :key="index" class="all-about__list-item">
                    <h3 class="all-about__list-item-title">{{item.title}}</h3>
                    <p>{{item.description}}</p>
                </li>
            </div>
            <div class="all-about__image column">
                <img :src="'http://localhost:1337' + componentData.image.data.attributes.url" alt="">
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
export default {
    name: 'AllAbout',
    props: {
        componentData: {
            type: Object,
        }
    }
}
</script>

<style scoped lang="scss">
    .all-about{
        &__list-items{
            list-style: none;
        }
        &__list-item-title{
            font-size: 1.5rem;
        }
    }
</style>