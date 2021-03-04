<template>
    <div class="calculator" onselectstart='return false'>
      <div class="result">{{result}}</div>
      <div class="calculator-wrapper">
        <div @click="reset()" class='btn'>C</div>
        <div @click="sign()" class='btn'>+/-</div>
        <div @click="percent()" class='btn'>%</div>
        <div @click="divide()" class='btn operator'>/</div>
        <div @click="add(7)" class='btn'>7</div>
        <div @click="add(8)" class='btn'>8</div>
        <div @click="add(9)" class='btn'>9</div>
        <div @click="multiply()" class='btn operator'>*</div>
        <div @click="add(4)" class='btn'>4</div>
        <div @click="add(5)" class='btn'>5</div>
        <div @click="add(6)" class='btn'>6</div>
        <div @click="subtract()" class='btn operator'>-</div>
        <div @click="add(1)" class='btn'>1</div>
        <div @click="add(2)" class='btn'>2</div>
        <div @click="add(3)" class='btn'>3</div>
        <div @click="sum()" class='btn operator'>+</div>
        <div @click='add(0)' class='btn btn-zero'>0</div>
        <div @click='decimalDot()' class='btn'>.</div>
        <div @click='calculate()' class='btn operator'>=</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Calculator',
  props: {
    msg: String
  },
  data () {
    return {
      result: 0,
      operatorClick: false,
      operator: null,
      preValue: null,
      dot: false
    }
  },
  methods: {
    reset () {
      this.result = 0
    },
    sign () {
      this.result =
        this.result < 0
          ? (this.result = this.result - this.result * 2)
          : (this.result = this.result - this.result * 2)
    },
    percent () {
      this.result = this.result / 100
    },
    add (num) {
      if (this.operatorClick && !this.dot) {
        this.result = num
        this.operatorClick = false
      } else {
        if (this.operatorClick && this.dot) {
          this.result = '' + this.result + num
          this.dot = false
          this.operatorClick = false
        } else {
          this.result =
          this.result === 0
            ? (this.result = num)
            : '' + this.result + num
        }
      }
    },
    decimalDot () {
      if (this.operatorClick) {
        this.result = '0.'
        this.dot = true
      }
      if (/\d+\.+/g.test(this.result)) {
        false;
      } else {
        this.result = this.result + '.'
      }
    },
    divide () {
      this.operator = (a, b) => a / b
      this.preValue = this.result
      this.operatorClick = true
    },
    multiply () {
      this.operator = (a, b) => a * b
      this.preValue = this.result
      this.operatorClick = true
    },
    subtract () {
      this.operator = (a, b) => a - b
      this.preValue = this.result
      this.operatorClick = true
    },
    sum () {
      this.operator = (a, b) => a + b
      this.preValue = this.result
      this.operatorClick = true
    },
    calculate () {
      this.result = this.operator(Number(this.preValue), Number(this.result))
      this.preValue = null
      this.operatorClick = true
    }
  }
}
</script>

<style scoped lang="scss">
.calculator {
  box-shadow: 8px 11px 22px -4px rgba(0,0,0,0.38);
  background-image: linear-gradient( -30deg, rgb(239,80,80) 0%, #9C27B0 100%);
  background-image: -moz-linear-gradient( -30deg, rgb(239,80,80) 0%, #9C27B0 100%);
  background-image: -webkit-linear-gradient( -30deg, rgb(239,80,80) 0%, #9C27B0 100%);
  background-image: -ms-linear-gradient( -30deg, rgb(239,80,80) 0%, #9C27B0 100%);
  margin: 0 auto;
  width: 280px;
  &-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    align-items: center;
  }
}
.btn {
  height: 60px;
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;
  padding: 1em;
  &:hover {
    background-color: rgba(255,255,255,0.2);
  }
  &-zero {
    grid-row: 5 / 5;
    grid-column: 1 / 3;
  }
  @media (hover: none) {
    &:hover {
      background-color: transparent;
    }
    &:active {
      background-color: rgba(255,255,255,0.2);
    }
  }
}
.result {
  background-color: transparent;
  width: 100%;
  font-size: 40px;
  height: 80px;
  border: none;
  color: #FFFFFF;
  text-align: right;
  padding: 1.4em 0.6em;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
