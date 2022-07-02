import FixedBgSection from './components/FixedBgSection';
import './App.css';
import PopupNav from './components/PopupNav';

function App() {
  return (
    <div className='h-full min-h-screen bg-dark mt-16'>
      <PopupNav />
      <div className='w-96 m-auto d-flex flex-className'>
        <div className="logo">
        <div className="show-name " />
        </div>
      </div>
      <div className='w-96 m-auto d-flex flex-className'>
        <div className="logo">
        <div className="show-name " />
        </div>
      </div>

      <cards-container>
        
      </cards-container>
      <FixedBgSection
        url="https://azurecomcdn.azureedge.net/cvt-0b95339c25de3ead5c9876ea2353921f110f3a9dfbdc97bdeca9f573aaaa2447/images/page/home/customer-tabs/forza5-desktop.jpg"
      />
    </div>
  );
}

export default App;
