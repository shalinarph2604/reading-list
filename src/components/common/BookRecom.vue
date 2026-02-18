<script lang="ts">
    import { defineComponent } from 'vue';
    import { getBooks } from '@/services/api';

    export default defineComponent ({
        name: 'BookRecommendation',

        data() {
            return {
                books:[] as Array<{
                    id: string;
                    title: string;
                    author: string;
                    rating: number;
                    img_url: string;
                }>,
                isLoading: false,
                error: null as string | null,
            }
        },

        async mounted() {
            try {
                this.isLoading = true;
                this.books = await getBooks();
            } catch (error) {
                this.error = (error instanceof Error ? error.message : String(error)) || 
                'Failed to fetch book recommendations';
            } finally {
                this.isLoading = false;
            }
        }
    })
</script>

<template>
    <div>
        <div v-for="book in books" :key="book.id">
            <img :src="book.img_url" :alt="book.title" />
        </div>
        <div></div>
    </div>
</template>