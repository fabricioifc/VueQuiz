<template slot-scope="props">
  <b-container id="post-form">
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="Título" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="$v.form.titulo.$model"
          :state="$v.form.titulo.$dirty ? !$v.form.titulo.$error : null"
          aria-describedby="input-1-live-feedback"
          placeholder="Título do Post"
          autofocus
        ></b-form-input>

        <b-form-invalid-feedback
          id="input-1-live-feedback"
        >This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-2" label="Food" label-for="input-2">
        <b-form-select
          id="input-2"
          v-model="$v.form.food.$model"
          :options="foods"
          :state="$v.form.food.$dirty ? !$v.form.food.$error : null"
        >
          <template slot="first">
            <option :value="null" disabled>-- Selecione --</option>
          </template>
        </b-form-select>

        <b-form-invalid-feedback id="input-2-live-feedback">This is a required field.</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="input-group-3" label="Food" label-for="input-3">
        <b-form-textarea
          id="input-3"
          v-model="$v.form.content.$model"
          :state="$v.form.content.$dirty ? !$v.form.content.$error : null"
          placeholder="Conteúdo do post..."
          rows="3"
          max-rows="10"
          aria-describedby="input-1-live-feedback"
        ></b-form-textarea>

        <b-form-invalid-feedback id="input-3-live-feedback">Campo Obrigatório!</b-form-invalid-feedback>
      </b-form-group>

      <b-button type="submit" variant="primary" :disabled="$v.form.$invalid">Submit</b-button>
    </b-form>
  </b-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
import { db, postsRef } from "@/database";
export default {
  mixins: [validationMixin],
  name: "PostForm",
  props: {},
  data() {
    return {
      foods: ["apple", "orange"],
      form: {
        titulo: null,
        food: null,
        content: null
      },
      created: null
    };
  },
  validations: {
    form: {
      food: {
        required
      },
      titulo: {
        required,
        minLength: minLength(3)
      },
      content: {
        required
      }
    }
  },
  methods: {
    onSubmit() {
      const createdAt = new Date();
      db.collection("posts")
        .add({
          titulo: this.form.titulo,
          content: this.form.content,
          createdAt
        })
        .then(res => {
          console.log("Criou o Post");
          var self = this;

          Object.keys(this.form).forEach(function(key, index) {
            self.form[key] = null;
          });

          console.log(self.$v.errors)


          self.$v.$reset();
          this.created = false;
        });
    }
  }
  // watch: {
  //   created: {
  //     immediate: false,
  //     handler: function() {

  //     }
  //   }
  // }
};
</script>

<style scoped>
</style>
