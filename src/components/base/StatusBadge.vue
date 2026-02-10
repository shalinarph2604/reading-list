<script lang="ts">
import type { PropType } from 'vue';

export default {
    name: 'StatusBadge',

    props: {
        status: {
            type: String as PropType<'unread' | 'completed'>,
            required: true,
        }
    },

    computed: {
        label() {
            return this.status === 'completed' ?
             'Completed' : 'Unread'
        },

        badgeClass() {
            return [
                'status-badge',
                `status-badge--${this.status}`
            ]
        },
    }
}
</script>

<template>
    <div class="status-badge">
        <span :class="badgeClass">
            {{ label }}
        </span>
    </div>
</template>

<style scoped>
.status-badge {
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
}

.status-badge--unread {
    background-color: var(--color-primary);
    border: 1px solid var(--color-secondary);
    color: var(--color-secondary);
}

.status-badge--completed {
    background-color: var(--color-secondary);
}

</style>