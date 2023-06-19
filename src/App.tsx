import { useState } from "react";
import { CardListing } from "./components/CardListing";
import desktopBackground from "./images/bg-header-desktop.svg";
import mobileBackground from "./images/bg-header-mobile.svg";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Images from "./images";

const GlobalStyles = createGlobalStyle`
html {
  font-size: 62.5%;
  font-family: 'League Spartan', sans-serif;

}

body {
  margin:0;
  padding:0;
  box-sizing: border-box;
  background: #f0fafb;

}

`;
const Background = styled.div`
  background: hsl(180, 29%, 50%);
  background-image: url(${mobileBackground});
  height: 15.6rem;
  position: relative;
  padding: 0 2rem;

  @media screen and (min-width: 1000px) {
    background-image: url(${desktopBackground});
    // background-position: center;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem 2rem;
  align-items: center;

  @media screen and (min-width: 1000px) {
    gap: 1rem;
  }
`;

const Filter = styled.div`
  padding: 1rem 2rem;
  border-radius: 5px;
  background: #fff;
  max-width: 1200px;
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateY(12rem);
`;

const FilterBadgeFlex = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

const ClearBtn = styled.p`
  font-size: 1.8rem;
  cursor: pointer;
  padding: 0 1.5rem;
  font-weight: 700;
  color: #788180;

  &:hover {
    color: hsl(180, 29%, 50%);
    text-decoration: underline;
  }
`;

const FilterBadge = styled.div`
  border-radius: 5px;
  background: hsl(180, 31%, 95%);
  cursor: pointer;
  overflow: hidden;
  display: flex;
  gap: 0 0.3rem;
`;

const FilterBadgeLabel = styled.p`
  padding: 0.3rem;
  border-radius: 5px;
  color: hsl(180, 29%, 50%);
  font-size: 1.7rem;
  margin: 0;
  font-weight: 700;
  align-self: center;

  @media screen and (min-width: 1000px) {
    font-size: 1.9rem;
    padding: 0.6rem 0.7rem;
  }
`;

const RemoveBtn = styled.img`
  cursor: pointer;
  align-self: center;
  padding: 0.5rem 0.7rem;
  background: hsl(180, 29%, 50%);

  &:hover {
    background: hsl(180, 14%, 20%);
  }

  @media screen and (min-width: 1000px) {
    padding: 1rem;
  }
`;

const CardListingWrapper = styled.div<{ badgeCount: number }>`
  margin-top: ${(p) => (p.badgeCount > 0 ? "6rem" : "0")};
  width: 100%;
`;

function App() {
  const ps = Images.photosnap.toString();
  const manage = Images.manage.toString();
  const acount = Images.account.toString();
  const myHome = Images.myHome.toString();
  const ls = Images.loopStudios.toString();
  const faceIt = Images.faceIt.toString();
  const shortly = Images.shortly.toString();
  const insure = Images.insure.toString();
  const eyecam = Images.eyecam.toString();
  const airFilter = Images.theAirFilter.toString();

  const [filter, setFilter] = useState<any[]>([]);

  const listing = [
    {
      id: 1,
      image: ps,
      company: "Photosnap",
      position: "Senior Frontend Developer",
      cardInfo: ["1d ago", "Full Time", "USA only"],
      skill: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      image: manage,
      company: "Manage",
      position: "FullstackDeveloper",
      cardInfo: ["1d ago", "Part Time", "Remote"],
      skill: ["Fullstack", "Midweight", "Python", "React"],
    },
    {
      id: 3,
      image: acount,
      company: "Account",
      position: "Junior Frontend Developer",
      cardInfo: ["2d ago", "Part Time", "USA only"],
      skill: ["Frontend", "Junior", "React", "Sass", "JavaScript"],
    },
    {
      id: 4,
      image: myHome,
      company: "MyHome",
      position: "Junior Frontend Developer",
      cardInfo: ["5d ago", "Contract", "USA only"],
      skill: ["Frontend", "Junior", "CSS", "JavaScript"],
    },
    {
      id: 5,
      image: ls,
      company: "Loop Studios",
      position: "Software Engineer",
      cardInfo: ["1w ago", "Full Time", "Worldwide"],
      skill: ["Fullstack", "Midweight", "JavaScript", "Sass", "Ruby"],
    },
    {
      id: 6,
      image: faceIt,
      company: "FaceIt",
      position: "Junior Backend Developer",
      cardInfo: ["2w ago", "Full Time", "UK only"],
      skill: ["Backend", "Junior", "Ruby", "RoR"],
    },
    {
      id: 7,
      image: shortly,
      company: "Shortly",
      position: "Junior Developer",
      cardInfo: ["2w ago", "Full Time", "Worldwide"],
      skill: ["Frontend", "Junior", "HTML", "Sass", "JavaScript"],
    },
    {
      id: 8,
      image: insure,
      company: "Insure",
      position: "Junior Frontend Developer",
      cardInfo: ["2w ago", "Full Time", "USA only"],
      skill: ["Frontend", "Junior", "Vue", "JavaScript", "Sass"],
    },
    {
      id: 9,
      image: eyecam,
      company: "Eyecam Co.",
      position: "Full Stack Engineer",
      cardInfo: ["3w ago", "Full Time", "Worldwide"],
      skill: ["Fullstack", "Midweight", "JavaScript", "Django", "Python"],
    },
    {
      id: 10,
      image: airFilter,
      company: "The Air Filter Company",
      position: "Front-end Dev",
      cardInfo: ["1mo ago", "Part Time", "Worldwide"],
      skill: ["Frontend", "Junior", "React", "Sass", "JavaScript"],
    },
  ];

  return (
    <>
      <GlobalStyles />
      <Background>
        {filter.length !== 0 && (
          <Filter>
            <FilterBadgeFlex>
              {filter.map(
                (badge) =>
                  badge !== null && (
                    <FilterBadge key={badge}>
                      <FilterBadgeLabel>{badge}</FilterBadgeLabel>
                      <RemoveBtn
                        id={badge}
                        onClick={(badge) =>
                          setFilter(
                            filter.filter(
                              (item) =>
                                (badge.target as HTMLImageElement).id !== item
                            )
                          )
                        }
                        src={Images.remove}
                      ></RemoveBtn>
                    </FilterBadge>
                  )
              )}
            </FilterBadgeFlex>
            <ClearBtn onClick={() => setFilter([])}>Clear</ClearBtn>
          </Filter>
        )}
      </Background>
      {console.log(filter.join(", "))}
      <Body>
        <CardListingWrapper badgeCount={filter.length}>
          <CardListing
            onClick={(e) => {
              if (filter.includes(e)) {
                setFilter(filter.filter((item) => item !== e));
              } else {
                setFilter([...filter, e]);
              }
            }}
            listing={
              filter.length !== 0
                ? listing.filter((job) =>
                    filter.every((skill) => job.skill.includes(skill))
                  )
                : listing
            }
          />
        </CardListingWrapper>
      </Body>
    </>
  );
}

export default App;
