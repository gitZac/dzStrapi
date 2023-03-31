<template>
    <nav class="navbar dz-header" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand dz-header__logo">
                <a class="dz-header__logo-link" href="/">
                    <img class="dz-header__logo" src="~/assets/img/digitalzac-logo.png" width="112" height="28">
                </a>
                <a @click="toggleMenu" role="button" class="navbar-burger" :class="menuIsActive ? 'is-active' :  '' " aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu" :class="menuIsActive ? 'is-active' :  '' ">
                <div class="navbar-start">
                    <a class="navbar-item" v-for="item in menuData.items.data" :key="item" :href="item.attributes.url">
                        {{item.attributes.title}}
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
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

    .dz-header{
        &__logo{
            width: 175px;
            max-height: auto;
        }
        &__logo-link{
            padding: 0.5rem 0.75rem;
            display: flex;
            align-items: center;
        }
        .navbar-item{
            font-size: 20px;
            font-weight: 500;
            &:hover{
                background-color: transparent;
            }
        }
    }

</style>