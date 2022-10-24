import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

export const CardAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ImgAvatar = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

export const UserName = styled.p`
  font-weight: 800px;
  font-size: 24px;
  margin-bottom: 10px;
  color: var(--darkTextColor);
`;

export const UserInfo = styled.p`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 10px;
  color: var(--textColor);
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
`;

export const StatsItem = styled.li`
  padding: 5px;
  width: 100px;
  height: 55px;
  display: flex;
  flex-direction: column;
  background-color: var(--brandColor);

  align-items: center;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgb(188, 180, 180);
  transition: all 0.3s ease;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const StatsData = styled.span`
  font-size: 18px;
  margin-bottom: 10px;
  color: var(--darkTextColor);
`;
