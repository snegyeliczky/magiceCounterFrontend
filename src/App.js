import './App.css';
import 'antd/dist/antd.css';
import Counter from "./pages/Counter";

import {PageHeader} from "antd";


function App() {
  return (
    <div className="App">
        <PageHeader>This is the Magice Counter</PageHeader>
        <Counter/>
    </div>
  );
}

export default App;
