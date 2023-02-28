import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

// import components
import DataHeader from "./DataHeader";
import ListCard from "./ListCard";
import Loading from "../../components/Loading Component/Loading";

// api link
const listAPI =
  "https://pcfy.redberryinternship.ge/api/laptops?token=3b75138a7edeb001d3bf978b804c82e9 ";

// data inteface

export interface ItemsInterface {
  laptop: {
    image: string;
    name: string;
    id: number;
  };
  user: {
    name: string;
    surname: string;
  };
}

function List() {
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<ItemsInterface[] | null>(null);

  useEffect(() => {
    const getData = async function () {
      try {
        const response = await axios.get(listAPI);
        const data = response.data;
        setItems(data.data);
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
    <ListContainer>
      <DataHeader locationPathname={location.pathname} />
      <ListCardContainer>
        {items?.map((item) => {
          return <ListCard key={item.laptop.id} item={item} />;
        })}
      </ListCardContainer>
    </ListContainer>
  );
}

export default List;

const ListContainer = styled.div`
  max-width: 1920px;
  width: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

// list card container

const ListCardContainer = styled.div`
  width: 100%;
  margin-top: 33px;
  padding: 0px 16px 51px 16px;
  display: grid;
  grid-template-columns: 100%;
  row-gap: 26px;

  @media screen and (min-width: 890px) {
    margin-top: 97px;
  }

  @media screen and (min-width: 1205px) {
    grid-template-columns: repeat(2, 563px);
    place-content: center;
    column-gap: 52px;
    row-gap: 55px;
    margin-top: 97px;
  }
`;
