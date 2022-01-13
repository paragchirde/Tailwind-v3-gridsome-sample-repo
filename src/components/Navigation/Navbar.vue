<template>
  <div>
    <transition name="fade">
      <nav
        class="fixed top-0 w-full mb-6 z-10"
        id="mainNav"
        style="transition-duration: 0.3s; z-index: 9999999"
      >
        <div
          class="h-16 bg-slate-800 text-slate-100"
          style="transition: ease all 0.4s"
        ></div>
        <div class="bg-transparent top-0 absolute w-full z-40">
          <div
            class="
              px-4
              md:container
              flex flex-row
              justify-between
              items-center
              h-16
            "
          >
            <div v-scroll-to="'#home'">
              <router-link to="/" class="flex flex-row items-center text-slate-50 text-lg tracking-wider">
                <div class=" uppercase text-slate-50">
                    <!--  -->
                    Sample Site
                </div>
              </router-link>
            </div>
            <div class="w-full flex flex-row justify-end items-center">
              <div class="hidden lg:block ml-4">
                <div
                  class="flex items-center font-light text-gray-300"
                  style="transition: ease all 0.2s"
                >
                  <router-link
                    exact-active-class="text-gray-100 font-medium "
                    to="/"
                    class="ml-8 hover:font-semibold hover:text-gray-100 w-12"
                    ><p>Home</p></router-link
                  >
                </div>
              </div>
            </div>
            <!-- Toggler -->
            <div class="lg:hidden">
              <button
                type="button"
                name="nav-button"
                class="block text-gray-500 hover: focus: focus:outline-none"
              >
                <svg
                  @click="openNav()"
                  class="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  v-if="!isOpen"
                >
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                </svg>
                <svg
                  @click="closeNav()"
                  class="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  v-if="isOpen"
                >
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            :class="isOpen ? 'block' : 'hidden'"
            class="bg-dark -mt-16 flex justify-center h-screen"
          >
            <transition :duration="{ enter: 800, leave: 800 }" name="fade">
              <div
                class="flex flex-col justify-center items-center"
                v-show="showItems"
                @click="closeNav()"
              >
                <router-link
                  exact-active-class="text-indigo-400"
                  to="/"
                  class="
                    px-2
                    py-1
                    text-gray-300 text-base
                    tracking-wider
                    rounded
                    navItem
                  "
                  style="text-transform: uppercase"
                  >Home</router-link
                >
              </div>
            </transition>
          </div>
        </div>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      showItems: false,
      scrollPx: "",
      logoColor: "#f8fafc"
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (process.isClient) {
        this.scrollPx = window.scrollY;
      }
    });
  },
  methods: {
    hideNavOnScrollFunc(){
      if(this.$route.path == '/'){
        if(this.scrollPx > 100){
          return true
        } else {
          return false
        }
      } else {
        return true
      }
    },
    openNav() {
      this.isOpen = true;
      this.showItems = true;
      document.getElementById("mainNav").style.background = "#fff";
    },
    closeNav() {
      this.showItems = false;
      this.isOpen = false;
      document.getElementById("mainNav").style.background = "";
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 100) {
        document.getElementById("mainNav").style.background = "#1a202c";
        document.getElementById("mainNav").style.height = "70px";
      } else {
        document.getElementById("mainNav").style.background = "";
      }
    },
  },
};
</script>
<style scoped>
*{
  transition: all 0.3s ease-in-out;
}
.navBg {
  backdrop-filter: saturate(1.5) blur(20px);
  background-color: rgba(35, 35, 35, 0.25);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@-moz-document url-prefix() {
  .navBg {
    background-color: rgba(35, 35, 35, 0.25);
    backdrop-filter: blur(25px);
    backdrop-filter: saturate(150%);
  }
}
</style>