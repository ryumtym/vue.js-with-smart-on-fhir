<template>
  <div>
    <h2>loading..</h2>
  </div>
</template>

<script>
  import FHIR from "fhirclient"
  export default {
    created(){
      // smart launcher test
      
      FHIR.oauth2.authorize({
        client_id: "my_web_app",
        scope: "patient/*.read launch/patient",
        redirectUri: "http://localhost:8080", //vue
        iss:"https://launch.smarthealthit.org/v/r3/sim/eyJoIjoiMSIsImoiOiIxIn0/fhir" //fhirServer
        // iss:"https://r4.smarthealthit.org"
        // iss:"https://hapi.fhir.org/baseR4"
      });

      // FHIR.oauth2.authorize({
      //   client_id: "testid", //auth id
      //   scope: "launch openid fhirUser patient/*.read",
      //   redirectUri: "http://localhost:8080", //vue
      //   iss:"http://localhost:3000/4_0_0/" //fhirServer
      // });


    }
  }
</script>


