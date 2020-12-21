<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';

// ts 练习

// interface INameInfo {
//   firstname: string,
//   lastname: string
// }


// const getFullName = ({firstname, lastname}: INameInfo): string => {
//   return `${firstname} ${lastname}`
// }

// // const getFullName = ({firstname, lastname}: {firstname: string, lastname: string}): string => {
// //   return `${firstname} ${lastname}`
// // }

// // console.log(getFullName({firstname: 'fanmu', lastname: '18'}))

// // 可选参数
// // interface IVegetable {
// //   color?: string,
// //   type: string
// // }

// // 解决多余属性 第一种方法 类型断言 来解决多余属性传参   
// // console.log(getVegetables({
// //   color: '青色', 
// //   type: '青菜', 
// //   size: 2
// //   } as IVegetable ))

// // 第二种方法 索引签名
// interface IVegetable {
//   color?: string,
//   type: string,
//   [prop: string]: any
// }

// const getVegetables = ({color, type}: IVegetable): string => {
//   return `A ${color ? (color + ' ') : ''} ${type}`
// }

// // 第三种方法 类型兼容性

// const vegeInfo = {
//   color: '青色', 
//   type: '青菜', 
//   size: 2,
//   big: false
// }

// // console.log(getVegetables(vegeInfo))

// // 只读属性 readonly

// interface Ireadonly {
//   readonly read: string
// }

// interface ArrInter {
//   0: number,
//   readonly 1: string
// }

// // 定义函数结构的接口

// interface AddFunc {
//   (numb1: number, numb2: number): number
// }

// type AddFunc1 = (num1: number, num2: number) => number

// // const add: AddFunc = (n1, n2) => n1+n2
// // const add: AddFunc = (n1, n2) => `${n1}+${n2}`

// // 索引类型

// interface RoleDic {
//   [id: number]: string
// }

// const role1: RoleDic = {
//   1: 'string',
//   // 'str': 'string'
// }

// // 接口继承

// interface VegeTables {
//   color: string
// }

// interface Tomato extends VegeTables {
//   radius: number
// }

// const tomato: Tomato = {
//   radius: 18,
//   color: 'red'
// }


// // 混合接口
// interface Counter {
//   (): void
//   count: number
// }

// const getCounter = (): Counter => {
//   const c = () => { c.count++ }
//   c.count = 0
//   return c
// }

// const counter: Counter = getCounter()

// // counter()
// // console.log(counter.count)
// // counter()
// // console.log(counter.count)
// // counter()
// // console.log(counter.count)




// // 函数
// // 函数类型
// function add(arg1: number, arg2: number): number {
//   return arg1 + arg2
// }
// add(1,2)
// 参数
// 重载

import axios from './libs/api.request'
@Options({
  components: {
    HelloWorld,
  }
})
export default class App extends Vue {}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
