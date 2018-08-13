<template lang="html">
    <form>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Make a new quote</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="quote"></textarea>
    </div>
     <button type="button"
     class="btn btn-primary form-control"
     @click.prevent="addQuote" :disabled="!quote || lenQuotes>=10" >Add Quote</button>
  </form>
</template>

<script>
    export default {
        data(){
            return{
                    quote:''
            }
        },
        methods:{
            addQuote(){
                this.$store.dispatch('addQuote',this.quote);
                this.quote='';
            }
        },
        computed:{
            lenQuotes(){
                    return this.$store.getters.getQuotes.length;
            }
        }
    }
</script>

<style lang="css">
</style>
