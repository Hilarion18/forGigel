<template>
  <div class="home">
    <div v-if="isLogin !== true">
      <h1>Welcome</h1>
      <login :isLogin="isLogin" @sendIsLogin="getIsLogin($event)" @sendIsLogout="getIsLogout($event)" ></login>
    </div>
    <div v-if="isLogin === true">
      <h1>Welcome: {{ userProfile.name }}</h1>
      <user-data :userProfile="userProfile" @sendUserProfile="getUserProfile($event)"></user-data>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/access/Login'
import UserData from '@/components/data/User'

export default {
  name: 'home',
  data () {
    return {
      isLogin: '',
      userProfile: []
    }
  },
  components: {
    Login,
    UserData
    // HelloWorld
  },
  methods: {
    todoLogout (val) {
      this.todoList = val
    },
    getIsLogin (val) {
      this.isLogin = val
    },
    getIsLogout (val) {
      this.isLogin = val
    },
    statusLogin () {
      console.log(`ini local storage`, localStorage)
      console.log(`ini user profile `, this.userProfile.name)
      if (localStorage.getItem('token')) {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    },
    getUserProfile (val) {
      this.userProfile = val
    }
  },
  created () {
    this.statusLogin()
    this.getUserLogin()
  }
}
</script>
