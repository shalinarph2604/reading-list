<script lang="ts">
import { defineComponent } from 'vue';
import BookRecom from '@/components/common/BookRecom.vue';

export default defineComponent ({
    name: 'BookRecommendation',

    components: {
        BookRecom
    }
})

</script>

<template>
    <div id="views-recom">
        <h1>Our Recommendation Book List</h1>
        <BookRecom />
    </div>
</template>

<style scoped>
    #views-recom {
        background-color: var(--color-secondary);
        padding: 40px;
    }

</style>