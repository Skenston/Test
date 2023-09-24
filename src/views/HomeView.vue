<template>
  <main class="main">
    <div class="container">
      <Promo/>
      <section class="restaurants">
        <div class="section-heading">
          <h2 class="section-title">Рестораны</h2>
          <label class="search">
            <input @input="search"
                   v-model="searchQuery"
                   type="text"
                   class="input input-search"
                   placeholder="Поиск блюд и ресторанов"/>
          </label>
        </div>
        <div class="cards cards-restaurants">
          <RestaurantCard v-for="(partner, key) in filteredPartners"
                          :key="key"
                          :partner="partner"/>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import RestaurantCard from '@/components/PartnerCard.vue'
import Promo from '@/components/Promo.vue'

export default {
  components: {
    RestaurantCard,
    Promo
  },

  mounted() {
    this.$store.dispatch('fetchData').then(() => {
      this.filteredPartners = this.$store.state.partners;
    });
  },

  data() {
    return {
      searchQuery: '',
      filteredPartners: [],
    }
  },

  methods: {
    search() {
      const partners = this.$store.state.partners;

      this.searchQuery = this.searchQuery.toLowerCase();

      this.filteredPartners = partners.filter(partner => {
        if (partner.name.toLowerCase().includes(this.searchQuery)) {
          return true;
        }

        if (partner.kitchen.toLowerCase().includes(this.searchQuery)) {
          return true;
        }

        if (partner.products_array.some(product => product.name.toLowerCase().includes(this.searchQuery))) {
          return true;
        }

        return partner.products_array.some(product => product.description.toLowerCase().includes(this.searchQuery));
      });
    }
  }
}
</script>
