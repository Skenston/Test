<template>
  <div class="modal modal-cart">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 class="modal-title">Корзина</h3>
        <button @click.prevent="$store.commit('setCartModalActive', false)"
                class="close">&times;
        </button>
      </div>
      <div class="modal-body">
        <div class="food-row" v-for="(product, key) in $store.state.cart" :key="key">
          <span class="food-name">{{ product.name }}</span>
          <strong class="food-price">{{ product.price }} ₽</strong>
          <div class="food-counter">
            <button class="counter-button" @click.prevent="$store.commit('removeFromCart', product)">-</button>
            <span class="counter">{{ product.count }}</span>
            <button class="counter-button" @click.prevent="$store.commit('addToCart', product)">+</button>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <span class="modal-pricetag">{{ $store.state.totalCartPrice }} ₽</span>
        <div class="footer-buttons">
          <button class="button button-primary">Оформить заказ</button>
          <button @click.prevent="$store.commit('setCartModalActive', false)"
                  class="button clear-cart">Отмена
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
