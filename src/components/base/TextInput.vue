<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts">
    export default {
        name: 'TextInput',

        props: {
            modelValue: String,
            label: String,
            placeholder: String,

            required: {
                type: Boolean,
                default: false,
            },

            error: {
                type: String,
                default: ''
            }
        },

        methods: {
            onInput(e: Event) {
                const target = e.target as HTMLInputElement
                this.$emit('update:modelValue', target.value)
            }
        },

        emits: ['update:modelValue'],
    }
</script>

<template>
    <div class="input-wrapper">
        <label v-if="label" class="label">
            {{ label }}
            <span v-if="required" class="required">*</span>
        </label>
        <input 
            class="input"
            :class="{ 'input-error': error }"
            :value="modelValue"
            :placeholder="placeholder"
            :required="required"
            @input="onInput"
        />
        <p v-if="error" class="error-text">
            {{ error }}
        </p>
    </div>
</template>

<style scoped>
.input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.label {
    font-size: 14px;
    font-weight: 500;
}

.required {
    color: red;
}

.input {
    padding: 8px 10px;
    width: 100%;
    height: 48px;
    border: 1px solid #CCCCCC;
    border-radius: 6px;
    font-size: 14px;
    cursor: auto;
}

.input:focus {
    outline: none;
    border-color: #42b983;
}

.input-error {
    border-color: red;
}

.error-text {
    font-size: 12px;
    color: red;
}
</style>