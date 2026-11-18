import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import PublicLayout from './layouts/PublicLayout/PublicLayout'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import AppLayout from './layouts/AppLayout/AppLayout'

import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import AnalyzeResume from './pages/AnalyzeResume/AnalyzeResume'
import History from './pages/History/History'
import HistoryDetails from './pages/HistoryDetails/HistoryDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Logged-out pages with the top navbar */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Authentication pages (logo only, no navigation) */}
        <Route element={<AuthLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Logged-in pages with the sidebar */}
        <Route element={<AppLayout />}>
          <Route path="/analyze" element={<AnalyzeResume />} />
          <Route path="/history" element={<History />} />
          <Route path="/history/:id" element={<HistoryDetails />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
