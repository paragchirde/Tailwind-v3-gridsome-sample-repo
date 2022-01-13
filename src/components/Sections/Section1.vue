<template>
  <div class="relative">
  
    <div class="px-4 lg:container py-12 lg:py-24 relative">
      <div
        class="
          p-6
          lg:p-10
          rounded-lg
          w-full
          text-center
        "
      >
        <p class="text-base lg:text-4xl font-bold text-red-800">
          The Future of Web Dev is here, Code like never before..
        </p>
      </div>
      <div
        class="
          mt-12
          w-full
          flex flex-col
          items-center
          justify-center lg:justify-start
          text-center 
          text-trueGray-100
        "
      >
        <XyzTransition appear-visible>
          <div xyz="fade down ease-in-out-back">
            <p class="text-2xl lg:text-4xl font-bold">
              Why there is a need for change?
            </p>
            <p class="text-center text-lg font-light">
              A solution to Next generation learning
            </p>
          </div>
        </XyzTransition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>

</style>
