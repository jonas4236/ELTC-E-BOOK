import { create } from "zustand"
import axios from "axios"
import Swal from "sweetalert2"

const useRewardStore = create((set) => ({
  coin: parseInt(localStorage.getItem("coin")) || 0,
  lastClaimDate: null,
  claimed: false,

  claimReward: async () => {
    try {
      const today = new Date().toISOString().split("T")[0]
      const userId = parseInt(localStorage.getItem("id"))
      const currentCoin = parseInt(localStorage.getItem("coin"))
      const newCoinValue = currentCoin + 10

      const { data } = await axios.post("http://localhost:3000/book/reward", {
        userId,
        coin: newCoinValue,
      })

      console.log(data.message)
      Swal.fire("Successfully", "You have claimed 10 coins!", "success")

      localStorage.setItem("coin", newCoinValue.toString())

      set(() => ({
        coin: newCoinValue,
        lastClaimDate: today,
        claimed: true,
      }))
    } catch (error) {
      console.error("Failed to claim reward:", error)
      Swal.fire(
        "Error",
        "Something went wrong while claiming your reward.",
        "error"
      )
    }
  },

  checkClaimStatus: () => {
    const today = new Date().toISOString().split("T")[0]
    set((state) => ({
      claimed: state.lastClaimDate === today,
    }))
  },
}))

export default useRewardStore
