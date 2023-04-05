<template>
  <section class="section all-about">
    <div class="container">
        <h2 class="section-title">{{componentData.sectionTitle}}</h2>
        <div class="columns columns--adjust">
            <div class="all-about__list-items column is-two-thirds">
                <li v-for="(item, index) in componentData.listItem" :key="index" class="all-about__list-item">
                    <v-icon
                    :icon="'mdi-' + item.icon"
                    size="35px"
                    class="all-about__icon"
                    />
                    <div class="list-item__content">
                        <h3 class="all-about__list-item-title">{{item.title}}</h3>
                        <p>{{item.description}}</p>
                    </div>
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
        &__list-item{
            display: flex;
            flex-direction: row;
            padding-bottom: 2rem;
        }
        &__list-items{
            list-style: none;
        }
        &__list-item-title{
            font-size: 1.5rem;
        }
        &__icon{
            background: $primary;
            color: $white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50px;
            padding: 1.5rem;
            margin-right: 2rem;
        }

        &__image{
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                border-radius: 50%;
                max-width: 300px;
            }
        }

        &__cta-buttons{
            padding-top:3rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }

        .columns--adjust{
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
            @include from($lg){
                flex-direction: row;
            }
        }

        .section-title{
            text-align: center;
            padding-bottom:3rem;
        }
    }
</style>