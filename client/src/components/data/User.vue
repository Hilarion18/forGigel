<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-5 img">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvzOpl3-kqfNbPcA_u_qEZcSuvu5Je4Ce_FkTMMjxhB-J1wWin-Q"  alt="" class="img-rounded">
        </div>
        <div class="col-md-4 details">
          <div class="writing">
            <div class="text-left" >
              <blockquote>
                <h3>Name: {{ userProfile.name }}</h3>
                <!-- <small><cite title="Source Title">Chicago, United States of America  <i class="icon-map-marker"></i></cite></small> -->
              </blockquote>
              <p href="">Email: {{ userProfile.email }} </p>
              <p href="">Phone Number: {{ userProfile.phoneNumber }}</p>
              <p href=""> Password: *********</p> <br>
              <button class="button4"><router-link to="/update">Edit</router-link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import config from '@/config.js'

export default {
  data () {
    return {
      userProfile: []
    }
  },
  methods: {
  getUserProfile: function () {
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
        // console.log(`ini get profile`, this.userProfile)
        this.$emit(`sendUserProfile`, this.userProfile)
      })
      .catch(err => {
        console.log(`userProfile err `, err)
      })
    }
  },
  created () {
    this.getUserProfile()
  }
}
</script>

<style scoped>
button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 25px 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.button4 {border-radius: 25px;}

.writing {
  color: white;
  padding: 10px;
  background-color: rgb(80, 35, 196, 40%);
}
</style>
