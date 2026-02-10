<script lang="ts">
import BaseButton from '../base/BaseButton.vue';
import TextInput from '../base/TextInput.vue';

    export default {
        name: 'BookForm',

        components: {TextInput, BaseButton},

        emits: ['submit'],

        data() {
            return {
                title: '',
                author: '',
            }
        },

        methods: {
            handleSubmit() {
                if (!this.title || !this.author) return

                const addBook = {
                    title: this.title,
                    author: this.author,
                    status: 'unread'
                }

                this.$emit('submit', addBook)

                this.title=''
                this.author=''
            }
        }

    }

</script>

<template>
    <form class="form">
        <div class="inputs">
            <div class="input-title">
                <TextInput
                    v-model.trim="title"
                    label="Book Title"
                    placeholder="Enter the book title"
                    required
                />
            </div>
            <div class="input-author">
                <TextInput
                    v-model.trim="author"
                    label="Author"
                    placeholder="Enter the author's name"
                    required
                />
            </div>
        </div>
        <div class="button-wrapper">
            <BaseButton
                variant="primary"
                label="Add Book"
                @click="handleSubmit"
                
            />
        </div>
    </form>
</template>

<style scoped>
    .form {
        display: flex;
        flex-direction: row;
        gap: 16px;
        justify-content: space-between;
        padding: 20px 40px;
    }

    .inputs {
        height: 200px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        flex-grow: 1;
    }

    .button-wrapper {
        height: 200px;
        padding-top: 20px;
    }

</style>