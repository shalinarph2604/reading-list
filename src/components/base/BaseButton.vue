<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts">
    export default {
        name: 'BaseButton',

        emits: ['click'],

        props: {
            type: {
                type: String,
                default: 'button',
            },

            variant: {
                type: String,
                default: 'primary',
            },

            disabled: {
                type: Boolean,
                default: false,
            },

            isLoading: {
                type: Boolean,
                default: false,
            }
        },

        computed: {
            buttonClass() {
                return [
                    'base-button',
                    `base-button--${this.variant}`,
                    {
                        'base-button--disabled': this.disabled || this.isLoading
                    }
                ]
            }
        },

        methods: {
            handleClick(event: any) {
                if (this.disabled || this.isLoading) return
                this.$emit('click', event)
            }
        }
    }
</script>

<template>
    <button
        :type="button"
        :class="buttonClass"
        :disabled="disabled || isLoading"
        @click="handleClick"
    >
        <span v-if="isLoading">Loading...</span>
        <slot v-else />
    </button>
</template>

<style scoped>
    .base-button {
        padding: 10px 16px;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
        border: none;
        transition: background-color 0.2s ease, opacity 0.2 ease;
    }

    .base-button--primary {
        background-color: var(--color-text);
        color: var(--color-primary);
    }

    .base-button--secondary {
        background-color: var(--color-primary);
        color: var(--color-text);
        border: var(--color-text);
    }

    .base-button--circle {
        background-color: var(--color-primary);
        color: var(--color-text);
        border: var(--color-text);
        border-radius: 50%;
        height: 16px;
        width: 16px;
    }

    .base-button--disabled {
        background-color: var(--color-text);
        color: var(--color-primary);
        opacity: 0.6;
        cursor: not-allowed;
    }
</style>