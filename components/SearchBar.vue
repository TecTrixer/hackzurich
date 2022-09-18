<template>
    <input v-model="query" type="text" placeholder="Search for NFTs..." class="shadow-2xl outline-none border-4 w-3/4 lg:w-1/2 p-4 rounded-full text-a border-a placeholder-a" @keydown.enter="send">
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            name: "SearchBar",
            query: "",
        }
    },
    methods: {
        async send() {
            this.$store.commit("req/setQuery", this.query);
            await this.$store.dispatch("req/sentQuery");
        }
    }

})
</script>
