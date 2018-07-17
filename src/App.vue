<template>
  <div id="app" >

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'this is home',

    }
  },


}
</script>

<style lang="scss">
  *{
    padding-top:0;
    margin:0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  /*margin: 0 10px;*/
}
.mainheader{
  background:lightblue;
}
.Aside{
  background:lightgray;
}
a {
  color: #42b983;
}
</style>
