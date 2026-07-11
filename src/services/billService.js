import axios from "axios";

const API = "https://jwt-auth-eight-neon.vercel.app";

export const getBills = async () => {
  const token = localStorage.getItem("token");

  const response = await axios.get(`${API}/bills`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
