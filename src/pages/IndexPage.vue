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
import CompHome from 'src/components/forMainPage/CompHome';
import CompAbout from 'src/components/forMainPage/CompAbout';
import CompService from 'src/components/forMainPage/CompService';
import CompFeatures from 'src/components/forMainPage/CompFeatures';
import CompWorks from 'src/components/forMainPage/CompWorks';
import CompContact from 'src/components/forMainPage/CompContact';
export default {
  name:'indexPage',
  components: {
    CompHome,
    CompAbout,
    CompService,
    CompFeatures,
    CompWorks,
    CompContact
}
}
</script>


<style>

</style>
