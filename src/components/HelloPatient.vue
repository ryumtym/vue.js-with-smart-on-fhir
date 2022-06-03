<template>
    <div id="app">
        <Box>{{datas}}</Box>
    </div>
</template>


<script>
  import FHIR from "fhirclient"
  export default {
    data(){
      return{
        datas: []
      }
    },
    mounted(){
      FHIR.oauth2.ready()
        .then(client => client.request("Patient"))
        .then(response => (this.datas = response))
        .catch(console.error);
    }
  }
</script>


