import axios from "axios";

export default async function post({ url, data_pos }) {
  try {
    const { data } = await axios.post(url, data_pos);
    return { data };
  } catch (error) {
    return { data: null };
  }
}