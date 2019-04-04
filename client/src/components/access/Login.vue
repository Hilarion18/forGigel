<template>
  <div class="login-wrap">
    <div class="login-html">
      <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab" style="color: rgba(71, 230, 241, 0.945)">Sign In</label>
      <input id="tab-2" type="radio" name="tab" class="for-pwd"><label for="tab-2" class="tab" style="color: rgba(71, 230, 241, 0.945)">Sign Up</label>
      <div class="login-form">
        <div class="sign-in-htm">
          <div class="group">
            <label for="loginEmail" class="label">Email</label>
            <input id="loginEmail" type="text" class="input" v-model="userLogin.email">
          </div>
          <div class="group">
            <label for="loginPass" class="label">login</label>
            <input id="loginPass" type="password" class="input" data-type="password" v-model="userLogin.password">
          </div>
          <div class="group">
            <input @click="login" type="submit" class="button" value="Sign In">
          </div>
          <div class="hr"></div>
        </div>
        <div class="for-pwd-htm">
          <div class="group">
            <label for="registeremail" class="label">Email</label>
            <input id="registeremail" type="text" class="input" v-model="userRegister.email">
          </div>
          <div class="group">
            <label for="registerName" class="label">Name</label>
            <input id="registerName" type="text" class="input" v-model="userRegister.name">
          </div>
          <div class="group">
            <label for="registerPhone" class="label">Phone Number</label>
            <input id="registerPhone" type="text" class="input" v-model="userRegister.phoneNumber">
          </div>
          <div class="group">
            <label for="registerPass" class="label">Password</label>
            <input id="registerPass" type="password" class="input" data-type="password" v-model="userRegister.password">
          </div>
          <div class="group">
            <input @click="register" type="submit" class="button" value="Sign Up">
          </div>
          <div class="hr"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from '@/config.js'

export default {
  data () {
    return {
      userRegister: {
        name: '',
        email: '',
        phoneNumber: '',
        password: ''
      },
      userLogin: {
        email: '',
        password: ''
      },
      isLogin: false
    }
  },
  methods: {
    login: function () {
      axios({
        method: `POST`,
        url: `${config.port}/user/login`,
        data: {
          email: this.userLogin.email,
          password: this.userLogin.password
        }
      })
        .then((response) => {
          console.log(`Login successed `, JSON.stringify(response))
          localStorage.setItem('userId', response.data.id)
          localStorage.setItem('token', response.data.token)
          this.isLogin = true
          this.$emit('sendIsLogin', this.isLogin)
          this.$emit('sendUserLogin', this.userLogin)
        })
        .catch((err) => {
          console.log(`Login failed `, JSON.stringify(err))
        })
    },
    register: function () {
      axios({
        method: `POST`,
        url: `${config.port}/user/register`,
        data: {
          name: this.userRegister.name,
          email: this.userRegister.email,
          phoneNumber: this.userRegister.phoneNumber,
          password: this.userRegister.password
        }
      })
        .then((response) => {
          this.responseRegister = response
          console.log(`this is response `, JSON.stringify(response.data.token))
          console.log(`Registered successed`)
          localStorage.setItem('userId', response.data.id)
          localStorage.setItem('token', response.data.token)
          this.isLogin = true
          this.$emit('sendIsLogin', this.isLogin)
          this.$emit('sendUserRegister', this.userRegister)
        })
        .catch((err) => {
          console.log(`Registration failed `, err)
        })
    }
  },
  created () {
  },
  watch: {
  }
}
</script>

<style scope>
.login-wrap{
width: 100%;
margin:auto;
max-width:510px;
min-height:510px;
position:relative;
background:url(https://cdn.wallpapersafari.com/4/45/LH17UN.jpg) no-repeat center;
background-size: cover;
box-shadow:0 12px 15px 0 rgba(77, 202, 252, 0.945),0 17px 50px 0 rgba(77, 217, 252, 0.24);
}
.login-html{
width:100%;
height:100%;
position:absolute;
padding:90px 70px 50px 70px;
background:rgba(0, 0, 0, 0.5);
}
.login-html .sign-in-htm,
.login-html .for-pwd-htm{
top:0;
left:0;
right:0;
bottom:0;
position:absolute;
-webkit-transform:rotateY(180deg);
transform:rotateY(180deg);
-webkit-backface-visibility:hidden;
backface-visibility:hidden;
-webkit-transition:all .4s linear;
transition:all .4s linear;
}
.login-html .sign-in,
.login-html .for-pwd,
.login-form .group .check{
display:none;
}
.login-html .tab,
.login-form .group .label,
.login-form .group .button{
text-transform:uppercase;
}
.login-html .tab{
font-size:22px;
margin-right:15px;
padding-bottom:5px;
margin:0 15px 10px 0;
display:inline-block;
border-bottom:2px solid transparent;
}
.login-html .sign-in:checked + .tab,
.login-html .for-pwd:checked + .tab{
color:rgb(255, 255, 255);
border-color:#e3fc05;
}
.login-form{
min-height:345px;
position:relative;
-webkit-perspective:1000px;
perspective:1000px;
-webkit-transform-style:preserve-3d;
transform-style:preserve-3d;
}
.login-form .group{
margin-bottom:15px;
}
.login-form .group .label,
.login-form .group .input,
.login-form .group .button{
width:100%;
color:#fff;
display:block;
}
.login-form .group .input,
.login-form .group .button{
border:none;
padding:15px 20px;
border-radius:25px;
background:rgba(255,255,255,.1);
}
.login-form .group input[data-type="password"]{
text-security:circle;
-webkit-text-security:circle;
}
.login-form .group .label{
color:rgb(170, 170, 170);
font-size:12px;
}
.login-form .group .button{
background:#1161ee;
}
.login-form .group label .icon{
width:15px;
height:15px;
border-radius:2px;
position:relative;
display:inline-block;
background:rgba(255,255,255,.1);
}
.login-form .group label .icon:before,
.login-form .group label .icon:after{
content:'';
width:10px;
height:2px;
background:#fff;
position:absolute;
-webkit-transition:all .2s ease-in-out 0s;
transition:all .2s ease-in-out 0s;
}
.login-form .group label .icon:before{
left:3px;
width:5px;
bottom:6px;
-webkit-transform:scale(0) rotate(0);
transform:scale(0) rotate(0);
}
.login-form .group label .icon:after{
top:6px;
right:0;
-webkit-transform:scale(0) rotate(0);
transform:scale(0) rotate(0);
}
.login-form .group .check:checked + label{
color:#fff;
}
.login-form .group .check:checked + label .icon{
background:#1161ee;
}
.login-form .group .check:checked + label .icon:before{
  -webkit-transform:scale(1) rotate(45deg);
  transform:scale(1) rotate(45deg);
}
.login-form .group .check:checked + label .icon:after{
  -webkit-transform:scale(1) rotate(-45deg);
  transform:scale(1) rotate(-45deg);
}
.login-html .sign-in:checked + .tab + .for-pwd + .tab + .login-form .sign-in-htm{
  -webkit-transform:rotate(0);
  transform:rotate(0);
}
.login-html .for-pwd:checked + .tab + .login-form .for-pwd-htm{
  -webkit-transform:rotate(0);
  transform:rotate(0);
}

.hr{
  height:2px;
  margin:60px 0 50px 0;
  background:rgba(255,255,255,.2);
}
.foot-lnk{
  text-align:center;
}
</style>
