import styled from "styled-components";

// import interface
import { LaptopDataProps } from "../Unique";
// import styled components
import {
  ItemsListContainer,
  ItemsListResult,
  SectionContainer,
} from "./UniqueFirstSection";

interface UniqueThirdSectionProps {
  laptop: LaptopDataProps | null;
}

function UniqueThirdSection({ laptop }: UniqueThirdSectionProps) {
  if (laptop?.state === "used") {
    laptop.state = "მეორადი";
  } else if (laptop?.state === "new") {
    laptop.state = "ახალი";
  }

  // date converter

  const dateStr: string | null | undefined = laptop?.purchase_date;
  let formattedDate = "";
  if (dateStr) {
    const dateObj = new Date(dateStr);
    formattedDate = `${dateObj.getMonth().toString().padStart(2, "0")}/${dateObj
      .getDate()
      .toString()
      .padStart(2, "0")}/${dateObj.getFullYear()}`;
  }

  return (
    <SectionContainer>
      <ThirdSection>
        <SectionWrapper>
          <LeftSide>
            <ul>
              <ItemsListContainer>
                {/*  */}
                <ItemsLeftBox>
                  <ItemsLeftUniqueList />
                  <ItemsListResult>{laptop?.state}</ItemsListResult>
                </ItemsLeftBox>
                {/*  */}
                <ItemsLeftBox>
                  <ItemsLeftList>ლეპტოპის ფასი:</ItemsLeftList>
                  <ItemsListResult>{laptop?.price}</ItemsListResult>
                </ItemsLeftBox>
              </ItemsListContainer>
            </ul>
          </LeftSide>
          {laptop?.purchase_date && (
            <RightSide>
              <ul>
                <ItemsListContainer>
                  {/*  */}
                  <ItemsRightBox>
                    <ItemsRightList>შეძენის რიცხვი:</ItemsRightList>
                    <ItemsListResult>{formattedDate}</ItemsListResult>
                  </ItemsRightBox>
                  {/*  */}
                </ItemsListContainer>
              </ul>
            </RightSide>
          )}
        </SectionWrapper>
      </ThirdSection>
    </SectionContainer>
  );
}

export default UniqueThirdSection;

const ThirdSection = styled.section`
  width: 100%;
  padding: 22px 16px 41px 16px;

  @media screen and (min-width: 1180px) {
    padding: 54px 0px 91px 0px;
  }
`;

const SectionWrapper = styled.div`
  min-height: 75px;
  @media screen and (min-width: 1180px) {
    min-height: 135px;
    display: grid;
    grid-template-columns: 577px 1fr;
    column-gap: 68px;
    align-items: flex-start;
  }
`;

// left side styles

const LeftSide = styled.div`
  @media screen and (min-width: 1180px) {
    min-height: 135px;
  }
`;

const ItemsLeftBox = styled.div`
  display: flex;
  align-items: center;
  gap: 61px;
  @media screen and (min-width: 1180px) {
    gap: 19px;
  }
`;

const ItemsLeftList = styled.li`
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
    max-width: 281px;
  }
`;

const ItemsLeftUniqueList = styled(ItemsLeftList)`
  &::before {
    content: "მდგომარეობა:";
    display: block;
  }

  @media screen and (min-width: 1180px) {
    &::before {
      content: "ლეპტოპის მდგომარეობა:";
      display: block;
    }
  }
`;

// right side styles

const RightSide = styled.div``;

const ItemsRightBox = styled.div`
  display: flex;
  align-items: center;
  gap: 61px;
  @media screen and (min-width: 1180px) {
    gap: 51px;
  }
`;

const ItemsRightList = styled.li`
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
    max-width: 180px;
  }
`;
