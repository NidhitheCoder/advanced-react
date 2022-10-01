import Badge from "./components/Badge";
import Note from "./components/Note";
import TitleBar from "./components/TitleBar";

function App() {
  return (
    <div className="flex h-screen w-screen bg-linear-softgreen-softpink">
      <Badge text="Calender" />
      <Badge text="New" />
      <Badge text="Change" />
      <Badge text="Calender" />
      <Badge text="Container" />
      <TitleBar month="January" year={'2022'} />
      <Note text="Holidays" bgColor="bg-dark-red" />
    </div>
  );
}

export default App;
