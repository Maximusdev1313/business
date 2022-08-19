<template >
  <div>
    <div class="conteiner bg-grey-1 h-80vh row justify-center">
      <div class="w-75pr">
        <div class="w-100pr h-200px  text-center row justify-center content-center">
          <div>
            <div class="fs-38px">
              Welcome To Softer Web
            </div>
            <div class="fs-15px text-grey-7">
              It is a long established fact that a reader will be distracted by the readable content <br> of a page when
              looking at its layout.
            </div>
          </div>
        </div>
        <q-card class="w-100pr h-300px row flex justify-around" style="border-radius: 17px;">
          <div class="card bg-grey-1 text-center row content-center" v-for="card in cards" :key="card">
            <div>
              <div class="q-mb-md fs-20px">
                {{ card.text }}
              </div>
              <div class="fs-15px text-grey-7" style="line-height: 1.6;">
                {{ card.lorem }}
              </div>
              <div class="q-mt-md">
                <a href="#">{{ card.a }}</a>
              </div>
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CompAbout',
  data() {
    return {
      cards: [
        {
          text: ' Fast And Optimized',
          lorem: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          a: 'Read More ->'
        }, {
          text: ' Fast And Optimized',
          lorem: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          a: 'Read More ->'
        },
      ]
    }
  },
}
</script>
<style>
.card {
  width: 40%;
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

</style>
