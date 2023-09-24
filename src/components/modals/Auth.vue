<template>
  <div class="modal-auth">
    <div class="modal-dialog modal-dialog-auth">
      <button @click.prevent="$store.commit('setAuthModalActive', false)" class="close-auth">&times;</button>
      <form id="logInForm">
        <fieldset class="modal-body">
          <legend class="modal-title">Авторизация</legend>
          <label class="label-auth">
            <span>Логин</span>
            <input id="login" v-model="login" type="text">
          </label>
          <label class="label-auth">
            <span>Пароль</span>
            <input id="password" v-model="password" type="password">
          </label>
        </fieldset>
        <div class="modal-footer">
          <div class="footer-buttons">
            <button class="button button-primary button-login"
                    @click.prevent="authorize"
                    type="submit">Войти
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: '',
      password: '',
    }
  },
  methods: {
    authorize() {
      if (this.login && this.password) {
        this.$store.commit('setAuthorized', true);
        this.$store.commit('setAuthModalActive', false);
      }
    }
  }
}
</script>
