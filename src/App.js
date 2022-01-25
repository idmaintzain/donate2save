
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignInPage from './components/signin-page/sign-in-component';
import ResetPassword from './components/reset-password/reset-password.component';
import Dashboard from './components/dashboard/dashboard.component';
import NewPassword from './components/new-password/new-password.component';
import Navbar from './components/header/header.component';

function App() {
  return (
    <div className="App">
      
     <Routes>
       <Route exact path='/signin' element={<SignInPage/>}/>
       <Route  path='/reset' element={<ResetPassword/>}/>
       <Route  path='/user/*' element={<Navbar/>}>
        <Route path='dashboard' element={<Dashboard/>}/>
       </Route>
       <Route  path='/reset-password' element={<NewPassword/>}/>
     </Routes>
    </div>
  );
}

export default App;
