<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <img src="~/assets/img/digitalzac-logo.png" width="112" height="28">
            </a>

            <a @click="toggleMenu" role="button" class="navbar-burger" :class="menuIsActive ? 'is-active' :  '' " aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu" :class="menuIsActive ? 'is-active' :  '' ">
            <div class="navbar-start">
                <a class="navbar-item" v-for="item in menuData.items.data" :key="item" :href="item.attributes.url">
                    {{item.attributes.title}}
                </a>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <button class="button is-primary">
                            <strong>Contact Me</strong>
                        </button>
                    </div>
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
            console.log("hello");
            this.menuIsActive = !this.menuIsActive
        }
    }
}
</script>