<script lang="ts">
    import { defineComponent } from 'vue';
    import { getBookByKey } from '@/services/api';

    export default defineComponent ({
        name: 'BookRecomCard',

        props: {
            works: {
                type: Object,
                required: true,
            }
        },

        data() {
            return {
                book: null
            }
        },

        async mounted() {
            try {
                const response = await getBookByKey(this.works.key)
                console.log('Book Recommendation Data:', response);
                this.book = response
            } catch (error) {
                console.error(error)
            }
        }

    })
</script>

<template>
    <div class="recom-card">
        <h1>{{ works.title }}</h1>
        <p id="author">by <span>{{ works.authors && works.authors[0] ? works.authors[0].name : '' }}</span></p>
        <p>First publish year: <span>{{ works.first_publish_year }}</span></p>
    </div>
</template>

<style scoped>
    .recom-card {
        padding: 16px 32px;
        margin-bottom: 16px;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 12px;
        background-color: var(--color-bg)
    }

    h1 {
        color: var(--color-text);
        font-size: 24px;
    }

    #author {
        margin-top: 4px;
        margin-bottom: 12px;
    }
</style>