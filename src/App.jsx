
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import PrivateRoute from './routes/PrivateRoute'
import HomePage from './pages/movie/HomePage'
import MovieDetailPage from './pages/movie/MovieDetailPage'
import DashboardAdmin from './pages/user/DashboardAdmin'
import Register from './pages/user/Register'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Login from './pages/user/Login'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<PrivateRoute element={<HomePage />} />} />
          <Route path='/movies/:id' element={<PrivateRoute element={<MovieDetailPage />} />} />
          <Route path='/admin' element={<PrivateRoute element={<DashboardAdmin />} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>

        <Route path='*' element={<PageNotFound />} />
      </Routes>
        
    </BrowserRouter>
  )
}

export default App