// import logo from './assets/imgs/logo.png'
// import  './assets/css/my.css'

// const image = new Image()
// image.src = logo
// document.body.appendChild(image)
// document.getElementById('root').innerHTML = '<h1>Hello222</h1>'

import Vue from 'vue'
import App from './App'

new Vue({
  el:'#root',
  components:{
    App:App
  },
  template:'<App/>'
})
