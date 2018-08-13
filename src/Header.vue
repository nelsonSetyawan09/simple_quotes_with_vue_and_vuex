<template lang="html">
  <div class="" style="margin-top:50px">
    <div class="progress" style="height:20px">
        <div class="progress-bar" style="font-size:18px; height:100%" role="progressbar"
        :style="{width:widthProgress}" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
            {{lenQuotes}} / 10
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        computed:{
            lenQuotes(){
                    return this.$store.getters.getQuotes.length;
            },
            widthProgress(){
                let lenQuotes=this.$store.getters.getQuotes.length;
                return (lenQuotes/10) *100 +'%';
            }
        }
    }
</script>

<style lang="css">
</style>
