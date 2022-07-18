import FixedBgSection from './components/FixedBgSection';
import './App.css';
import CustomHeader from './containers/CustomHeader';
import ShortCutContianer from './containers/ShortCutContianer';
import RecommentedList from './containers/RecommentedList';
import { recommentedList } from './constants';
import Footer from './components/Footer';
import PopupNav from './components/PopupNav';
import { useState } from 'react';

function App() {
  const [hasShortcuts, sethasShortcuts] = useState(true);
  const [hasRecommend, setHasRecommend] = useState(true);
  const [hasRecentActivity, setHasRecentActivity] = useState(true);

  const toggleShortCuts = () => {
    sethasShortcuts(!hasShortcuts);
  };

  const toggleRecommend = () => {
    setHasRecommend(!hasRecommend);
  };

  const toggleRecentActivity = () => {
    setHasRecentActivity(!hasRecentActivity);
  };

  return (
    <div className='h-full min-h-screen bg-dark'>
      <PopupNav toggleShortCuts={toggleShortCuts} toggleRecommend={toggleRecommend} toggleRecentActivity={toggleRecentActivity} />
      <CustomHeader />
      {hasShortcuts && <ShortCutContianer />}
      {hasRecommend && <RecommentedList list={recommentedList} />}
      {hasRecentActivity && <p> Recent Activity</p>}
      {hasRecommend && <Footer />}
      {/* <FixedBgSection
        url="https://azurecomcdn.azureedge.net/cvt-0b95339c25de3ead5c9876ea2353921f110f3a9dfbdc97bdeca9f573aaaa2447/images/page/home/customer-tabs/forza5-desktop.jpg"
      />
      <FixedBgSection
        url="https://azurecomcdn.azureedge.net/cvt-0b95339c25de3ead5c9876ea2353921f110f3a9dfbdc97bdeca9f573aaaa2447/images/page/home/customer-tabs/forza5-desktop.jpg"
      /> */}
    </div>
  );
}

export default App;
