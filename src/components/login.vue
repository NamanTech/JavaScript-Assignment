<template>
  <img class="wave" src="wave.png" />
  <div class="container">
    <div class="img">
      <img src="bg.svg" />
    </div>
    <div class="login-content">
      <form>
        <img src="avatar.svg" />
		<h2 class="head">My-Store</h2>
        <h2 class="title">Welcome</h2>

        <form>
          <input
            type="text"
            class="input"
            placeholder="Username"
            minlength="4"
            maxlength="20"
            required
          />

          <input
            type="password"
            class="input"
            placeholder="Password"
            minlength="8"
            maxlength="15"
            required
          />
<button  class="btn"><router-link to="/">Home</router-link> </button>
         
        </form>
        <p class="re">Don't have an account?</p>
        <button mat-button routerLink="/register" class="btn1">Register</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
 
      title: ''
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Poppins", sans-serif;
  
}
.la {
  color: #000;
}
.wave {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100%;
  z-index: -1;
}

.container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 7rem;
  padding: 0 2rem;
}

.head{
	top: 4%;
	left: 38%;
	position: fixed;
	padding: 10px 40px;
	font-size: 30px;
	color: rgb(70, 18, 18);
	border-radius: 28px;
	background-color: #32be8fb7;
}

.img {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.login-content {
  position: fixed;
  display: flex;
  justify-content: flex-start;
  top: 15%;
  right: 10%;

  text-align: center;
}

.img img {
  width: 500px;
}

form {
  width: 360px;
}
.mat-input-underline {
  background-color: rgb(17, 9, 9);
}

.input {
  border: none;
  border-bottom: 2px solid rgba(37, 28, 28, 0.387);
  padding: 20px;
}

.login-content img {
  height: 100px;
}

.login-content h2 {
  margin: 15px 0;
  color: #333;
  text-transform: uppercase;
  font-size: 2rem;
}

.login-content .input-div {
  position: relative;
  display: grid;
  grid-template-columns: 7% 93%;
  margin: 25px 0;
  padding: 5px 0;
  border-bottom: 2px solid #d9d9d9;
}

.login-content .input-div.one {
  margin-top: 0;
}

.re {
  position: fixed;
  color: black;
  font-size: 1rem;
  top: 455px;
  right: 24%;
}
.btn1 {
  position: fixed;
  top: 446px;
  right: 160px;
  font-size: 1.2rem;
  color: rgb(53, 35, 157);
  font-family: "Poppins", sans-serif;
}

.i {
  color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
}

.i i {
  transition: 0.3s;
}

.input-div > div {
  position: relative;
  height: 45px;
}

.input-div > div > h5 {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 18px;
  transition: 0.3s;
}

.btn {
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  outline: none;
  border: none;
  background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
  background-size: 200%;
  font-size: 1.2rem;
  color: #fff;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  margin: 1rem 0;
  cursor: pointer;
  transition: 0.5s;
}
.btn:hover {
  background-position: right;
}
</style>