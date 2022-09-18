export const state = () => ({
    query: "",
    content: "",
})

export const getters = {
    getContent(state) {
        return state.content;
    }
}

export const mutations = {
    setQuery(state, query) {
        state.query = query;
    },
    setContent(state, content) {
        state.content = content;
    }
}

export const actions = {
    async sentQuery({ state , commit}) {
        fetch("https://backend-velasiraptor-gvom4czscq-oa.a.run.app/search", {
            method: "POST",
            headers: {
                "Content-Type": "text/plain"
            },
            body: state.query
        }).then(response => {
            response.json().then(data => {
                commit("setContent", data);
            })
        });
    }
}
