import { useEffect } from "react";
import axios from "axios";

export interface DataProps {
  id: number;
  name: string;
  team_id: number;
}

function useGetData(
  dataAPI: string,
  setData: (value: React.SetStateAction<DataProps[]>) => void
) {
  useEffect(() => {
    const getDataFromServer = async function () {
      const getData = await axios.get(dataAPI);
      const response = await getData.data;
      setData(response.data);
    };
    getDataFromServer();
  }, [dataAPI, setData]);
}

export default useGetData;
