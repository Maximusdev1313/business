<template>
  <div>
    <CompWorks />
    <div class="w-100pr column justify-center content-center">
      <div class="w-90pr q-ma-md">
        <!-- <div class="flex justify-between">
          <q-input
            v-model="name"
            label="Ismingiz"
            class="w-40pr"
            placeholder="To'liq ismingiz"
            type="text"
            :rules="[(val) => !!val || '* Iltimos ismingizni kiriting']"
          />
          <q-input
            v-model="name"
            label="Familyangiz"
            class="w-40pr"
            type="text"
            :rules="[(val) => !!val || '* Iltimos familyangizni kiriting']"
          />
        </div> -->
        <q-input
          v-model="name"
          label="Kompaniya nomi"
          type="text"
          :rules="[(val) => !!val || '* Iltimos kompaniya nomini kiriting']"
        />
        <q-input
          v-model="creditSize"
          label="Kredit miqdori"
          type="number"
        />
         <q-input
          v-model="month"
          label="necha oyga"
          type="number"
        />
         <q-input
          v-model="persent"
          label="Foizi"
          type="number"
        />
        <q-btn @click="totalCredit">
          Hisoblash
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import CompWorks from "src/components/forMainPage/CompWorks";
import { ref } from "vue";
import counterForCredit from '../mixins/counterForCredit'
export default {
  components: {
    CompWorks,
  },
  setup() {
    const name = ref('')
    
    const {creditSize, month, persent, totalPersent,totalCredit } = counterForCredit()

    return {
      creditSize,
      month,
      persent,
      totalPersent,
      totalCredit,
      name
    };
  },
};
</script>

<style scoped>
.inputs {
  margin: auto;
}
</style>