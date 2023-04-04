<template>
  <section class="hero main-hero">
    <div class="container">
        <h1 class="main-hero__title title is-1">
            {{componentData.title}}
        </h1>
        <p class="main-hero__text">{{componentData.description}}</p>
        <div class="main-hero__buttons">
            <button 
                v-for="(button, index) in componentData.buttons" 
                :key="index" 
                class="button"
                :class="[
                    {
                        'is-outlined': button.isOutlined,
                    },
                    button.buttonColor ? 'is-' + button.buttonColor : '',
                    button.buttonSize ? 'is-' + button.buttonSize : ''
                ]"
                >
                <v-icon 
                class="main-hero__icon" 
                :icon="'mdi-' + button.Icon" 
                size="24px"/>
                {{button.buttonText}}
            </button>
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
        padding: 5rem 0;
        text-align: center;
        &__title, input{
            font-family: $font-secondary;
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

        &__icon{
            margin-right: 5px;
        }
    }
</style>