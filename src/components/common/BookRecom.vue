<script lang="ts">
    import { defineComponent } from 'vue';
    import { getBooks } from '@/services/api';

    import BookRecomCard from './BookRecomCard.vue';

    interface BookRecomContainer {
        key: string
        title: string
        author?: string[]
        first_publish_year?: number
    }

    export default defineComponent ({
        name: 'BookRecomContainer',

        components: {
            BookRecomCard
        },

        data() {
            return {
                works: [] as BookRecomContainer[]
            }
        },

        async mounted() {
            try {
                const response = await getBooks()
                this.works = response

            } catch (error) {
                console.error(error)
            }
        }
    })
</script>

<template>
    <div class="container">
        <BookRecomCard
            v-for="work in works"
            :key="work.key"
            :works="work"
        />
    </div>
</template>

<style scoped>
    .container {
        margin-top: 20px;
    }
</style>