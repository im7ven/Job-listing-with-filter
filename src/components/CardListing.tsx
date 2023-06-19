import styled from "styled-components";

const Card = styled.div<{ border?: string }>`
  border-radius: 0.5rem;
  box-shadow: 0 15px 15px 1px #d6ebec;
  padding: 2rem;
  max-width: 1200px;
  width: 80%;
  margin: 4rem auto 0;
  background: #fff;
  position: relative;
  border-left: ${(p) => p.border};

  @media screen and (min-width: 1000px) {
    display: flex;
    justify-content: space-between;
    padding: 2.5rem;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: -2.5rem;
  width: 5rem;

  @media screen and (min-width: 1000px) {
    position: static;
    width: 8.8rem;
    align-self: center;
  }
`;

const Company = styled.h3`
  color: hsl(180, 29%, 50%);
  font-size: 1.4rem;
  margin-right: 1.5rem;

  @media screen and (min-width: 1000px) {
    font-size: 1.9rem;
    margin: 0;
    align-self: center;
  }
`;

const Position = styled.h2`
  color: hsl(180, 14%, 20%);
  cursor: pointer;
  margin: 0;

  &:hover {
    color: hsl(180, 29%, 50%);
  }

  @media screen and (min-width: 1000px) {
    font-size: 2.2rem;
    margin-top: 1.5rem;
  }
`;

const Badge = styled.div<{ background: string }>`
  padding: 0.5rem 0.7rem 0.4rem;
  text-transform: uppercase;
  background: ${(p) => p.background};
  border-radius: 30px;
  color: #fff;
  font-weight: 700;
  display: inline;
  font-size: 1.2rem;
  align-self: center;

  @media screen and (min-width: 1000px) {
    font-size: 1.5rem;
    padding: 0.7rem 0.7rem 0.4rem;
  }
`;

const CompanyBadgeFlex = styled.div`
  display: flex;
  gap: 0.7rem;
  margin-top: 0.5rem;

  @media screen and (min-width: 1000px) {
    margin: 0;
    align-items: center;
  }
`;

const JobDetails = styled.p`
  color: #788180;
  font-size: 1.5rem;

  @media screen and (min-width: 1000px) {
    margin: 1rem 0 0 0;
    font-size: 1.8rem;
  }
`;

const Separator = styled.div`
  box-shadow: 0 0 0 0.2px #788180;
  margin-bottom: 3.5rem;

  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

const SkillBadges = styled.button`
  padding: 0.8rem;
  border-radius: 5px;
  color: hsl(180, 29%, 50%);
  background: hsl(180, 31%, 95%);

  font-size: 1.5rem;
  border: 0;
  outline: 0;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: hsl(180, 31%, 95%);
    background: hsl(180, 29%, 50%);
  }

  @media screen and (min-width: 1000px) {
    font-size: 1.6rem;
    padding: 0.8rem;
  }
`;

const SkillBadgeFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
  align-self: center;
`;

const DesktopFlexItem = styled.div`
  display: block;

  @media screen and (min-width: 1000px) {
    display: flex;
    gap: 0 2rem;
  }
`;

const FlexItem = styled.div`
  @media screen and (min-width: 1000px) {
    align-self: center;
  }
`;

interface Listing {
  id: number;
  image: string;
  company: string;
  position: string;
  cardInfo: string[];
  skill: string[];
}

interface Props {
  listing: Listing[];
  onClick: (badge: string) => void;
}

export const CardListing = ({ listing, onClick }: Props) => {
  return (
    <>
      {listing.map((job) => (
        <Card
          key={job.id}
          border={
            job.company === "Photosnap" || job.company === "Manage"
              ? "4.5px solid  hsl(180, 29%, 50%)"
              : ""
          }
        >
          <DesktopFlexItem>
            <Logo src={job.image} alt="company logo" />
            <FlexItem>
              <CompanyBadgeFlex>
                <Company>{job.company}</Company>
                {job.cardInfo[0] === "1d ago" ||
                job.cardInfo[0] === "2d ago" ? (
                  <Badge background="hsl(180, 29%, 50%)">New!</Badge>
                ) : null}
                {job.cardInfo[0] === "1d ago" && (
                  <Badge background="hsl(180, 14%, 20%)">Featured</Badge>
                )}
              </CompanyBadgeFlex>
              <Position>{job.position}</Position>
              <JobDetails>{job.cardInfo.join("  •  ")}</JobDetails>
              <Separator />
            </FlexItem>
          </DesktopFlexItem>
          <SkillBadgeFlex>
            {job.skill.map((item) => (
              <SkillBadges
                key={item}
                onClick={(e) =>
                  onClick((e.target as HTMLButtonElement).innerHTML)
                }
              >
                {item}
              </SkillBadges>
            ))}
          </SkillBadgeFlex>
        </Card>
      ))}
    </>
  );
};
