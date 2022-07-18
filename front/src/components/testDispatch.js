import store from 'redux/store'

export const closeModal = () => {
    store.dispatch({ type: "MODAL_CLOSE" })
}