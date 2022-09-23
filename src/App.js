import {ColorProvider } from "./contexts/color";
import SelectColors from "./components/SelectColors";
import CounterContainer from "./containers/CounterContainer";

const App = () => {
  return(
    <ColorProvider>
      <div>
        <SelectColors />
        <CounterContainer/>
      </div>
    </ColorProvider>  
  );
};

export default App;