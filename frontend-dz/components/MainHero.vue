<template>
  <section class="hero main-hero">
    <div class="container">
        <h1 class="main-hero__title title is-1">
            Hi I'm Zac.
        </h1>
        <p class="main-hero__text">I am a software developer based in Louisville KY, currently working for a company called Atria Senior Living.</p>
        <div v-if="name !== ''">
            <p>Send an email to Zac that says:</p>
            <p>Hello Zac, my name is {{name}}. I am a {{job}} for {{company}}. We are based in {{city}}.</p>
            <div>
                I'm really impressed with your expertise in 
                    <div class="select">
                         <select >
                                <option>Select dropdown</option>
                                <option>With options</option>
                         </select>
                    </div>
                    
            .</div>
        </div>
        <div class="main-hero__buttons">
            <button class="button is-primary is-medium"> <v-icon class="main-hero__icon" icon="mdi-code-braces" size="24px"/>Projects</button>
            <button class="button is-outlined is-link is-medium"> <v-icon class="main-hero__icon" icon="mdi-email-box" size="24px"/>Get in Touch</button>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    data(){
        return{
            name: '',
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