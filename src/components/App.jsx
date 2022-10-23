import profile from './json_files/user.json'
import {Profile}from './Profile/profile'

export const App = () => {
  return <div>
    <Profile 
    username={profile.username}
     tag={profile.tag} 
     location={profile.location} 
     avatar={profile.avatar} 
     followers={profile.stats.followers}
      views={profile.stats.views} 
      likes={profile.stats.likes} />
  </div>;
};


