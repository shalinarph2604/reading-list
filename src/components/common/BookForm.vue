<script lang="ts">
import BaseButton from '../base/BaseButton.vue';
import TextInput from '../base/TextInput.vue';

    export default {
        name: 'BookForm',

        components: {TextInput, BaseButton},

        data() {
            return {
                title: '',
                author: '',
                status: '',
            }
        }

    }

</script>

<template>

</template>