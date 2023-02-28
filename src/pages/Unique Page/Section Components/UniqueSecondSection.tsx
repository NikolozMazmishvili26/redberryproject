import styled from "styled-components";

// import interfaces
import { LaptopDataProps } from "../Unique";

// import styled components
import {
  ItemsListContainer,
  ItemsListResult,
  SectionContainer,
} from "./UniqueFirstSection";

// inteface

interface UniqueSecondSectionProps {
  laptop: LaptopDataProps | null;
}

function UniqueSecondSection({ laptop }: UniqueSecondSectionProps) {
  return (
    <SectionContainer>
      <SecondSection>
        <SectionWrapper>
          <LeftSide>
            <ul>
              <ItemsListContainer>
                {/*  */}
                <ItemsLeftBox>
                  <ItemsLeftList>ლეპტოპის სახელი:</ItemsLeftList>
                  <ItemsListResult>{laptop?.name}</ItemsListResult>
                </ItemsLeftBox>
                {/*  */}

                <ItemsLeftBox>
                  <ItemsLeftList>ლეპტოპის ბრენდი:</ItemsLeftList>
                  <ItemsListResult>{laptop?.brand_id}</ItemsListResult>
                </ItemsLeftBox>
                {/*  */}
                <ItemsLeftBox>
                  <ItemsLeftList>RAM:</ItemsLeftList>
                  <ItemsListResult>{laptop?.ram}</ItemsListResult>
                </ItemsLeftBox>
                {/*  */}
                <ItemsLeftBox>
                  <ItemsLeftList>მეხსიერების ტიპი:</ItemsLeftList>
                  <ItemsListResult>{laptop?.hard_drive_type}</ItemsListResult>
                </ItemsLeftBox>
              </ItemsListContainer>
            </ul>
          </LeftSide>
          {/* right side */}
          <RightSide>
            <ul>
              <ItemsListContainer>
                {/*  */}
                <ItemsRightBox>
                  <ItemsRightList>CPU:</ItemsRightList>
                  <ItemsListResult>{laptop?.cpu.name}</ItemsListResult>
                </ItemsRightBox>
                {/*  */}
                <ItemsRightBox>
                  <ItemsRightList>CPU-ს ბირთვი:</ItemsRightList>
                  <ItemsListResult>{laptop?.cpu.cores}</ItemsListResult>
                </ItemsRightBox>
                {/*  */}
                <ItemsRightBox>
                  <ItemsRightList>CPU-ს ნაკადი:</ItemsRightList>
                  <ItemsListResult>{laptop?.cpu.threads}</ItemsListResult>
                </ItemsRightBox>
                {/*  */}
              </ItemsListContainer>
            </ul>
          </RightSide>
        </SectionWrapper>
      </SecondSection>
    </SectionContainer>
  );
}

export default UniqueSecondSection;

const SecondSection = styled.div`
  width: 100%;
  padding: 22px 16px 0px 16px;

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #a5a5a5;
    display: block;
    margin-top: 37px;
  }

  @media screen and (min-width: 1180px) {
    padding: 54px 0px 0px 0px;

    &::after {
      margin-top: 23px;
    }
  }
`;

const SectionWrapper = styled.div`
  min-height: 175px;

  @media screen and (min-width: 1180px) {
    display: grid;
    grid-template-columns: 577px 1fr;
    column-gap: 68px;
    align-items: flex-start;
  }
`;

const LeftSide = styled.div`
  @media screen and (min-width: 1180px) {
    min-height: 243px;
  }
`;

const ItemsLeftBox = styled.div`
  display: flex;
  gap: 35px;

  @media screen and (min-width: 1180px) {
    gap: 88px;
  }
`;

const ItemsLeftList = styled.li`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 178%;
  color: var(--card-text-color);
  max-width: 152px;
  width: 100%;

  @media screen and (min-width: 1180px) {
    font-size: 22px;
    line-height: 248%;
    max-width: 212px;
  }
`;

// right side styles

const RightSide = styled.div``;

const ItemsRightBox = styled.div`
  display: flex;
  gap: 35px;
  @media screen and (min-width: 1180px) {
    gap: 67px;
  }
`;

const ItemsRightList = styled(ItemsLeftList)`
  @media screen and (min-width: 1180px) {
    font-size: 22px;
    line-height: 248%;
    max-width: 164px;
  }
`;
