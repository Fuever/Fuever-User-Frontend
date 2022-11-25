import { ref, computed } from 'vue'
import { defineStore } from 'pinia'




export const useLoginStateStore = defineStore('loginState', () => {
  const login = ref(false)
  

  function setLogin() {
    login.value=true
  }

  function setLoginOut() {
    login.value=false
  }

  return { login,setLogin,setLoginOut }
})


