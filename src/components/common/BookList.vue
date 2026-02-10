<script lang="ts">
import BookCard from './BookCard.vue';

    export default {
        name: 'BookList',

        components: {
            BookCard
        },

        props: {
            books: {
                type: Array as () => { 
                    title: string;
                    author: string;
                    status: string;
                }[],
                required: true
            }
        },
    }

</script>

<template>
    <div class="book-list">
        <BookCard
            v-for="book in books"
            :key="book.title"
            :title="book.title"
            :author="book.author"
            :status="book.status"
        />
    </div>
</template>

<style scoped>
</style>