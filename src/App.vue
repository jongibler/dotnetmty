<template>
  <div>{{textFromApi}}</div>
</template>

<script>
export default {
  name: "App",
  data() {


    return {
      textFromApi: ''
    };
    
  },
  async mounted() {
    
    let response = await( await fetch(getApiUrl() + 'welcome')).json();
    this.textFromApi = response.text;

  }
};

function getApiUrl() {
  let requestUrl = "";
  if (location.href.startsWith("http://localhost")) {
    requestUrl = "http://localhost:7071/api/";
  } else {
    requestUrl = "/api/";
  }
  return requestUrl;
}	
</script>
