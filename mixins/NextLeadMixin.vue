<script>
import { v4 as uuidv4 } from 'uuid'
import debounce from 'lodash/debounce'
import { isUselessLead } from '~/libs/useless-lead'
import NextLeadService from '~/services/NextLeadService'
import { googleConvert } from '~/libs/google-conversion'

export default {
    data() {
        const mixinData = { formStarted: false, submittedGoogleConversion: false }
        if (!this.nextLeadUUID) {
            mixinData.nextLeadUUID = uuidv4()
        }

        return mixinData
    },
    computed: {
        fieldsToSubmitComputed() {
            if (this.fieldsToSubmit === undefined || this.fieldsToSubmit === null || this.fieldsToSubmit.length === 0) {
                return Object.keys(this.form)
            }

            return this.fieldsToSubmit
        },
        formValuesPayload() {
            return this.fieldsToSubmitComputed.map((fieldToSubmit) => {
                const label =
                    this.nameToLabel && this.nameToLabel[fieldToSubmit]
                        ? { label: this.nameToLabel[fieldToSubmit] }
                        : {}
                return {
                    name: fieldToSubmit,
                    value: this.form[fieldToSubmit],
                    ...label,
                }
            })
        },
    },
    watch: {
        form: {
            async handler(formValues) {
                if (!this.isFormEmpty()) {
                    this.debouncedUpdateForm({
                        uuid: this.nextLeadUUID,
                        formName: this.formName,
                        formValues: this.formValuesPayload,
                        formPage: this.formPage,
                        sessionId: this.$sessionId,
                    })

                    if (!this.formStarted) {
                        this.formStarted = true
                        await NextLeadService.logActivity({
                            type: 'START_FORM',
                            formName: this.formName,
                            sessionId: this.$sessionId,
                            formUUID: this.nextLeadUUID,
                        })
                    }

                    if (this.googleConvert && !this.submittedGoogleConversion && !isUselessLead({ ...this.form })) {
                        this.submittedGoogleConversion = true
                        googleConvert(this.$gtag)
                    }
                }
            },
            deep: true,
        },
    },
    created() {
        this.debouncedUpdateForm = debounce(NextLeadService.updateForm, 500)
    },
    methods: {
        async submitToNextLead({ recaptchaToken }) {
            this.debouncedUpdateForm.cancel()
            await Promise.all([
                NextLeadService.submitForm({
                    uuid: this.nextLeadUUID,
                    formName: this.formName,
                    formValues: this.formValuesPayload,
                    formPage: this.formPage,
                    recaptchaToken: recaptchaToken || this.recaptchaToken,
                    sessionId: this.$sessionId,
                }),
                NextLeadService.logActivity({
                    type: 'SUBMIT_FORM',
                    formName: this.formName,
                    sessionId: this.$sessionId,
                    formUUID: this.nextLeadUUID,
                }),
            ])

            this.nextLeadUUID = uuidv4()
        },
        isFormEmpty() {
            return this.fieldsToSubmitComputed.every((field) => {
                const value = this.form[field]
                return value === undefined || value === null || value === ''
            })
        },
    },
}
</script>
