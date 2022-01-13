<template>
  <div class="relative bg-slate-200">
    <div class="">
      <div class="">
        <div
          class="
            px-4
            lg:container
            py-12
            lg:py-24
            flex flex-col
            items-center
            justify-center
            text-center
            pt-6
            relative
          "
        >
          <div
            class="
              w-full
              flex flex-col
              items-center
              justify-start
              text-slate-800
            "
          >
              <div>
                <p class="text-2xl lg:text-4xl">
                  Some Statistics 
                </p>
              </div>
          </div>
          <div
            class="
              mt-8
              text-slate-800
              bg-gray-200
              py-12
              rounded-xl
              shadow-xl shadow-gary-300/30
            "
          >
            <!--  -->
            <p class="text-base lg:text-2xl text-center">
              An study conducted on 3000 developers revealed
            </p>
            <div class="relative mt-4">
              <div class="px-4 lg:px-16">
                <div
                  class="
                    relative
                    grid grid-flow-row grid-cols-2
                    lg:grid-cols-4
                    gap-2
                    lg:gap-4
                    z-50
                  "
                >
                  <span v-for="(stat, index) in stats1" :key="index">
                    <div
                      class="
                        flex flex-col
                        justify-between
                        text-center text-slate-100
                        h-full
                        bg-slate-800
                        p-3
                        lg:p-4
                        rounded
                      "
                    >
                      <p class="text-base lg:text-2xl">
                        {{ stat.title }}
                      </p>
                      <p
                        class="text-xs lg:text-base font-light mt-4 capitalize"
                      >
                        {{ stat.desc }}
                      </p>
                      <p class="text-2xl lg:text-4xl font-bold mt-4">
                        {{ stat.stat
                        }}%
                      </p>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <!--  -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stats1: [
        {
          id: 1,
          title: "Sample Study",
          desc: "Some sample verdict given by a superb developer",
          stat: "100",
        },
        {
          id: 2,
          title: "Sample Study",
          desc: "Some sample verdict given by a superb developer",
          stat: "99",
        },
        {
          id: 3,
          title: "Sample Study",
          desc: "Some sample verdict given by a superb developer",
          stat: "99",
        },
        {
          id: 4,
          title: "Sample Study",
          desc: "Some sample verdict given by a superb developer",
          stat: "98",
        },
      ],
    
    };
  },
};
</script>
<style>
</style>
