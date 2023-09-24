<template>
  <main class="main">
    <div class="container">
      <section class="menu">
        <div class="section-heading" v-if="partner">
          <div class="d-flex">
            <h2 class="section-title restaurant-title">{{ partner.name }}</h2>
            <div class="card-info">
              <div class="rating">
                {{ partner.stars }}
              </div>
              <div class="price">От {{ partner.price }} ₽</div>
              <div class="category">{{ partner.kitchen }}</div>
            </div>
          </div>
          <div>
            <a href="#" @click.prevent="sortByPrice()">
              {{ smallPriceFirst ? 'Сначала дешевые' : 'Сначала дорогие' }}
            </a>
          </div>
        </div>
        <div class="cards cards-menu">
          <ProductCard v-for="(product, key) in products"
                       :key="key"
                       :product="product"/>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import RestaurantCard from "@/components/PartnerCard.vue";
import axios from 'axios';

export default {
  components: {
    RestaurantCard,
    ProductCard,
  },

  created() {
    this.loadProducts();
  },

  data() {
    return {
      partner: null,
      products: [],
      smallPriceFirst: false,
      cartModal: false,
    }
  },

  methods: {
    async loadProducts() {
      this.partner = this.$store.state.partners.find(partner => partner.products === this.$route.params.partner);

      if (!this.partner) {
        return this.$router.push('/');
      }

      this.products = this.partner.products_array;
    },

    sortByPrice() {
      this.smallPriceFirst = !this.smallPriceFirst;

      if (this.smallPriceFirst) {
        this.products.sort((a, b) => a.price - b.price);
      } else {
        this.products.sort((a, b) => b.price - a.price);
      }
    },
  }
}
</script>
