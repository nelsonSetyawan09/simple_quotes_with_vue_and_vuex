<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <br>
        <app-quote-input></app-quote-input>
        <hr>
        <br>
        <app-quotes></app-quotes>
        <br>
        <div class="row">
            <div class="col-md-12 text-center">
                <div class="alert alert-info">
                    Click quote to delete!!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './Header.vue';
    import QuoteInput from './QuoteInput.vue';
    import Quotes from './Quotes.vue';
    export default {
        name: 'app',
            data () {
                return {

                }
        },
        components:{
            'appHeader': Header,
            'appQuoteInput': QuoteInput,
            'appQuotes': Quotes
        }
    }
</script>

<style>

</style>
