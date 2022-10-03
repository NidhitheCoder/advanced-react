import Badge from "./components/Badge";
import BioCard from "./components/BioCard";
import Holiday, { Holidays } from "./components/Holiday";
import QuoteCard from "./components/QuoteCard";
import TitleBar from "./components/TitleBar";
import Calendar from "./containers/Calendar";

function App() {
  return (
    <div className="flex flex-col h-screen w-screen bg-linear-softgreen-softpink">
      <Badge text="Calender" />
      <Badge text="New" />
      <Badge text="Change" />
      <Badge text="Calender" />
      <Badge text="Container" />
      <TitleBar month="January" year={"2022"} />
      <Holiday text="Holidays" />
      <Holiday text="Holidays" variant={Holidays.Company} />
      <BioCard
        name="John"
        description="lorem sdfskjfksjd"
        imgSrc="https://random-user.png"
      />
      <QuoteCard text="lorem o123333" />
      <Calendar />
    </div>
  );
}

export default App;
