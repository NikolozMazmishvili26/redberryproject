import { useState } from "react";
import styled from "styled-components";

// import api request
import useGetData, {
  DataProps,
} from "../../../apiRequests/getRequest/useGetData";

// interface
import { LaptopDataProps, UserDataProps } from "../Unique";

interface UniqueFirstSectionProps {
  laptop: LaptopDataProps | null;
  user: UserDataProps | null;
}

// api links

const teamAPI = "https://pcfy.redberryinternship.ge/api/teams";
const positionAPI = "https://pcfy.redberryinternship.ge/api/positions";

function UniqueFirstSection({ laptop, user }: UniqueFirstSectionProps) {
  const [teamValue, setTeamValue] = useState<DataProps[]>([]);
  const [positionValue, setPositionValue] = useState<DataProps[]>([]);
  useGetData(teamAPI, setTeamValue);
  useGetData(positionAPI, setPositionValue);

  const team = teamValue.filter((team) => team.id === user?.team_id);
  const position = positionValue.filter(
    (position) => position.id === user?.position_id
  );

  // phone number converter

  const phoneNumber = user?.phone_number;
  const formattedPhoneNumber = phoneNumber?.replace(
    /^(\+\d{3})(\d{3})(\d{2})(\d{2})(\d{2})$/,
    "$1 $2 $3 $4 $5"
  );

  return (
    <SectionContainer>
      <FirstSection>
        <SectionWrapper>
          <LeftSide>
            <LaptopImage
              src={`https://pcfy.redberryinternship.ge/` + laptop?.image}
            />
          </LeftSide>
          <RightSide>
            <Items>
              {/*  */}
              <ItemsListContainer>
                {/*  */}
                <ItemsBox>
                  <ItemsList>სახელი:</ItemsList>
                  <ItemsListResult>
                    {user?.name + " " + user?.surname}
                  </ItemsListResult>
                </ItemsBox>
                {/*  */}

                <ItemsBox>
                  <ItemsList>თიმი:</ItemsList>
                  <ItemsListResult>{team[0]?.name}</ItemsListResult>
                </ItemsBox>

                {/*  */}

                <ItemsBox>
                  <ItemsList>პოზიცია:</ItemsList>
                  <ItemsListResult>{position[0]?.name}</ItemsListResult>
                </ItemsBox>

                {/*  */}

                <ItemsBox>
                  <ItemsList>მეილი:</ItemsList>
                  <ItemsListResult>{user?.email}</ItemsListResult>
                </ItemsBox>

                {/*  */}

                <ItemsBox>
                  <ItemsList>ტელ.ნომერი:</ItemsList>
                  <ItemsListResult>{formattedPhoneNumber}</ItemsListResult>
                </ItemsBox>
                {/*  */}
              </ItemsListContainer>
              {/*  */}
            </Items>
          </RightSide>
        </SectionWrapper>
      </FirstSection>
    </SectionContainer>
  );
}

export default UniqueFirstSection;

export const SectionContainer = styled.div`
  max-width: 1178px;
  width: 100%;
`;

const FirstSection = styled.section`
  width: 100%;
  padding: 33px 16px 0px 16px;

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #a5a5a5;
    display: block;
    margin-top: 13px;
  }

  @media screen and (min-width: 1180px) {
    margin-top: 84px;
    &::after {
      margin-top: 84px;
    }
  }

  @media screen and (min-width: 1180px) {
    padding: 0px;
  }
`;

export const SectionWrapper = styled.div`
  /* @media screen and (min-width: 890px) {
    display: grid;
    place-content: center;
  } */

  @media screen and (min-width: 1180px) {
    display: grid;
    grid-template-columns: 577px 1fr;
    column-gap: 68px;
    align-items: center;
  }
`;

// left side styles

const LeftSide = styled.div``;

const LaptopImage = styled.img`
  max-width: 577px;
  width: 100%;
  max-height: 342px;
  height: auto;
  object-fit: cover;

  @media (max-width: 600px) {
    height: calc(100vw * 191 / 390);
  }
`;

// right side styles

const RightSide = styled.div`
  margin-top: 29px;
  min-height: 150px;

  @media screen and (min-width: 1180px) {
    margin-top: 0px;
  }
`;

const Items = styled.ul``;

export const ItemsListContainer = styled.div`
  width: 100%;
`;

export const ItemsBox = styled.div`
  display: flex;
  gap: 61px;
`;

export const ItemsList = styled.li`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 178%;
  color: var(--card-text-color);
  max-width: 126px;
  width: 100%;

  @media screen and (min-width: 1180px) {
    font-size: 22px;
    line-height: 248%;
    max-width: 151px;
  }
`;

export const ItemsListResult = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 178%;
  color: #797979;
  width: 100%;
  @media screen and (min-width: 1180px) {
    font-size: 22px;
    line-height: 248%;
  }
`;
