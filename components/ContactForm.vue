<template>
    <form id="contactform" :class="formClass" name="contactform" @submit.prevent="submit()" >
        <label
            >Name
            <input id="name" v-model="form.name" name="name" type="text" :disabled="isSubmitting" />
        </label>

        <label
            >Email
            <input id="email" v-model="form.email" name="email" type="text" :disabled="isSubmitting" />
        </label>

        <label
            >Phone
            <input id="phone" v-model="form.phone" name="phone" type="text" :disabled="isSubmitting" />
        </label>

        <label
            >Message
            <textarea id="comments" v-model="form.comments" name="comments" style="min-height: 200px" :disabled="isSubmitting"></textarea>
        </label>
        <span style="font-size: 14px">We will only use your email to reply to you. We respect your privacy.</span>
        <div class="buttons">
            <button class="submit" :disabled="isSubmitting">Send</button>
        </div>
    </form>
</template>

<script>
import NextLeadMixin from '~/mixins/NextLeadMixin'

export default {
    mixins: [NextLeadMixin],
    props: {
        formName: {
            type: String,
            required: true,
            validator(value) {
                return ['Painting', 'Contact'].includes(value)
            },
        },
        formType: {
            type: String,
            required: false,
			default: undefined,
            validator(value) {
                return ['desktop', 'mobile', '', undefined, null].includes(value)
            },
        },
        paintingTitle: {
            type: String,
            required: false,
			default: undefined,
        },
        artistNameWithTinyDescription: {
            type: String,
            required: false,
			default: undefined,
        },
    },
    data() {
        const paintingFormValues = {}
        if (this.formName === 'Painting') {
            if (this.paintingTitle) {
                paintingFormValues.painting = this.paintingTitle
            }
            if (this.artistNameWithTinyDescription) {
                paintingFormValues.artist = this.artistNameWithTinyDescription
            }
        }
        return {
            submitStatus: null,
			form: {
				...paintingFormValues,
				name: null,
				phone: null,
				email: null,
				comments: null,
			}
        }
    },
    computed: {
        formClass() {
            if (this.formType === 'desktop') {
                return 'form_desktop'
            } else if (this.formType === 'mobile') {
                return 'form_mobile'
            }

            return ''
        },
        isSubmitting() {
            return this.submitStatus === 'submitting'
        },
    },
    methods: {
        async submit() {
            this.submitStatus = 'submitting'

            try {
                await this.submitToNextLead({})
                this.$router.push({ name: 'contact_thanks' })
            } catch (e) {
                // eslint-disable-next-line no-console
                console.log(e)
                this.submitStatus = 'error'
            }
        },
    },
}
</script>
