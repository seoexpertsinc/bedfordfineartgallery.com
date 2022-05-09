<template>
    <vue-picture-swipe :items="items" :options="{ shareEl: false }"></vue-picture-swipe>
</template>

<script>
import VuePictureSwipe from 'vue-picture-swipe'

export default {
    components: { VuePictureSwipe },
    data() {
        return {
            items: [
                {
                    src: '/fredericks_winter_full.jpg',
                    thumbnail: '/fredericks_winter_small.jpg',
                    w: 2984,
                    h: 2474,
                },
            ],
        }
    },
}
</script>
