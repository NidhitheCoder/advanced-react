import FixedBgSection from './components/FixedBgSection';
import './App.css';
import CustomHeader from './containers/CustomHeader';
import ShortCutContianer from './containers/ShortCutContianer';

function App() {
  return (
    <div className='h-full min-h-screen bg-dark'>
      <CustomHeader />
      <ShortCutContianer />
      <div className='flex  w-2/4 mx-auto pt-8'>
        <p className='text-active-color pr-2'>Recommended by Pocket</p>
        <a href="#" className='text-white'>learn more</a>
      </div>
      <div className='w-2/4 mx-auto grid grid-cols-3 gap-6 py-4'>
        <div className='w-full h-60 rounded-lg bg-light'></div>
        <div className='w-full h-60 rounded-lg bg-light'></div>
        <div className='w-full h-60 rounded-lg bg-light'></div>
        <div className='w-full h-60 rounded-lg bg-light'></div>
        <div className='w-full h-60 rounded-lg bg-light'></div>
        <div className='w-full h-60 rounded-lg bg-light'></div>
      </div>
      <div className='w-screen h-screen bg-dark'></div>
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
