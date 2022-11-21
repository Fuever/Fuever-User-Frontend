import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const enum Names{
  Login = 'judgeLogin',
  Font = 'fontsizeAdjust'
} 


export const useLoginStateStore = defineStore(Names.Login, () => {
  const login = ref(false)
  
  function changeLoginState() {
    login.value=!login.value
  }

  return { login,changeLoginState }
})

export const useFontsizeStore = defineStore(Names.Font, () => {
  const level = ref(1)
  
  function toLevel(new_level:number) {
    level.value=new_level
  }

  return { level,toLevel }
})
