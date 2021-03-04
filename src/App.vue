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
  background-color: gray;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FFFFFF;
}
header {
  margin: 0;
  padding: 0 16px 0 24px;
  color: #FFFFFF;
  text-align: center;
  h1 {
    display: block;
    position: relative;
    font-size: 40px;
    line-height: 1;
    font-weight: 400;
    box-sizing: border-box;
    padding-top: 50px;
  }
}
main {
  text-align: center;
  margin-top: 60px;
}
</style>
