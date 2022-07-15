import FixedBgSection from './components/FixedBgSection';
import './App.css';
import CustomHeader from './containers/CustomHeader';
import ShortCutContianer from './containers/ShortCutContianer';
import RecommentedList from './containers/RecommentedList';
import { recommentedList } from './constants';
import Footer from './components/Footer';
import PopupNav from './components/PopupNav';

function App() {
  return (
    <div className='h-full min-h-screen bg-dark'>
      <PopupNav />
      <CustomHeader />
      <ShortCutContianer />
      <RecommentedList list={recommentedList} />
      <Footer />
      <FixedBgSection
        url="https://azurecomcdn.azureedge.net/cvt-0b95339c25de3ead5c9876ea2353921f110f3a9dfbdc97bdeca9f573aaaa2447/images/page/home/customer-tabs/forza5-desktop.jpg"
      />
      <FixedBgSection
        url="https://azurecomcdn.azureedge.net/cvt-0b95339c25de3ead5c9876ea2353921f110f3a9dfbdc97bdeca9f573aaaa2447/images/page/home/customer-tabs/forza5-desktop.jpg"
      />
    </div>
  );
}

export default App;
