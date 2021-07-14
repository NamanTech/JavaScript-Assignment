<template>
  <nav class="nav">
    <div>
      <h2 style="padding-top: 20px; padding-left: 40px">My-Store</h2>

      <div>
        <button class="log-btn">Login</button>
        <button class="cart">Cart ({{ cart }})</button>
      </div>
    </div>
  </nav>

  
        <div
          v-for="item in itemList"
          :key="item.id"
          class="card"
        >
          <img :src="item.itemImage" class="card-img-top" style="width: 100%" alt="image" />
          <div class="product" >
            <h5 style="font-size: 20px; margin-left:20px; top:10px;" >{{ item.itemName }}</h5>
            <p style="font-size: 15px; margin-left:12px; margin-top:6px;">{{ item.subtitle }}</p>
            <p style="font-size: 18px; margin-left:12px; width:127px; margin-top:8px; background-color: #7042b9 ;">{{ item.price }}</p>
            <br />
            <a
              :href="item.url"
              style="font-size: 17px;margin-left: 20px; margin-bottom: 20px; background-color: #bdahg3e;"
              >Buy</a
            >
             <button   @click="addToCart"
              style="font-size: 17px;margin-left: 50px; background-color: #bdaa3e;">Add to Cart</button>
          </div>
        </div>
     

</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      cart: 0,
      itemList: [
        {
          id: "1",
          itemName: "iPhone 12 Pro",
          subtitle: "The ultimate iPhone.",
          price: "From ₹119900*",
          itemImage: "item1.jpg",
          url: "https://www.apple.com/in/shop/buy-iphone/iphone-12-pro",
        },
        {
          id: "2",
          itemName: "iPhone SE",
          subtitle: "Lots to love, Less to spend.",
          price: "From ₹39900*",
          itemImage: "item2.jpg",
          url: "https://www.apple.com/in/shop/buy-iphone/iphone-se",
        },
        {
          id: "3",
          itemName: "iPhone 11",
          subtitle: "As amazing as ever.",
          price: "From ₹54900*",
          itemImage: "item3.jpg",
          url: "https://www.apple.com/in/shop/buy-iphone/iphone-11",
        },
        {
          id: "4",
          itemName: "Samsung Galaxy M31",
          subtitle: "Space Blue, 8GB RAM, 128GB Storage",
          price: "From ₹16,999*",
          itemImage: "item4.jpg",
          url: "https://www.amazon.in/Samsung-Galaxy-Space-Black-Storage/dp/B07HGLM366/ref=asc_df_B07HGLM366/?tag=googleshopdes-21&linkCode=df0&hvadid=397076931806&hvpos=&hvnetw=g&hvrand=4821265387760393974&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007796&hvtargid=pla-921590129718&psc=1&ext_vrnc=hi",
        },
        {
          id: "5",
          itemName: "Samsung Galaxy M51",
          subtitle: "Electric Blue, 8GB RAM, 128GB Storage",
          price: "From ₹22,999*",
          itemImage: "item5.jpg",
          url: "https://www.amazon.in/Samsung-Galaxy-Electric-Blue-128GB-Storage/dp/B085J1868F/ref=asc_df_B085J1868F/?tag=googleshopdes-21&linkCode=df0&hvadid=397082017145&hvpos=&hvnetw=g&hvrand=4821265387760393974&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007796&hvtargid=pla-957979436620&psc=1&ext_vrnc=hi",
        },
        {
          id: "6",
          itemName: "Samsung Galaxy M12",
          subtitle: "Blue, 64GB, 4GB RAM",
          price: "From ₹11500*",
          itemImage: "item6.jpg",
          url: "https://www.amazon.in/Samsung-Galaxy-Midnight-Blue-Storage/dp/B07HGJJ559",
        },
      ],
    methods: {
    addTocart(){
        this.cart += 1
    }
  }
}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.product{
    background-color:rgb(110, 209, 188) ;

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
