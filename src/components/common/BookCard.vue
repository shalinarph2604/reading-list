<script lang="ts">
import BaseButton from '../base/BaseButton.vue';
import StatusBadge from '../base/StatusBadge.vue';

    export default {
        name: 'BookCard',

        components: {
            BaseButton,
            StatusBadge
        },

        props: {
            title: {
                type: String,
                required: true
            },
            author: {
                type: String,
                required: true
            },
            status: {
                type: String,
                required: true,
                default: 'unread',
                validator: (value: string) => ['unread', 'completed'].includes(value)
            }
        },

        methods: {
            statusHandler() {
                const newStatus = this.status === 'unread' ? 'completed' : 'unread'
                this.$emit('toggle-status', newStatus)
            }
        }
    }
</script>

<template>
    <div class="book-card">
        <p>{{ title }}</p>
        <p>by {{ author }}</p>
        <StatusBadge :status="status" />
        <BaseButton
            variant="secondary"
            :label="status === 'unread' ? 'Mark as Completed' : 'Mark as Unread'"   @click="$emit('toggle-status')"
        />

    </div>
</template>