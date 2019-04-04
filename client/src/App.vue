<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/"><h1>Welcome</h1></router-link> -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
}
#nav {
padding: 30px;
}

#nav a {
font-weight: bold;
color: #2c3e50;
}

#nav a.router-link-exact-active {
color: #42b983;
}
body {
margin:0;
color:#edf3ff;
background:#c8c8c8;
background:url(https://images5.alphacoders.com/403/thumb-1920-403408.jpg) fixed;
background-size: cover;
font:600 16px/18px 'Open Sans',sans-serif;
}
:after,:before{box-sizing:border-box}
.clearfix:after,.clearfix:before{content:'';display:table}
.clearfix:after{clear:both;display:block}
a{color:inherit;text-decoration:none}
</style>
