import "./App.css";
import ListHeader from "./components/ListHeader/listHeader";
import ListItem from "./components/ListItem/listItem";
import { radioList } from "./const/radioList";

function App() {
  return (
    <div className="App">
      <div className="Radio-container">
        <ListHeader />
        {radioList.map((item,index)=>
        <ListItem key={index} item={item} />
        )}
      </div>
    </div>
  );
}

export default App;
