<template>
  <div>
    <CompWorks />
    <div class="w-100pr column justify-center content-center">
      <div class="w-90pr q-ma-md">
        <q-input
          v-model="name"
          label="Ismingiz"
          placeholder="To'liq ismingiz"
          type="text"
          :rules="[
            (val) => !!val || '* Iltimos ismingizni kiriting',
          ]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CompWorks from "src/components/forMainPage/CompWorks";
import { ref } from "vue";
export default {
  components: {
    CompWorks,
  },
  setup() {
    const name = ref("");
    console.log(name.value);

    return {
      name,
    };
  },
};
</script>

<style scoped>
.inputs {
  margin: auto;
}
</style>