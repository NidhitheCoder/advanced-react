import Badge from "./components/Badge";
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
    </div>
  );
}

export default App;
