import Count from "./components/Count";
import Condition_rendering from "./components/Condition-Rendering/Condition_rendering";
import Onchange from "./components/Onchange_And_event_Binding/Onchange";
import UseState_Hook from "./components/React_Hooks/UseState_Hook";
import Parent from "./components/Data_Shareing/Parent";
import Home from "./components/ToDo_App/Home";
import Main_page from "./components/ToDo2/Main_page";
import Formik from "./components/Formik/Formik";
import Control from "./components/Formik/Control";

function App() {
  return (
    <div className="App">
      {/* <Count/> */}
      {/* <Condition_rendering /> */}
      {/* <Onchange /> */}
      {/* <UseState_Hook /> */}
      {/* <Parent /> */}
      {/* <Home /> */}
      {/* <Main_page /> */}
      <Formik />
      <p></p>
      <Control />
    </div>
  );
}

export default App;
