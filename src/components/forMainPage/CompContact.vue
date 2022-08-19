<template>
  <div>
    <div class="container row justify-center">
      <div class="w-75pr h-92pr ">
        <div class="w-100pr h-200px  text-center row justify-center content-center ">
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

        <div class="w-100pr h-75pr  row">
          <div class="w-45pr h-100pr  row justify-center content-center">
            <div>
              <q-card class="w-400px h-400px">

              </q-card>
            </div>
          </div>
          <div class="w-55pr h-100pr  row justify-center content-center">
            <div>
              <q-card class="w-550px h-550px">
                <div class="input">
                  <form>
                    <div>
                      <input class="w-100pr h-50px" placeholder="Your name..." type="text">
                    </div>
                    <div>
                      <input class="w-100pr h-50px" placeholder="Your email..." type="email">
                    </div>
                    <div>
                      <input class="w-100pr h-50px" placeholder="Your Subject..." type="text">
                    </div>
                    <div>
                      <input class="w-100pr h-130px" placeholder="Youe massegae" type="textarea">
                    </div>
                  </form>
                  <div>
                    <q-btn style="padding: 13px 32px;" color="indigo-10" glossy label="read more"></q-btn>
                  </div>
                </div>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.container {
  height: 120vh;
}

.input {
  padding: 34px;
  line-height: 6;
  align-items: center;
}
</style>
