import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useUserIDStore = defineStore('userId', () => {
  const userID = ref<number|null>(null)
  

  function setUserID(id:number) {
    userID.value=id
  }


  return { userID,setUserID }
})

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


