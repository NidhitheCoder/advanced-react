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
  const [show, setShow] = useState(false);

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
      <div className='grid grid-cols-12 bg-orange-700'>
        <div className=' col-span-12 bg-amber-200 grid grid-cols-12'>
          <div className='col-span-12 desktop:col-start-3 desktop:col-span-8 bg-lime-600'>dude</div>
        </div>
      </div>
      <div className='flex flex-col  justify-center item w-full h-screen'>

      <div className="relative group">
        <p>Hello</p>
        <div className="absolute top-0 left-0 z-10 hidden">lorem ipsum subtitle sample lorem ipsum subtitle sample 1 lorem ipsum subtitle sample
             1 lorem ipsum subtitle sample 1 4lorem ipsum subtitle sample lorem ipsum subtitle sample 1 lorem 
             ipsum subtitle sample 1 lorem ipsum subtitle sample 1 4lorem ipsum subtitle sample lorem ipsum
              subtitle sample 1 lorem ipsum subtitle sample 1 lorem ipsum subtitle sample 1 4lorem ipsum 
              subtitle sample lorem ipsum subtitle sample 1 lorem ipsum subtitle sample 1 lorem ipsum 
              subtitle sample 1 4</div>
      </div>


        <div className='bg-orange-700 overflow-visible h-full' onClick={() => setShow(!show)}>
          Hmm. We’re having trouble finding that site.
          <div className='relative h-full'>
            {show && <p className='absolute top-0 left-0 z-10 h-full bg-orange-700'>lorem ipsum subtitle sample lorem ipsum subtitle sample 1 lorem ipsum subtitle sample
              1 lorem ipsum subtitle sample 1 4lorem ipsum subtitle sample lorem ipsum subtitle sample 1 lorem 
              ipsum subtitle sample 1 lorem ipsum subtitle sample 1 4lorem ipsum subtitle sample lorem ipsum
                subtitle sample 1 lorem ipsum subtitle sample 1 lorem ipsum subtitle sample 1 4lorem ipsum 
                subtitle sample lorem ipsum subtitle sample 1 lorem ipsum subtitle sample 1 lorem ipsum 
                subtitle sample 1 4
            </p>}
          </div>
          
          </div>
        <div className='bg-green-400'>Check your network connection.
If you are connected but behind a firewall, check that Firefox has permission to access the Web.</div>
      </div>
    </div>
  );
}

export default App;
