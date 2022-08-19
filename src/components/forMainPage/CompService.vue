<template>
  <div>
    <article>
      <div class="container row justify-center">
        <div class="w-75pr h-100pr ">
          <div class="w-100pr h-200px  text-center row justify-center content-center">
            <div>
              <div class="fs-38px">
                Our Popular Services
              </div>
              <div class="fs-15px text-grey-7">
                It is a long established fact that a reader will be distracted by the readable content <br> of a page
                when looking at its layout.
              </div>
            </div>
          </div>

          <article>
            <div class="w-100pr h-670px  row justify-between">
              <q-card class="cart w-350px h-300px text-center row content-center q-mt-md" v-for="card in cards"
                :key="card">
                <div>
                  <div class="fs-20px q-mb-md">
                    {{ card.text }}
                  </div>
                  <div class="fs-15px text-grey-7" style="line-height: 1.7; ">
                    {{ card.lorem }}
                  </div>
                </div>
              </q-card>
            </div>
          </article>
        </div>

      </div>
    </article>
    <div class="bg w-100pr h-160px row content-center ">
      <div class="w-100pr row justify-center">
        <div class="w-75pr row justify-between content-center">
          <div class="text">
            So' What Next Are You ready ? Let's Download
          </div>
          <div>
            <button class="btn">Get Download</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CompService',
  data() {
    return {
      cards: [
        {
          text: 'Latest Technology',
          lorem: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        }, {
          text: 'Latest Technology',
          lorem: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
      ]
    }
  },
}
</script>
<style scoped>
.container {
  height: 100vh;
  background-color: #fff;
}

article .cart {
  padding: 30px;
}

.bg {
  background-color: #520FAC;
}

.text {
  font-size: 28px;
  font-weight: 500;
  color: #fff;
}

.btn {
  border: 2px solid #ffffff;
  color: #ffffff;
  background-color: transparent;
  font-weight: 700;
  border-radius: 4px;
  padding: 13px 32px;
  font-size: 14px;
   transition: all 0.5s;

}

.btn:hover {
  background-color: #fff;
  color: #520FAC;
  cursor: pointer;
  transition: all 0.5s;
}
</style>
