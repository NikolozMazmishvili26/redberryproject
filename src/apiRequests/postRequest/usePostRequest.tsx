import axios from "axios";

interface PostData {
  name: string;
  surname: string;
  team_id: number;
  position_id: number;
  phone_number: string;
  email: string;
  token: string;
  laptop_name: string;
  laptop_image: File;
  laptop_brand_id: number;
  laptop_cpu: string;
  laptop_cpu_cores: number;
  laptop_cpu_threads: number;
  laptop_ram: number;
  laptop_hard_drive_type: string;
  laptop_state: string;
  laptop_price: number;
}

interface Headers {
  [key: string]: string;
}

function usePostRequest(api: string, data: PostData, headers: Headers) {
  return axios
    .post(api, data, headers)
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err));
}

export default usePostRequest;
