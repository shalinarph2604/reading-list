<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts">
    import type { PropType } from 'vue';
    import { defineComponent } from 'vue';

    export default defineComponent ({
        name: 'BaseButton',

        emits: ['click'],

        props: {
            type: {
                type: String as PropType<'button' | 'submit' | 'reset'>,
                default: 'button',
                validator: (value: string) => 
                    ['button', 'submit', 'reset'].includes(value),
            },

            label: {
                type: String,
                default: '',
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
                        'base-button--disabled': 
                        this.disabled || this.isLoading
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
    })
</script>

<template>
    <button
        :type="type"
        :class="buttonClass"
        :disabled="disabled || isLoading"
        @click="handleClick"
    >
        <span v-if="isLoading">Loading...</span>
        <slot v-else>{{ label }}</slot>
    </button>
</template>

<style scoped>
    .base-button {
        padding: 12px 24px;
        min-width: min-content;
        max-height: max-content;
        font-size: 14px;
        border-radius: 12px;
        font-weight: 600;
        cursor: pointer;
        border: none;
        transition: background-color 0.2s ease, opacity 0.2 ease;
    }

    .base-button--primary {
        background-color: var(--color-text);
        color: var(--color-bg);
        border: 2px solid var(--color-text);
    }

    .base-button--secondary {
        background-color: var(--color-bg);
        color: var(--color-text);
        border: 2px solid var(--color-text);
    }

    .base-button--circle {
        background-color: var(--color-primary);
        color: var(--color-text);
        border: var(--color-text);
        border-radius: 50%;
        height: 46px;
        width: 46px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    .base-button--disabled {
        background-color: var(--color-text);
        color: var(--color-primary);
        opacity: 0.6;
        cursor: not-allowed;
    }
</style>