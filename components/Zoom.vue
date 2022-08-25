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
        let src, thumbnail, w, h
        if (this.mobile) {
            src = this.painting.gridImage
            thumbnail = this.painting.gridImage
            w = this.painting.gridImageWidth
            h = this.painting.gridImageHeight
        } else {
            src = this.painting.highResImage || this.painting.mediumResImage
            thumbnail = this.painting.mediumResImage
            w = this.painting.highResImage ? this.painting.highResImageWidth : this.painting.mediumResImageWidth
            h = this.painting.highResImage ? this.painting.highResImageHeight : this.painting.mediumResImageHeight
        }

        return {
            items: [
                {
                    src,
                    thumbnail,
                    w,
                    h,
                },
            ],
        }
    },
}
</script>
