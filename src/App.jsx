import {Routes, Route} from 'react-router-dom';
import CategoryPage from './routes/category-page/category-page.component';
import Home from './routes/home/home.component';
import Nav from './routes/nav/nav.component';
import SignIn from './routes/sign-in/sign-in.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav/>}>
        <Route index element={<Home/>}/>
        <Route path="category-page" element={<CategoryPage/>}/>
        <Route path="sign-in" element={<SignIn/>}/>
      </Route>
    </Routes>
  );
}

export default App;
