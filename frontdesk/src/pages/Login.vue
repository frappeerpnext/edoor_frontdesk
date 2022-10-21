<template>
    <section class="h-screen">
    <div class="h-full text-gray-800">
      <div
        class="flex justify-center items-center flex-wrap h-full g-6"
      >
        <div
          class="grow-0 shrink-1 h-full md:shrink-0 basis-auto xl:w-6/12 lg:w-7/12 mb-12 md:mb-0 bg-no-repeat bg-center bg-cover"
          style="background-image: url(/assets/erpnext/images/artwork-login.png);"
        >
        </div>
        <div class="xl:w-6/12 lg:w-5/12 md:w-8/12 flex justify-center">
          <form class="px-8 w-full w-[460px]" @submit.prevent="login">
            <!-- Email input -->
            <div class="mb-5">
              <input
                required
                v-model="email"
                type="text"
                class="form-control block w-full px-4 py-2 font-normal text-sm text-gray-700 bg-neutral-100 bg-clip-padding rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:outline-none"
                placeholder="Enter your username"
              />
            </div>
  
            <!-- Password input -->
            <div class="mb-5">
              <input
                required
                v-model="password"
                type="password"
                class="form-control block w-full px-4 py-2 font-normal text-sm text-gray-700 bg-neutral-100 bg-clip-padding rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:outline-none"
                placeholder="•••••"
              />
            </div>
            
            <div class="text-right">
              <button
                type="submit"
                class="w-full px-7 py-2 bg-blue-500 text-white font-medium text-sm leading-snug rounded-md shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
    <!-- <div class="min-h-screen bg-white flex">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <form @submit.prevent="login" class="space-y-6">
          <label for="email"> Username: </label>
          <input type="text" v-model="email" />
          <br />
          <label for="password"> Password: </label>
          <input type="password" v-model="password" />
  
          <button
            class="bg-blue-500 block text-white p-2 hover:bg-blue-700"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    </div> -->
  </template>
  <script>
  export default {
    data() {
      return {
        email: null,
        password: null,
      };
    },
    // methods: {
    //   async login(){
    //     if(this.email && this.password){
    //       let res = await this.$call('login',{
    //         usr: this.email,
    //         pwd: this.password,
    //       })
    //     }
    //   }
    // },
    inject: ["$auth"],
    // async mounted() {
    //   if (this.$route?.query?.route) {
    //     this.redirect_route = this.$route.query.route;
    //     this.$router.replace({ query: null });
    //   }
    // },
    methods: {
      async login() {
        if (this.email && this.password) {
          let res = await this.$auth.login(this.email, this.password);
          if (res) {
            //this.$router.push({ name: "Home" });
          }else {
            //alert("login fail");
          }
        }
      },
    },
  };
  </script>
  