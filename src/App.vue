<template>
  <div>
     <ol>
        <li v-for="message in messages" :key="message._id">
          {{message.text}}
        </li>
    </ol>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {

    return {

      messages: []
      
    };
    
  },
  async mounted() {
    
    this.messages = await( await fetch(getApiUrl() + 'messages')).json();

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
