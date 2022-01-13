<template>
  <div class="text-slate-100 w-full bg-slate-800 text-sm py-8 lg:py-6 relative z-50">
    <footer>
      <div
        class="
          container
          w-full
          flex flex-col
          space-y-2
          md:flex-row
          items-center
          justify-center
          md:justify-between
        "
      >
        <div
          class="
            w-full
            lg:w-1/3
            flex flex-col
            text-center
            lg:text-left
            text-2xl tracking-widest
          "
        >
          <p class="flex justify-center lg:justify-start uppercase">
            Sample Website
          </p>
        </div>
        <div class="w-full lg:w-1/3 flex flex-col text-center">
          <p class="text-xs lg:text-sm cursor-pointer mt-2">Privacy Policy</p>
          <p class="text-xs lg:text-sm cursor-pointer mt-0">
            Terms &amp; Conditions
          </p>
        </div>
        <div class="w-full lg:w-1/3 flex-col text-center lg:text-right">
          <p>
            Copyright © {{ new Date().getFullYear() }}
          </p>
          <p class="">
            Proudly Designed & Developed By
            <a href="https://www.ortigan.com/" target="__blank"
              ><span class="italic font-semibold">Ortigan</span></a
            >
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
<style>
</style>