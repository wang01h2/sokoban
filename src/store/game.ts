import {defineStore} from "pinia";
import {ref} from "vue";
import JSConfetti from "js-confetti"

export const useGameStore = defineStore('game', () => {
  const message = ref('')
  const confetti = new JSConfetti()

  function sendMessage(msg: string) {
    message.value = msg
  }


  function showConfetti() {
    confetti.addConfetti()
  }

  return {sendMessage, message, showConfetti}
})
