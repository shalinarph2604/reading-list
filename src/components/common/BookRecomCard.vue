<script lang="ts">
    import { defineComponent } from 'vue';
    import { getBookById } from '@/services/api';

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
            const response = await getBookById(this.works.cover_id)
            console.log('Book Recommendation Data:', response);
            this.book = response.data
        }

    })
</script>

<template>
    <div class="card">
        <h1>{{ works.title }}</h1>

    </div>
</template>