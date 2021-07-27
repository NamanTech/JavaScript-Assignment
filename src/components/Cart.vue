<template>
   <nav class="nav">
    <div>
        
      <h2 style="padding-top: 20px; padding-left: 40px">Shopping-Cart</h2>

      <div>
         <button  class="log-btn"><router-link to="/login">Login</router-link> </button>
        <button  class="cart"><router-link to="/">Home</router-link> </button>
      
      </div>
    </div>
  </nav>

  <div v-for="product in cartlist" :key="product.id" class="card">  
    <div class="product">
      <h5 style="font-size: 20px; margin-left: 20px; top: 10px">
        {{ product.id}}
      </h5>
     
    </div>
  </div>
</template>
<script>
export default {
  name: "Cart",
  data() {
    return {
      cart: 0,
      cartlist: []
     
    };
  },
  mounted(){
      fetch('https://fakestoreapi.com/carts/1')
            .then(res=>res.json())
            .then(json=>this.cartlist=json)
  },
  // created() {
  //   this.$store.dispatch("getCartItems");
  // },
  methods: {
    addTocart() {
      this.cart = this.cart + 1;
    },
  },
};
</script>
<style>
.nav {
  background-color: aqua;
  height: 60px;
}
.log-btn {
  color: white;
  background-color: rgb(90, 35, 90);
  padding: 2px 6px;
  font-size: 20px;
  position: relative;
  margin-left: 890px;
  top: -30px;
  display: inline-block;
}
.cart {
  padding: 2px 6px;
  font-size: 20px;
  position: relative;
  margin-left: 970px;
  top: -60px;
  display: inline-block;
}
.card {
  left: 50px;
  background-color: rgba(54, 87, 79, 0.637);
  width: 18rem;
  height: auto;
  top: 60px;
  border: rgb(37, 27, 27) solid 2px;
  margin-right: 24px;
  margin-bottom: 40px;
  border-color: black;
  border-radius: 10px rgb(87, 187, 137);
  position: relative;
  display: inline-block;
}
.product {
  background-color: rgb(110, 209, 188);
}
.app {
  top: 5%;
  margin-right: 22px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #bdaa3e;
}
</style>