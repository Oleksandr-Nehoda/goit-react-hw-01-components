import PropTypes from 'prop-types';
import {Container, CardAvatar, ImgAvatar, UserName, UserInfo, StatsList, StatsItem, StatsData} from './profile.styled'

export const Profile = ({
    username,
    tag,
    avatar,
    followers,
    views,
    likes,
    location,}) => {
    return (
    <Container>
    <CardAvatar>
      <ImgAvatar
        src={avatar}
        alt="User avatar"
      />
      <UserName>{username}</UserName>
      <UserInfo>@{tag}</UserInfo>
      <UserInfo>{location}</UserInfo>
    </CardAvatar>
  
    <StatsList>
      <StatsItem>
        <StatsData>Followers</StatsData>
        <StatsData>{followers}</StatsData>
      </StatsItem>
      <StatsItem>
        <StatsData>Views</StatsData>
        <StatsData>{views}</StatsData>
      </StatsItem>
      <StatsItem>
        <StatsData>Likes</StatsData>
        <StatsData>{likes}</StatsData>
      </StatsItem>
    </StatsList>
  </Container>);
};

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  };