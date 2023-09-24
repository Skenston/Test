<template>
  <Header/>
  <router-view/>
  <Footer/>
  <Auth v-if="$store.state.authModalActive"/>
  <Cart v-if="$store.state.cartModalActive"/>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Auth from "@/components/modals/Auth.vue";
import Cart from "@/components/modals/Cart.vue";
</script>
