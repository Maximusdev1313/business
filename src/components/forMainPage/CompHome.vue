<template >
  <div>
    <div class=" h-90vh ">
      <q-img src="https://softer.netlify.app/images/bg_home_main.jpg" class="w-100pr h-90vh ">
        <div class="w-100pr h-100pr row justify-center content-center" style="background: none;">
          <div class="w-75pr auto row">
            <div class="w-50pr h-100pr row justify-center">
              <div class="w-75pr h-100pr">
                <div class="text text-dark">
                  We deliver the <b class="text-indigo-10">Software</b> you need no more less .
                </div>
                <div class="lorem q-mt-md text-grey-7">
                  It is a long established fact that a reader will be distracted by the readable content of a page when
                  looking at its layout readable English.
                </div>
                <div>
                  <q-btn style="padding: 13px 32px;" color="indigo-10" glossy rounded label="read more"
                    class="q-mt-md" />
                </div>
              </div>
            </div>
            <div class="w-50pr h-100pr">
              <q-img src="https://softer.netlify.app/images/1.jpg"> </q-img>
            </div>
          </div>
        </div>
      </q-img>
    </div>
  </div>
</template>
<script>
export default {
  name:'Home'

}
</script>
<style scoped>
.text {
  font-size: 38px;
  line-height: 1.2;
  max-width: 390px;
  font-weight: normal;
}

.lorem {
  max-width: 400px;
  line-height: 1.8;
  font-size: 15px;
}
</style>
