# Gigel App

This is an app with login feature for gigel test, just npm install to use it. database using ORM Mongoose with Robo 3T GUI means don't use sql language to use data. 
<br>
Using Javascript language

* **How to run** 

  `Properties`

  User that already registered can login by using email and password
  <br>
  <br>
  Email:
  - Email must be unique
  <br>

  Phone Number:
  - Number must be unique
  - Minimum length 10 character
  <br>

  Password:
  - Miminum length 8 character
  - every password written will encrypt and will be added hash into it, so none knows your password except you and God

  `FLOWS`

  after logged in, server only give jwt token and userId to client.
  <br>
  Token will be used to notice if user logged in or not
  <br> 
  userId will be used to give user that already logged in to pass the access of his own data only
  
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