import Login from './Components/Login/Login';
// import SignUp from './Components/SignUp/SignUp';
import { Routes, Route } from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
