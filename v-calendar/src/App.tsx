import Badge from "./components/Badge";
import BioCard from "./components/BioCard";
import Holiday, { Holidays } from "./components/Holiday";
import TitleBar from "./components/TitleBar";

function App() {
  return (
    <div className="flex flex-col h-screen w-screen bg-linear-softgreen-softpink">
      <Badge text="Calender" />
      <Badge text="New" />
      <Badge text="Change" />
      <Badge text="Calender" />
      <Badge text="Container" />
      <TitleBar month="January" year={'2022'} />
      <Holiday text="Holidays" />
      <Holiday text="Holidays"variant={Holidays.Company} />
      <BioCard name="John" description="lorem sdfskjfksjd" imgSrc="https://random-user.png" />
    </div>
  );
}

export default App;
