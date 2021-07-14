<template>
  <nav class="nav">
    <div class="container">
      <h2 style="padding-top: 20px; padding-left: 40px">My-Store</h2>

      <div class="collapse navbar-collapse" id="navbarResponsive">
        <button class="cart">
          Cart ({{ cart }})
        </button>
      </div>
    </div>
  </nav>

  <div class="container mt-4">
    <div class="row">
      <div class="col-md-12" id="app">
        <div
          v-for="item in itemList"
          :key="item.id"
          class="card mt-3 ppp"
          style="
            background-color: rgba(193, 255, 241, 0.637);
            width: 18rem;
            top: 10%;
            margin-right: 24px;
            border-color: black;
            border-radius: 10px black;
            position: relative;
            display: inline-block;
          "
        >
          <!-- <img :src="require('../assets/images/' + item.itemImage + '.jpg')" class="card-img-top" alt="image"> -->

          <img :src="item.itemImage" class="card-img-top" alt="image" />

          <div class="card-body">
            <h5 class="card-title text-dark">{{ item.itemName }}</h5>
            <p class="card-text text-dark">{{ item.subtitle }}</p>
            <p class="badge bg-success">{{ item.price }}</p>
            <br />
            <a
              :href="item.url"
              style="margin-right: 20px; margin-top: 10px"
              class="btn btn-primary"
              >Buy</a
            >
            <a
              @click="cart += 1"
              class="btn btn-primary"
              style="margin-top: 10px"
              >Add to Cart</a
            >
          </div>
        </div>
      </div>
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
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  
  background-color: aqua;
  height: 60px;
}

.cart {
    padding: 2px 6px;
    font-size: 20px;
    position: fixed;
  margin-left: 970px;
  top: 16px;
  display: inline-block;
}
.ppp {
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
  color: #42b983;
}
</style>
