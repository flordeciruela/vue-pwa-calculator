<template>
  <div id="app">
    <header>
      <h1>Vuejs Calculator</h1>
    </header>
    <main>
      <Calculator></Calculator>
    </main>
  </div>
</template>

<script>
import Calculator from './components/Calculator.vue'

export default {
  name: 'App',
  components: {
    Calculator
  }
}
</script>

<style lang="scss">
html {
  font-size: 62.5%;
  box-sizing: border-box;
}
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
body {
  margin: 0;
  background: rgb(94, 94, 94);
  min-height: 100vh;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FFFFFF;
}
header {
  color: #FFFFFF;
  text-align: center;
  width: 280px;
  margin: 0 auto;
  h1 {
    display: block;
    position: relative;
    font-size: 25px;
    line-height: 1;
    font-weight: 400;
    box-sizing: border-box;
    padding-top: 60px;
    text-align: left;
  }
}
main {
  text-align: center;
  margin-top: 20px;
}
</style>
