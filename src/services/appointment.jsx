import api from "./api";
import axios from "axios";

export async function fetchAppointment(payload) {
  try {
    const res = await api.post("/admin/dang-ky-kham", payload);
    // console.log(res);
    return { ok: true, status: res.status, data: res.data, error: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status ?? 0;
      const data = error.response?.data;
      const message = data?.message || `Request failed with status ${status}!`;
      return {
        ok: false,
        status,
        data,
        error: message,
      };
    }
    // console.error("Unknown error: ", error);
    return { ok: false, status: 0, data: null, error: "Unknown error" };
  }
}
