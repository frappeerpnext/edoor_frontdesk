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
        <div class="xl:w-6/12 lg:w-5/12 md:w-8/12 sm:w-full flex justify-center">
          <form class="px-8 w-full" @submit.prevent="login" style="max-width: 460px">
            <!-- Email input -->
            <div class="mb-5">
              <Input :required="true" type="text" placeholder="Enter your username" v-model="email"/>
            </div>
            <!-- Password input -->
            <div class="mb-5">
              <Input :required="true" type="password" placeholder="•••••" v-model="password"/>
            </div>
            <Button type="primary" loadingText="Verifying..." :loading="isLogging" class="w-full">Login</Button>
          </form>
        </div>
      </div>
    </div>
  </section>
  </template>
  <script>
  export default {
    inject: ["$auth"],
    data() {
        return {
            email: null,
            password: null,
            isLogging: false
        };
    },
    async mounted() {
        if (this.$route?.query?.route) {
            this.redirect_route = this.$route.query.route;
            this.$router.replace({ query: null });
        }
    },
    methods: {
        async login() {
            this.isLogging = true;
            if (this.email && this.password) {
                let res = await this.$auth.login(this.email, this.password);
                if (res) {
                    this.isLogging = false;
                    this.$router.push({ name: "Home" });
                }
                else {
                    this.isLogging = false;
                    this.$toast({
                        title: "Login Failed",
                        text: "Invalid username or password.",
                        customIcon: "circle-fail",
                        appearance: "danger",
                    });
                }
            }
        },
    },
};
  </script>
  