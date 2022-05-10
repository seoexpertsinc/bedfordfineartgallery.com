<template>
    <div>
        <transition name="fade" appear>
            <div v-if="showModal" class="modal-overlay" @click="showModal = false"></div>
        </transition>
        <transition name="pop" appear>
            <div v-if="showModal" class="modal" role="dialog">
                <div style="position: relative">
                    <h2>Interested in this painting?</h2>
                    <div class="guide_info_popup">
                        <nuxt-img
                            class="art_detail"
                            alt="Edward Moran
"
                            height="953"
                            src="curnock_small.jpg"
                            width="1396"
                        />
                    </div>
                    <RemodalText />
                    <RemodalForm />
                    <button class="button button-x" @click="showModal = false">X</button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showModal: true,
        }
    },
}
</script>

<style scoped>
.modal {
    position: absolute;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    text-align: center;
    width: fit-content;
    height: fit-content;
    max-width: 460px;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    background: #fff;
    z-index: 999;
    transform: none;
}
.modal h1 {
    margin: 0 0 1rem;
}

.modal img {
    width: 100%;
    height: auto;
    max-width: 200px;
    margin: auto;
}

.modal textarea,
.modal input {
    width: 100%;
    border: 1px solid #bebebe;
    border-radius: 6px;
    max-width: 660px;
    margin: auto;
    padding: 10px;
}
.modal label {
    text-align: left !important;
}

.modal-overlay {
    content: '';
    position: absolute;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 998;
    background: #2c3e50;
    opacity: 0.6;
    cursor: pointer;
}

/* ---------------------------------- */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s linear;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
    transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
    opacity: 0;
    transform: scale(0.3) translateY(-50%);
}
.button-x {
    position: absolute;
    right: 0;
    top: 0;
}
</style>
