import { Link } from "react-router-dom";
import styled from "styled-components";

// interfaces
import { ItemsInterface } from "./List";
interface ListCardProps {
  item: ItemsInterface;
}

function ListCard({ item }: ListCardProps) {
  const { laptop, user } = item;

  return (
    <Card>
      <CardLeftSide>
        <CardImage src={"https://pcfy.redberryinternship.ge/" + laptop.image} />
      </CardLeftSide>
      <CardRightSide>
        <UserName>{user.name + " " + user.surname}</UserName>
        <ComputerName>{laptop.name}</ComputerName>
        <Link to={`laptop/${laptop.id}`}>
          <ShowMoreButton>მეტის ნახვა</ShowMoreButton>
        </Link>
      </CardRightSide>
    </Card>
  );
}

export default ListCard;

const Card = styled.div`
  width: 100%;
  background-color: var(--card-bg-color);
  border-radius: 10px;
  display: flex;
  border: 1px solid #aed1ea;

  @media screen and (min-width: 890px) {
    min-height: 205px;
  }
`;

// card leftside styles

const CardLeftSide = styled.div`
  padding: 6px 16px 6px 7px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 890px) {
    padding: 14px 28px 13px 14px;
  }
`;

const CardImage = styled.img`
  width: 164px;
  height: 109px;
  object-fit: cover;
  border-radius: 6px;

  @media screen and (min-width: 890px) {
    width: 266px;
    height: 178px;
    border-radius: 10px;
  }
`;

// card rightside styles

const CardRightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  padding-top: 19px;
  padding-bottom: 22px;

  @media screen and (min-width: 890px) {
    padding-top: 45px;
    padding-bottom: 39px;
  }
`;

const UserName = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: var(--card-text-color);
  word-wrap: break-word;
  max-width: 100%;

  @media screen and (min-width: 890px) {
    font-size: 18px;
    line-height: 21px;
  }
`;

const ComputerName = styled.p`
  margin-top: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: var(--card-text-color);
  word-wrap: break-word;
  max-width: 100%;

  @media screen and (min-width: 890px) {
    margin-top: 18px;
  }
`;

const ShowMoreButton = styled.button`
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: var(--blue-color);
  background-color: transparent;
  margin-top: 11px;
  text-decoration-line: underline;
  cursor: pointer;

  @media screen and (min-width: 890px) {
    font-size: 16px;
    line-height: 21px;
    margin-top: 40px;
  }
`;
