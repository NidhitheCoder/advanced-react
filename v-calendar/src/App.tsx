import Calendar from "./containers/Calendar";
import MonthCover from "./containers/MonthCover";

function App() {
  return (
    <div className="flex flex-col h-screen w-screen bg-linear-softgreen-softpink">
      <MonthCover
        quote='"The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.”'
        author="Tim Berners-Lee"
        imgSrc="https://picsum.photos/200"
        description="Sir Timothy John Berners-Lee OM KBE FRS FREng FRSA DFBCS, also known as TimBL, is an English computer scientist best known as the inventor of the World Wide Web. He is a Professorial Fellow of Computer Science at the University of Oxford and a professor at the Massachusetts Institute of Technology. "
      />
      <Calendar />
    </div>
  );
}

export default App;
