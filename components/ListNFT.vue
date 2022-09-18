<template>
    <div class="mx-10 md:mx-0 flex-row flex my-10 p-8 rounded-xl shadow-xl bg-d justify-between items-center flex-wrap">
        <img :src="this.nft.metadata.image" width="150" height="150" class="mx-auto mb-8 md:mb-0">
        <div class="flex-col flex justify-between items-left inline-block">
            <div class="flex-row flex justify-left items-center"><p class="mx-4 font-medium">Name: </p><a :href="'https://sparkies.io/nft/0x948E8c6E0c9035f7372a10e10f9f71cC81341053/' + this.nft.tokenID" class="mr-4 text-e text-xl">{{this.nft.metadata.name}}</a><div class="mx-auto"/> <p v-if="this.nft.valid" class="text-valid font-bold text-lg">VALID</p><p v-else class="text-scam font-bold text-lg">LIKELY SCAM</p></div>
            <div class="flex-row flex justify-left items-center"><p class="mx-4 mt-2 mb-1 font-medium">Issuer: </p><div class="mx-auto"/><p v-if="this.nft.valid" class="ml-6 mt-2 mb-1 font-normal">{{this.nft.creator.replace(".", "")}}</p></div>
            <a class="ml-4 text-e font-mono" :href="'https://evmexplorer.velas.com/address/' + data.issuer + '/transactions'">{{data.issuer}}</a>
            <p class="mx-4 mt-2 font-medium">Owner: </p>
            <a class="ml-4 text-e font-mono" :href="'https://evmexplorer.velas.com/address/' + data.owner + '/transactions'">{{data.owner}}</a>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: ['nft'],
    data() {
        return {
            name: "ListNFT",
            data: this.nft,
        }
    },
})
</script>
