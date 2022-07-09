import FixedBgSection from './components/FixedBgSection';
import './App.css';
import CustomHeader from './containers/CustomHeader';
import ShortCutContianer from './containers/ShortCutContianer';
import RecommentedList from './containers/RecommentedList';
import { recommentedList } from './constants';

function App() {
  return (
    <div className='h-full min-h-screen bg-dark'>
      <CustomHeader />
      <ShortCutContianer />
      <RecommentedList list={recommentedList} />
      <div className='w-2/4 mx-auto h-screen bg-dark flex flex-row justify-between'>
        <div className='flex flex-row'>
          <p className='text-white'>Popular topics:</p>
          <p className='text-active-color whitespace-nowrap'>Self Improvement</p>
          <p className='text-active-color whitespace-nowrap'>Food</p>
          <p className='text-active-color whitespace-nowrap'>Entertainment</p>
          <p className='text-active-color whitespace-nowrap'>Health & fitness</p>
          <p className='text-active-color whitespace-nowrap'>Science</p>
          <p className='text-active-color whitespace-nowrap'>More recommendations</p>
        </div>
        <p className='text-active-color whitespace-nowrap'>Privacy Notice</p>
      </div>
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
