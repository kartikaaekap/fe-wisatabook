// export const state = () => {
//   return {
//     isInit: false,
//   }
// }

// export const mutations = {
//   isInitTrue(state) {
//     state.isInit = true
//   },
//   isInitFalse(state) {
//     state.isInit = false
//   },
// }

export const actions = {
  useAPI(context, { method, url, data, key }) {
    return new Promise((resolve, reject) => {
      this.$axios[method](url, data)
        .then(({ data: response }) => resolve(response.data || response))
        .catch(
          ({
            response: {
              status: statusCode,
              data: { message },
            },
          }) => {
            reject(new Error({ statusCode, message }))
          }
        )
    })
  },
  getItems({ dispatch }, payload) {
    return dispatch('useAPI', {
      method: 'get',
      url: `https://wisatabook-default-rtdb.asia-southeast1.firebasedatabase.app/${payload}`,
    })
  },

  // get wisata-book profile
  getWisataBook({ dispatch }) {
    return dispatch('getItems', 'data.json')
  },
}
