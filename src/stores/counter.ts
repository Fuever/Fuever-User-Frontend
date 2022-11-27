import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { UserDetailed } from '@/server/models'

export const useLoginStateStore = defineStore('loginState', () => {
  const login = ref(false)
  const currentUser = ref<UserDetailed|null>()

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
  function setCurrentUser (user: UserDetailed) {
    currentUser.value=user
  }
  function clearCurrentUser() {
    currentUser.value=null
  }

  return { login,setLogin,setLoginOut, userID,setUserID,setCurrentUser,currentUser,clearCurrentUser  }
})


