<template>
  <div>
    <div class="text-right">
      <b-button class="mt-2" to="/languages/add">Adicionar</b-button>
    </div>

    <ul>
      <li v-for="language in languages" :key="language.id">
        ID: {{ language.id }}<br>
        Nome: {{ language.name }}<br>
        Criador: {{ language.creator }}<br>
        Ano: {{ language.year }}<br>
        É tipada: {{ language.typed ? 'Sim' : 'Não' }}<br>

        <b-button variant="primary" :to="'/languages/' + language.id + '/edit'">Editar</b-button>
        <b-button class="ml-2" variant="danger" @click="deleteItem(language.id)">Excluir</b-button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Languages',
  data() {
    return {
      languages: [],
    }
  },
  mounted() {
    axios.get('https://rg-languages.herokuapp.com/api/language/')
      .then(res => {
        this.languages = res.data;
      });
  },
  methods: {
    deleteItem(languageId) {
      if (!confirm('Você deseja realmente apagar essa linguagem?')) {
        return;
      }

      axios.delete('https://rg-languages.herokuapp.com/api/language/' + languageId)
        .then(() => {
          this.languages = this.languages.filter(l => l.id != languageId);
        });
    }
  }
}
</script>
