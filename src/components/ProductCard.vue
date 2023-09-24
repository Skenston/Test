<template>
  <div class="card">
    <img :src="'/' + product.image" alt="image" class="card-image"/>
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title card-title-reg">{{ product.name }}</h3>
      </div>
      <div class="card-info">
        <div class="ingredients">{{ product.description }}</div>
      </div>
      <div class="card-buttons">
        <button @click="$store.commit('addToCart', product)"
                class="button button-primary button-add-cart">
          <span class="button-card-text">В корзину</span>
          <span class="button-cart-svg"></span>
        </button>
        <strong class="card-price-bold">{{ product.price }} ₽</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
