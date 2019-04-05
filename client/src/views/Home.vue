<template>
  <div class="home">
    <div v-if="isLogin !== true">
      <h1>Welcome</h1>
      <login :isLogin="isLogin" @sendIsLogin="getIsLogin($event)" @sendIsLogout="getIsLogout($event)" ></login>
    </div>
    <div v-if="isLogin === true">
      <div class="container">
        <div class="nav">
          <button class="text-left" style="margin: -10px 10px 20px 48px" @click="logout()">Logout</button>
        </div>
      </div>
      <h1 style="color: rgba(113, 255, 246, 0.945)">Welcome: {{ userProfile.name }}</h1>
      <user-data :userProfile="userProfile" @sendUserProfile="getUserProfile($event)"></user-data>
    </div>
    <!-- <user-update :userProfile="userProfile" @sendUserUpdate="statusUpdateContent()"></user-update> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/access/Login'
import UserData from '@/components/data/User'
import UserUpdate from '@/components/data/Update'

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
    UserData,
    UserUpdate
    // HelloWorld
  },
  methods: {
    getUserData: function () {
      axios({
        method: 'GET',
        url: `${config.port}/user/profile`,
        headers: {
          // id: localStorage.get('userId'),
          token: localStorage.getItem('token')
        }
      })
        .then((profile) => {
          this.userProfile = profile.data
          console.log(`ini get profile`, this.userProfile)
          console.log(`===== ini get profile`, profile)
          console.log(`====== ini ========`)
        })
        .catch(err => {
          console.log(`userProfile err `, err)
          console.log(`error to get todo lists`)
        })
    },
    todoLogout (val) {
      this.todoList = val
    },
    getIsLogin (val) {
      this.isLogin = val
    },
    getIsLogout (val) {
      this.isLogin = val
    },
    statusLogin: function () {
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
    },
    statusUpdateContent() {
      this.getUserData()
    },
    logout: function() {
      this.isLogin = false
      this.userProfile = []
      localStorage.removeItem('userId')
      localStorage.removeItem('token')
    },
  },
  created () {
    this.statusLogin()
    this.getUserLogin()
    this.getUserData()
  },
}
</script>

<style>
aaa {
  color: rgba(113, 255, 246, 0.945)
}
</style>
