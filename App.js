import './App.css';
import Navbar from './Components/navbar';
import { BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import Main from './Page/Home/main';
import internship from './Page/Home/internship';
import scholarship from './Page/Home/scholarship';
import Test from './Page/test';
import intershipinfo from './Page/Home/intershipinfo';
import Description from './Page/Description';


 
function App() {
  return (
   <Router>
      <Navbar/>
        <Routes>
          <Route path='/' exact Component={Main}/>
          <Route path='/internship' exact Component={internship} />
          <Route path='/scholarship' exact Component={scholarship}/>
          <Route path='/test' element={<Test />} />
          <Route path='/info' exact Component={intershipinfo}/>
          <Route path='/decs' exact Component={Description}/>
        
        </Routes>
   </Router>
  );
}

export default App;
