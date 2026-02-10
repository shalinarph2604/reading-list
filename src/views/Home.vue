<script lang="ts">
    import AppHeader from '@/components/common/AppHeader.vue';
    import BookForm from '@/components/common/BookForm.vue';

    export default {
        name: 'HomePage',

        components: {
            AppHeader,
            BookForm    
        },

        data() {
            return {
                books: [] as { 
                    title: string;
                    author: string;
                    status: string; 
                }[]
            }
        },

        methods: {
            newBook(book: { 
                title: string;
                author: string;
                status: string;       
            }) {
                this.books.push(book)
                console.log('New Book Added:', this.books);
            }
        }

    }
</script>

<template>
    <AppHeader 
        title="Reading List"
        description="We help you track your daily reading"
    />
    <BookForm @submit="newBook" />
    :
</template>