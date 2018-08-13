<template lang="html">
    <div class="row">
        <div @click="deleteQuote"
            class="card col-sm-6 col-md-4" v-for="(quote,index) in quotes">
              <div class="card-body">
                {{quote}}
              </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed:{
            quotes(){
                return this.$store.getters.getQuotes;
            }
        },
        methods:{
            deleteQuote(index){
                this.$store.dispatch('deleteQuote', index)
            }
        }
    }
</script>

<style lang="css">

</style>
