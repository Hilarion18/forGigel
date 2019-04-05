# Gigel App

This is an app with login feature for gigel test, just npm install to use it. database using ORM Mongoose with Robo 3T GUI means don't use sql language to use data. 
<br>
Using Javascript language


* **URL**

  <http://localhost:3000>
___
* **Models:**

  `User` have properties: name, email, phone number and password
  
___
* **Method User:**

  `GET` /user
  
  Let user can get his only profile data
  <br>
  <br>
  ___
  
  `POST`/user/login
  
  Existing user can login or sign in to enter the site, after will have a biodata(properties) that already registered by user
  <br>
  <br>

  `POST`/user/register
  
  New user can sign up or do registration to do post an article or comment to another article
  <br>
  <br>
  `PUT`/user/update
  
  User can update his/her bio
  <br>
  <br>

  `POST`/user/comment
  
  New user can sign up or do registration to do post an article or comment to another article
  <br>
  <br>
___

* **Method :**

  `client` side
  
  Using Vuejs (vuex)
  <br>
  <br>
  ___
  
  `server` side 
  
  using MVC method
  <br>
  have user endpoint
  
  <br>
  <br>
  ___