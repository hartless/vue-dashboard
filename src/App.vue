<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  padding: 3em;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ddeedf;
  background-color: #000;
}
a {
  text-decoration: none;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #5b8f70;
    &.router-link-exact-active {
      color: #7cddb1;
    }
  }
}
</style>
