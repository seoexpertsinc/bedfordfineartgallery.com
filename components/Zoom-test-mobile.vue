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
                    src: '/fredericks_winter_small.jpg',
                    thumbnail: '/fredericks_winter_small.jpg',
                    w: 1015,
                    h: 842,
                },
            ],
        }
    },
}
</script>
