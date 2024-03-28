// Components
import SocialLink from './SocialLink';

// Hooks
import { useLocalStorage } from '../hooks/useLocalStorage';

// Types
import { Link, UserDetail, UserOverview, Location } from './types';

type Props = {
  user: UserOverview | UserDetail;
};

const ProfileCard = ({ user }: Props) => {
  // Use custom hook to store user details in localStorage if user location is an object
  if (typeof user.location === 'object') {
    useLocalStorage('user', user as UserOverview);
  }

  // Function to render the user's location as a string
  const renderLocation = () => {
    if (typeof user.location === 'object') {
      const location = user.location as Location;
      return `${location.city}, ${location.country}`;
    } else {
      return user.location;
    }
  };

  // Inline component for rendering social links list
  const SocialLinks = ({ user }: { user: any }) => (
    <ul className="social-links">
      {user.links.map((link: Link, index: never) => (
        <SocialLink key={index} link={link} />
      ))}
    </ul>
  );

  // Main JSX structure for the ProfileCard component
  return (
    <div className="profile-card-container">
      <div className="profile-card">
        <header className="profile-header">
          <img
            src={user.avatar}
            alt={user.name}
            className="profile-photo"
          />
          <h1 className="profile-name">{user.name}</h1>
          <p className="profile-location">{renderLocation()}</p>
          <div className="profile-description">
            <p>{`"${user.description}"`}</p>
          </div>
        </header>
        <SocialLinks user={user} />
      </div>
    </div>
  );
};

export default ProfileCard;
