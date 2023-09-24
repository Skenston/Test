<template>
  <div class="container">
    <header class="header">
      <router-link to="/" class="logo">
        <img src="/img/icon/logo.svg" alt="Logo"/>
      </router-link>
      <label class="address">
        <input type="text" class="input input-address" placeholder="Адрес доставки"/>
      </label>
      <div class="buttons">
        <span v-if="$store.state.authorized" class="user-name">Herald</span>

        <button v-if="!$store.state.authorized"
                @click.prevent="$store.commit('setAuthModalActive', true)"
                class="button button-primary button-auth">
          <span class="button-auth-svg"></span>
          <span class="button-text">Войти</span>
        </button>

        <button v-if="$store.state.authorized"
                @click="$store.commit('setAuthorized', false)"
                class="button button-primary button-out">
          <span class="button-text">Выйти</span>
          <span class="button-out-svg"></span>
        </button>

        <button @click.prevent="$store.commit('setCartModalActive', true)"
                class="button button-cart"
                id="cart-button">
          <span class="button-cart-svg"></span>
          <span class="button-text">Корзина</span>
        </button>
      </div>
    </header>
  </div>
</template>
