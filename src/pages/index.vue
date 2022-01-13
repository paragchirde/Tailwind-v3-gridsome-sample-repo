<template>
  <div id="scroll-container">
      <MainLayout class="">
      <section class="section" id="Section1">
        <Section1/>
      </section>
      <section class="section" id="Section2">
        <Section2/>
      </section>
      </MainLayout>
  </div>
</template>
<script>
import MainLayout from '../layouts/Default'
import Section1 from '~/components/Sections/Section1'
import Section2 from '~/components/Sections/Section2'
export default {
  components:{
    MainLayout,
    Section1,
    Section2
  },
}
</script>