<style>
  button{
    font-size: 25px;
    color: green;
    width: 100px;
    height:50px;
    margin-left: 10px;
    margin-top: 10px;
    border: 1px solid green;
  }
</style>

<template>
  <v-app>
    <v-content>
      <router-view />
      <form id="myform" action="" method="POST" v-on:submit="test">
        <button type="submit">Test</button>
      </form>
      
    </v-content>
    <v-footer height="auto" color="primary lighten-1">
      <v-layout justify-center row wrap>
        <v-flex green darken-1 py-3 text-xs-center white--text xs12>
          Copyright &copy;2019 Powered By
          <strong>Aiwifi</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //
    };
  },
  /*mounted: function(){
    var url_string = window.location.href
    var url = new URL(url_string);
    var ip = url.searchParams.get("uamip");
    var form = document.getElementById("myform")
    form.setAttribute("action", ip)
  },*/
  methods: {
    test: function(){
      var url_string = window.location.href
      var url = new URL(url_string);
      var ip = url.searchParams.get("ip");
      var data = {
        res: url.searchParams.get("res"),
        uamip: url.searchParams.get("uamip"),
        uamport: url.searchParams.get("uamport"),
        challenge: url.searchParams.get("challenge"),
        called: url.searchParams.get("called"),
        mac: url.searchParams.get("mac"),
        ip: url.searchParams.get("ip"),
        nasid: url.searchParams.get("nasid"),
        sessionid: url.searchParams.get("sessionid"),
        userurl: url.searchParams.get("userurl"),
        md: url.searchParams.get("md"),
      }
      this.$http({method: 'POST', url: ip, data: data})
      .then(response => {
        this.postResults = data;
        this.ajaxRequest = false;
      }).catch((err) => {
        console.log(err)
      })
    }
  }
};
</script>
