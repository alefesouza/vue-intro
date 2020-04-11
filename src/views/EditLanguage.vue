<template>
  <div class="mt-2">
    {{language}}
    <b-form-group label="Nome" label-for="name">
      <b-form-input id="name" v-model="language.name"></b-form-input>
    </b-form-group>

    <b-form-group label="Criador" label-for="creator">
      <b-form-input id="creator" v-model="language.creator"></b-form-input>
    </b-form-group>

    <b-form-group label="Ano" label-for="year">
      <b-form-input id="year" v-model="language.year"></b-form-input>
    </b-form-group>

    <b-form-checkbox v-model="language.typed">É típada</b-form-checkbox>

    <b-button @click="sendForm" :disabled="loading">Enviar</b-button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      loading: false,
      language: {
        name: '',
        creator: '',
        year: '',
        typed: false,
      }
    }
  },
  mounted() {
    if (!this.$route.params.id) {
      return;
    }

    axios.get('https://rg-languages.herokuapp.com/api/language/' + this.$route.params.id)
      .then(res => {
        this.language = res.data;
      });
  },
  methods: {
    sendForm() {
      this.loading = true;

      if (this.$route.params.id) {
        axios.put('https://rg-languages.herokuapp.com/api/language/' + this.$route.params.id, this.language)
          .then(() => {
            this.loading = false;
            this.$router.push('/languages');
          })
          .catch(() => {
            this.loading = false;
            alert('Houve um erro');
          })
      } else {
        axios.post('https://rg-languages.herokuapp.com/api/language/', this.language)
          .then(() => {
            this.loading = false;
            this.$router.push('/languages');
          })
          .catch(() => {
            this.loading = false;
            alert('Houve um erro');
          })
      }
    }
  }
}
</script>
