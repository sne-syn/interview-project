import './App.css';
import ProfileCard from './Components/ProfileCard';
import { userOverview, userDetail } from './Components/data';

function App() {
  return <ProfileCard user={userOverview} />;
}

export default App;
