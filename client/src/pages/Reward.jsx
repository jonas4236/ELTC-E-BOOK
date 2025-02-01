import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const Reward = () => {
  const [coin, setCoin] = useState(parseInt(localStorage.getItem("coin")) || 0);
  const [claimed, setClaimed] = useState(false);

  useEffect(() => {
    checkClaimStatus();
  }, []);

  const checkClaimStatus = () => {
    const today = new Date().toISOString().split("T")[0];
    const lastClaimDate = localStorage.getItem("lastClaimDate");

    if (lastClaimDate === today) {
      setClaimed(true);
    } else {
      setClaimed(false);
    }
  };

  const claimReward = async () => {
    try {
      const today = new Date().toISOString().split("T")[0];
      const userId = localStorage.getItem("id");

      if (!userId) {
        Swal.fire("Error", "User ID not found!", "error");
        return;
      }

      const newCoinValue = coin + 10; // Add 10 coins

      // Send the request to the backend
      const { data } = await axios.post("http://localhost:3000/book/reward", {
        userId,
        coin: newCoinValue,
      });

      console.log(data.message);
      Swal.fire("Successfully", "You have claimed 10 coins!", "success");

      // Update localStorage
      localStorage.setItem("coin", newCoinValue.toString());
      localStorage.setItem("lastClaimDate", today);

      // Update state
      setCoin(newCoinValue);
      setClaimed(true);
    } catch (error) {
      console.error("Failed to claim reward:", error);
      Swal.fire("Error", "Something went wrong while claiming your reward.", "error");
    }
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <div className="my-8 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold text-yellow-500">
            เช็คอินเพื่อรับรางวัล Coin 🪙
          </h1>
          <p className="text-2xl text-yellow-500 font-semibold mt-2">
            จำนวนเหรียญปัจจุบัน: {coin}
          </p>
          <img
            className="rounded-md w-[800px] bg-cover"
            src="https://res.cloudinary.com/jonasdev/image/upload/v1737856980/efk9n5vhhukmnriyrooh.png"
            alt=""
          />
          {claimed ? (
            <button className="px-6 py-2 mt-4 rounded-md border-2 border-transparent bg-gray-400 text-white font-semibold">
              คุณรับเหรียญแล้ว
            </button>
          ) : (
            <button
              onClick={claimReward}
              className="px-6 py-2 mt-4 rounded-md border-2 border-transparent bg-yellow-500 text-white font-semibold hover:border-yellow-500 hover:border-2 hover:bg-transparent hover:text-yellow-500 transition-all duration-150 cursor-pointer"
            >
              รับเหรียญ +10
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reward;
