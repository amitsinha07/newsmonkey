import React,{Component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
class App extends Component {
  render() { 
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<News key="general" pageSize={5} country="in" category='general'/>} />
          <Route path="/business" element={<News key="business" pageSize={5} country="in" category='business'/>} />
          <Route path="/entertainment" element={<News key="entertainment" pageSize={5} country="in" category='entertainment'/>} />
          <Route path="health" element={<News key="health" pageSize={5} country="in" category='health'/>} />
          <Route path="/science" element={<News key="science" pageSize={5} country="in" category='science'/>} />
          <Route path="/sports" element={<News key="sports" pageSize={5} country="in" category='sports'/>} />
          <Route path="/technology" element={<News key="technology" pageSize={5} country="in" category='technology'/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}
 
export default App;