import {ColorProvider } from "./contexts/color";
import SelectColors from "./components/SelectColors";
import CounterContainer from "./containers/CounterContainer";
import {SplitMeContainer} from "./containers/SplitMeContainer";

const App = () => {
  return(
    <ColorProvider>
      <div>
        <SelectColors />
        <CounterContainer/>
        <SplitMeContainer/>
      </div>
    </ColorProvider>  
  );
};

export default App;
