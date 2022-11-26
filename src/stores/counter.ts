import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoginStateStore = defineStore('loginState', () => {
  const login = ref(false)
  

  function setLogin() {
    login.value=true
  }

  function setLoginOut() {
    login.value=false
  }

  const userID = ref<number|null>(null)
  

  function setUserID(id:number|null) {
    userID.value=id
  }

  return { login,setLogin,setLoginOut, userID,setUserID  }
})


