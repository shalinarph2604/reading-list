<script lang="ts">
    export default {
        name: 'AppHeader',

        props: {
            title: String,
            description: String
        }
    }
</script>

<template>
    <header>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
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
    background-color: var(--color-secondary);
    margin-bottom: 24px;
}

p {
    font-size: 40px;
    font-weight: 600;
    background-color: var(--color-secondary)
}

</style>