<script lang="ts">
    import { defineComponent } from 'vue';
    import BaseButton from '../base/BaseButton.vue';

    export default defineComponent ({
        name: 'AppHeader',

        components: {
            BaseButton
        },

        emits: ['browse'],

        props: {
            title: String,
            description: String,
            browse: String
        },

        methods: {
            browseHandler() {
                this.$router.push({ name: 'BookRecommendations' })
            }
        },
    })
</script>

<template>
    <header>
        <h1 class="header-text">{{ title }}</h1>
        <p class="header-text" id="header-p1">{{ description }}</p>
        <div class="header-button">
            <BaseButton 
                variant="primary" 
                label="Browse our book recommendations"
                @click="browseHandler"
            />
        </div>
    </header>
</template>

<style scoped>
header {
    padding-top: 80px;
    padding-left:60px;
    width:100%;
    height:480px;
    background-image:url(../../assets/images/header-img.jpg);
    background-size:cover;
    box-sizing: border-box;
    border-radius: 32px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2) ;
}

h1 {
    font-size: 108px;
    margin-bottom: 24px;
}

.header-text {
    background-color: var(--color-secondary);
}

.header-button {
    margin-top: 48px;
    align-items: center;
    display: flex;
    justify-content: center;
}

#header-p1 {
    font-size: 40px;
    font-weight: 600;
}

#header-p2 {
    color: var(--color-bg);
    font-size: 24px;
    font-weight: 600;
    margin: 24px 0;
    text-align: center;
}

</style>