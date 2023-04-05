<template>
  <section class="hero main-hero">
    <div class="container">
        <h1 class="main-hero__title">
            {{componentData.title}}
        </h1>
        <p class="main-hero__text">{{componentData.description}}</p>
        <div class="main-hero__buttons">
            <UtilityButton 
                v-for="(button, index) in componentData.buttons"
                :key="index"
                :buttonProps="button"
            />
        </div>
    </div>
  </section>

</template>
<script>
export default {
name: 'MainHero',
  props: {
    componentData: {
      type: Object,
    }
  }
}
</script>

<style lang="scss" scoped>
    .main-hero{
        padding: 2.5rem 0;
        text-align: center;
        @include from($md){
            padding: 5rem 0;
        }
        &__title {
            font-family: $font-secondary;
            font-weight: bold;
        }
        &__text{
            font-size: 1.5rem;
            max-width: 100%;
            margin: 0 auto;
            @include from($md){
                max-width:75%;
            }
        }
        &__inputs{
            max-width: 10rem;
        }
        &__buttons{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 2rem 0;

            button{
                margin-right: 2rem;
            }
        }
    }
</style>