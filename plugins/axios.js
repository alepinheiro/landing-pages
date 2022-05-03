export default function ({ $axios, app, error: nuxtError }) {
    $axios.onError((error) => {
      console.log(error);
      return Promise.reject(error);
    });

    $axios.interceptors.response.use(
      (response) => {
        return response;
      },
      function (error) {
        // Do something with response error
        // if (error.response.status === 401) {
        //   console.log('unauthorized, logging out ...')
        //   auth.logout()
        //   router.replace('/auth/login')
        // }
        console.log(error);
        console.log("[plugin] Axios.error:", error.response?.data);
        return Promise.reject(error);
      }
    );
  }
