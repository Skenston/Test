<template>
  <router-link :to="'/restaurants/' + partner.products" class="card card-restaurant">
    <img :src="partner.image" alt="image" class="card-image"/>
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title">{{ partner.name }}</h3>
        <span class="card-tag tag">{{ partner.time_of_delivery }} мин</span>
      </div>
      <div class="card-info">
        <div class="rating">
          {{ partner.stars }}
        </div>
        <div class="price">От {{ partner.price }} ₽</div>
        <div class="category">{{ partner.kitchen }}</div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    partner: {
      type: Object,
      required: true
    },
  },
}
</script>
