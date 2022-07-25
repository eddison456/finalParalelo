import axios from "axios";

export default async function get({ url, data_pos }) {
  try {
    console.log(url + "<<<<")
    const { data } = await axios.get(url, { params: data_pos });
    return { data };
  } catch (error) {
    return { data: null };
  }
}
