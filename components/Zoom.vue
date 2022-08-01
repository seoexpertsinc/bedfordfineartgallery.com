<template>
    <vue-picture-swipe :items="items" :options="{ shareEl: false }"></vue-picture-swipe>
</template>

<script>
import VuePictureSwipe from 'vue-picture-swipe'

export default {
    components: { VuePictureSwipe },
    props: {
        painting: {
            type: Object,
            required: true,
        },
        mobile: {
            type: Boolean,
            required: true,
        }
    },
    data() {
        return {
            items: [
                {
                    src: this.mobile ? this.painting.gridImage : this.painting.highResImage || this.painting.mediumResImage,
                    thumbnail: this.mobile ? this.painting.gridImage : this.painting.mediumResImage,
                },
            ],
        }
    },
}
</script>
