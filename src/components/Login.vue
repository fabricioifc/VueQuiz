<template>
  <div id="login">
    <b-container>
      <b-row>
        <b-col>
          <h1>Acessando o Site...</h1>
          <b-alert :show="message != null && logado" variant="success">{{message}}</b-alert>
          <b-alert :show="message != null && !logado" variant="danger">{{message}}</b-alert>
          <b-form @submit=onSubmit>
            <base-errors v-bind="$attrs">
              <div class="text-red" slot-scope="{ errorMessage }">{{ errorMessage }}</div>
            </base-errors>
            <b-form-group id="input-group-1" label="" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="$v.form.email.$model"
                :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
                aria-describedby="input-1-live-feedback"
                placeholder="E-mail"
                autofocus
              ></b-form-input>

              <b-form-invalid-feedback v-if="!$v.form.email.required">Campo Obrigatório!</b-form-invalid-feedback>
              <b-form-invalid-feedback v-if="!$v.form.email.email">E-mail não está formatado corretamente!</b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="input-group-3" label="" label-for="input-3">
              <b-form-input
                id="input-3"
                v-model="$v.form.password.$model"
                :state="$v.form.password.$dirty ? !$v.form.password.$error : null"
                placeholder="Senha"
                aria-describedby="input-1-live-feedback"
              ></b-form-input>

              <b-form-invalid-feedback v-if="!$v.form.password.required">Campo Obrigatório!</b-form-invalid-feedback>
            </b-form-group>

            <b-button type="submit" variant="primary" :disabled="$v.form.$invalid">Acessar</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
import { templates } from "vuelidate-error-extractor";

import { auth } from "@/database";
export default {
  mixins: [validationMixin],
  inheritAttrs: false,
  components: {
    baseErrors: templates.multiErrorExtractor.baseMultiErrorExtractor
  },
  name: 'login',
  props: {},
  data() {
    return {
      form: {
        email: 'teste@teste.com',
        password: '123456'
      },
      message: null,
      logado: false
    }
  },
  validations: {
    form: {
      email: { required, email },
      password: { required }
    }
  },
  methods: {
    onSubmit() {
      auth.signInWithEmailAndPassword(this.form.email, this.form.password)
      .then(user => {
        this.message = `Logado com Sucesso ${auth.currentUser.uid}`
        this.logado = user!=null
        this.$router.go({ path: this.$router.path });
      })
      .catch(error => {
        this.message = error.message
        this.logado=false
      })
    }
  }
}
</script>
