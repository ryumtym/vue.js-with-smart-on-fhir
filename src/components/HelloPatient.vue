/* eslint-disable */ 
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
      FHIR.oauth2.ready(onReady, onError)
        // .then(client => client.request("Patient"))
        // .then(response => (this.datas = response))
        // .catch(console.error);

        let self = this

        function onReady(smart) {
          if (smart.hasOwnProperty("patient")) {
            var patientPromise = smart.patient.read();
            var patientData = Promise.resolve(patientPromise);
            console.log(patientData)
            patientData.then((results) => (self.datas = results));
          }
        }

        function onError() {
          console.error;
        }

    }
  }
</script>



