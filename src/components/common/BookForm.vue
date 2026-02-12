<script lang="ts">
import { defineComponent } from 'vue';

import BaseButton from '../base/BaseButton.vue';
import TextInput from '../base/TextInput.vue';

    export default defineComponent ({
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
                if (!this.title.trim() || !this.author.trim()) return

                const addBook = {
                    id: crypto.randomUUID(),
                    title: this.title.trim(),
                    author: this.author.trim(),
                    status: 'unread'
                }

                this.$emit('submit', addBook)

                // reset form
                this.title=''
                this.author=''
            }
        }
    })

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
        padding: 20px 40px 0;
    }

    .inputs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        flex-grow: 1;
    }

    .button-wrapper {
        height: 116px;
        padding-top: 20px;
    }

</style>