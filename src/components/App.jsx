import profile from './json_files/user.json';
import stats from './json_files/data.json';
import friends from './json_files/friends.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <div>
      <Profile
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        followers={profile.stats.followers}
        views={profile.stats.views}
        likes={profile.stats.likes}
      />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
    </div>
  );
};
