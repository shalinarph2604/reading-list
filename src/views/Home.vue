<script lang="ts">
    import { defineComponent } from 'vue';
    import { getBooks } from '@/services/api';

    import AppHeader from '@/components/common/AppHeader.vue';
    import BookForm from '@/components/common/BookForm.vue';
    import BookList from '@/components/common/BookList.vue';

    interface Book {
        id: string
        title: string
        author: string
        status: 'unread' | 'completed'
    }

    export default defineComponent ({
        name: 'HomePage',

        components: {
            AppHeader,
            BookForm,
            BookList    
        },

        data() {
            return {
                books: [] as Book[],
                loading: true,
            }
        },

        methods: {
            addBook(payload: { 
                title: string;
                author: string;
            }) {
                const newBook: Book = {
                    id: crypto.randomUUID(),
                    title: payload.title,
                    author: payload.author,
                    status: 'unread'
                }
                this.books.push(newBook)
                console.log('New Book Added:', this.books);
            },

            toggleStatus(bookId: string) {
                const book = this.books.find(b => b.id === bookId)
                if (book) {
                    book.status = book.status === 'unread' ? 'completed' : 'unread'
                }
            },

            deleteBook(bookId: string) {
                this.books = this.books.filter(b => b.id !== bookId)
            }

        },

        
        async mounted() {
            try {
            const response = await getBooks()
            console.log(response)
            } catch (err) {
            console.error(err)
            } finally {
            this.loading = false
            }
        }
    })
</script>

<template>
    <AppHeader 
        title="Reading List"
        description="We help you to track your daily reading"
    />
    <BookForm @submit="addBook" />
    <BookList 
        :books="books"
        @toggle-status="toggleStatus"
        @delete-book="deleteBook"
    />
</template>