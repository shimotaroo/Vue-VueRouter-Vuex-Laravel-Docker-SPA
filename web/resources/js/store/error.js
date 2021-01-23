const state = {
    code: null
}

const mutations = {
    setCode (stare, code) {
        state.code = code
    }
}

export default {
    namespaced: true,
    state,
    mutations
}