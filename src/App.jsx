import { Route, Routes } from 'react-router-dom';
import CostumerRouter from './components/Router/CostumerRouter';



function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CostumerRouter/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
