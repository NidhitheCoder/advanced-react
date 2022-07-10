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
        <ul className='flex flex-row text-white list-inside'>
          <li className='text-white pr-2 whitespace-nowrap'>Popular topics:</li>
          <li className='text-active-color whitespace-nowrap px-2'>Self Improvement</li>
          <li className='text-active-color whitespace-nowrap px-2'>Food</li>
          <li className='text-active-color whitespace-nowrap px-2'>Entertainment</li>
          <li className='text-active-color whitespace-nowrap px-2'>Health & fitness</li>
          <li className='text-active-color whitespace-nowrap px-2'>Science</li>
          <li className='text-active-color whitespace-nowrap px-2'>More recommendations</li>
        </ul>
        <p className='text-active-color whitespace-nowrap px-2'>Privacy Notice</p>
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
