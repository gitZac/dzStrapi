<template>
<footer class="footer">
    <nav class="footer__navbar" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="footer__navbar-menu" :class="menuIsActive ? 'is-active' :  '' ">
                <a class="footer__navbar-item" v-for="item in menuData.items.data" :key="item" :href="item.attributes.url">
                    {{item.attributes.title}}
                </a>
            </div>
        </div>
    </nav>
</footer>

</template>

<script>
export default {
    name: "NavFooter",
    props: {
        menuData: {
            type: Object,
            default: []
        }
    },
    data(){
        return{
            menuIsActive: false
        }
    },
    methods: {
        toggleMenu(){
            this.menuIsActive = !this.menuIsActive
        }
    }
}
</script>
<style scoped lang="scss">
    .footer{
        background-color: $gray;
        color: $white;
        padding: 3rem 1.5rem 3rem;

        &__navbar{
            background-color: $gray;
        }

        &__navbar-menu {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            @include from(1250px){
                display: flex;
                justify-content: space-evenly;
                flex-direction: row;
            }
        }

        &__navbar-item{
            text-align: center;
            color: $white;
            text-transform: uppercase;
            text-decoration: none;
            padding: 1rem 6rem;
            transition: all 0.2s;
            background-color: rgba(255, 255, 255, 0.05);
            margin-bottom: 2rem;
        }
    }
</style>