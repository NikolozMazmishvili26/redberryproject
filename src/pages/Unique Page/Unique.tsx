import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// import components
import Loading from "../../components/Loading Component/Loading";
import DataHeader from "../Recorded List Page/DataHeader";
import UniqueFirstSection from "./Section Components/UniqueFirstSection";
import UniqueSecondSection from "./Section Components/UniqueSecondSection";
import UniqueThirdSection from "./Section Components/UniqueThirdSection";

// token
const token = "3b75138a7edeb001d3bf978b804c82e9";

// interfaces

export interface LaptopDataProps {
  brand_id: number;
  cpu: {
    cores: number;
    name: string;
    threads: number;
  };
  hard_drive_type: string;
  image: string;
  name: string;
  price: number;
  purchase_date: string | null;
  ram: number;
  state: string;
}

export interface UserDataProps {
  email: string;
  name: string;
  phone_number: string;
  position_id: number;
  surname: string;
  team_id: number;
}

function Unique() {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [laptop, setLaptop] = useState<LaptopDataProps | null>(null);
  const [user, setUser] = useState<UserDataProps | null>(null);

  useEffect(() => {
    const getData = async function () {
      try {
        const response = await axios.get(
          `https://pcfy.redberryinternship.ge/api/laptop/${params.laptopId}?token=${token}`
        );
        const laptopData = response.data.data.laptop;
        const userData = response.data.data.user;
        setLaptop(laptopData);
        setUser(userData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <UniqueContainer>
      <DataHeader locationPathname={location.pathname} />
      <MainSectionContainer>
        <UniqueFirstSection laptop={laptop} user={user} />
        <UniqueSecondSection laptop={laptop} />
        <UniqueThirdSection laptop={laptop} />
      </MainSectionContainer>
    </UniqueContainer>
  );
}

export default Unique;

const UniqueContainer = styled.div`
  max-width: 1920px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  margin: auto;
  overflow: hidden;
`;

const MainSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  @media screen and (min-width: 1180px) {
    max-width: 1178px;
    width: 100%;
    height: 1107px;
  }
`;
