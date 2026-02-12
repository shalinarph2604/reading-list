<script lang="ts">
    import type { PropType } from 'vue';
    import { defineComponent } from 'vue';

    import BookCard from './BookCard.vue';

    interface Book {
        id: string
        title: string
        author: string
        status: 'unread' | 'completed'
    }

    export default defineComponent ({
        name: 'BookList',

        components: {
            BookCard
        },

        props: {
            books: {
                type: Array as PropType<Book[]>,
                required: true
            }
        },

        computed: {
            isEmpty() {
                return this.books.length === 0
            }
        }
    })

</script>

<template>
    <div class="book-list">

        <div v-if="isEmpty" class="empty-state">
            <p class="empty-text">
                No books available. Please add some books to your reading list.
            </p>
        </div>

        <div v-else>
            <p class="reading-list-title">Your Reading List</p>
            <p v-if="books.length > 1" class="book-count">
                {{ books.length }} books in your list
            </p>
            <p v-else-if="books.length === 1" class="book-count">
                1 book in your list
            </p>

            <BookCard
                v-for="book in books"
                :key="book.id"
                :book="book"
                @toggle-status="$emit('toggle-status', book.id)"
                @delete-book="$emit('delete-book', book.id)"
            />
        </div>

    </div>
</template>

<style scoped>
    .book-list {
        min-height: 100dvh;
        padding: 2rem 3rem;
        box-sizing: border-box;
        margin-top: 2rem;
        background-color: var(--color-primary);
        border-radius: 32px;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2) ;
    }

    .empty-state {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .empty-text {
        font-size: 1.2rem;
        color: #666;
        text-align: center;
    }

    .reading-list-title {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    .book-count {
        font-size: 1rem;
        color: #888;
        margin-bottom: 1.5rem;
        font-weight: 600;
    }

</style>