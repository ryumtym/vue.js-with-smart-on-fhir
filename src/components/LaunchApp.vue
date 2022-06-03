<template>
  <div>
    <h2>loading..</h2>
  </div>
</template>

<script>
  import FHIR from "fhirclient"
  export default {
    created(){
      FHIR.oauth2.authorize({
        client_id: "testid", //auth id
        scope: "launch openid fhirUser patient/*.read",
        redirectUri: "http://localhost:8080", //vue
        iss:"http://localhost:3000/4_0_0/" //fhirServer
      });
    }
  }
</script>