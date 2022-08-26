<script>
import { googleConvert } from '~/libs/google-conversion'

export default {
    mounted() {
        googleConvert(this.$gtag)
    },
}
</script>
