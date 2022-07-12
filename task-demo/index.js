/*
 * @Author: 陈泽鑫
 * @Description: 
 * @Date: 2022-05-25 16:34:24
 * @LastEditors: 陈泽鑫
 * @LastEditTime: 2022-07-12 22:36:38
 * @FilePath: \xingneng\index.js
 */
var h1 = document.getElementsByClassName('h1')[0]
var h2 = document.getElementsByClassName('h2')[0]

function changeHeight () {
  console.log(h1.getBoundingClientRect().height)
  var height = h1.getBoundingClientRect().height + 20
  h1.style.height = height + 'px'
  // var height = parseInt(h1.style.height.replace(/[a-z]/gi,'')) + 20
  // h1.style.height = height + 'px'
}

function Microtasks() {
  console.log('微任务')
}

function MacroTask() {
  console.log('宏任务')
}

function MacroTask2() {
  console.log('宏任务')
}

function fn3() {
  new Promise((r) => {
    console.log('fn3')
    r()
  }).then(_ => {
    // for(var i=0; i<1000000; i++) {
    // }
    Microtasks()
  })
}

function fn2() {
  setTimeout(() => {
    MacroTask()
  })
  setTimeout(() => {
    MacroTask2()
  })
  fn3()
}

function fn1() {
  console.log('fn1')
  fn2()
}

function clickDom () {
  // changeHeight()
  fn1()
}


h1.addEventListener('click', clickDom)