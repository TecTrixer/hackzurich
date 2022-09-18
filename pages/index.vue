<template>
    <div class="container mx-auto flex flex-col justify-center my-auto items-center h-full font-sans font-light text-a">
        <SearchBar class="mt-52 mb-20 bg-c"></SearchBar>
        <div v-if="err != null"><p class="mt-32 text-a font-medium text-xl">There has been an error: {{err}}</p></div>
        <div v-else-if="isEmpty"><p class="mt-32 text-a font-medium text-xl">Currently there are no NFTs matching your search...</p></div>
        <div v-else-if="isList">
            <template v-for="nft in nfts">
                <ListNFT :nft="nft">
                </ListNFT>
            </template>
        </div>
        <div v-else>
            <ListNFT :nft="singleNFT">
            </ListNFT>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
            name: 'IndexPage',
            isList: true,
            isEmpty: true,
            nfts: [],
            singleNFT: null,
            err: null,
        }
    },
    async mounted() {
        this.$store.subscribe(
            (action, _) => {
                if (action.type === "req/setContent") {
                    let content = this.$store.state.req.content;
                    this.err = content.err !== undefined ? content.err : null;
                    this.isList = Array.isArray(content);
                    this.isEmpty = this.isList && content.length == 0;
                    this.singleNFT = content;
                    this.nfts = content;
                }
        });
    }
})
</script>
