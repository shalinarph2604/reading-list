<script lang="ts">
import { defineComponent } from 'vue';

import BaseButton from '../base/BaseButton.vue';
import StatusBadge from '../base/StatusBadge.vue';

    export default defineComponent ({
        name: 'BookCard',

        components: {
            BaseButton,
            StatusBadge
        },

        props: {
            book: {
                type: Object,
                required: true,
            }
        },

        emits: ['toggle-status', 'delete-book'],

        methods: {
            statusHandler() {
                this.$emit('toggle-status', this.book.id)
            },

            deleteHandler() {
                this.$emit('delete-book', this.book.id)
            }
        }
    })
</script>

<template>
    <div class="book-card">
        <div>
            <p class="book-title">{{ book.title }}</p>
            <p class="book-author">
                by <span class="author-name">{{ book.author }}</span>
            </p>
            <p class="book-status">
                <span>Status:</span>    
                <span><StatusBadge :status="book.status" /></span>
            </p>
        </div>
        <div class="buttons">
            <BaseButton
                v-if="book.status === 'unread'"
                variant="primary"
                :label="'Mark as Completed'"
                @click="statusHandler"
            />
            <BaseButton
                v-else
                variant="secondary"
                :label="'Mark as Unread'"
                @click="statusHandler"
            />
            <BaseButton
                variant="secondary"
                label="Delete"
                @click="deleteHandler"
            />
        </div>
    </div>
</template>

<style scoped>
.book-card {
    width: 100%;
    background-color:var(--color-bg);
    border: 1px solid #ccc;
    padding: 16px 32px;
    margin-bottom: 16px;
    border-radius: 8px;
    display:flex;
    justify-content: space-between;
    box-shadow: inset 0 0 8px 0 rgba(0, 0, 0, 0.1);
}

.book-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 6px;
    color: var(--color-text);
    background-color: var(--color-secondary);
}

.book-author {
    font-size: 16px;
    margin-bottom: 16px;
    color: #888888;
}

.book-status {
    display: flex;
    align-items: center;
    margin-top: 8px;
    font-size: 16px;
    color: var(--color-text);
}

.author-name {
    font-weight: 600;
}

.buttons {
    display: flex;
    gap: 12px;
    align-items: center;
}

</style>