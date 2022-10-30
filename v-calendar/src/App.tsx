import Calendar from "./containers/Calendar";
import MonthCover from "./containers/MonthCover";

function App() {
  return (
    <div className="flex flex-col h-screen w-screen bg-linear-softgreen-softpink">
      <MonthCover
        quote="lorem ipsam"
        author="Jet Lee"
        imgSrc="https://random.jpg"
        description="description texts here"
      />
      <Calendar />
    </div>
  );
}

export default App;
