<template>
  <div>
    <CompHome/>
    <CompAbout/>
    <CompService/>
    <CompFeatures/>
    <CompWorks/>
    <CompContact/>
  </div>
</template>
<script>
import increment from '../mixins/increment';

import CompHome from 'src/components/main_page/CompHome';
import CompAbout from 'src/components/main_page/CompAbout';
import CompService from 'src/components/main_page/CompService';
import CompFeatures from 'src/components/main_page/CompFeatures';
import CompWorks from 'src/components/main_page/CompWorks';
import CompContact from 'src/components/main_page/CompContact';
export default {
  name:'indexPage',
  components: {
    CompHome,
    CompAbout,
    CompService,
    CompFeatures,
    CompWorks,
    CompContact
  },
  setup(){
    const {counter, incrementCount}  = increment()

    return{
      counter,
      incrementCount
    }
  }
  // mixins:[
  //   increment
  // ]
}
</script>


<style>

</style>