import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';
import Home from './pages/Home';
import WorkoutDetail from './pages/WorkoutDetail';
import MyPlan from './pages/MyPlan';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout/:id" element={<WorkoutDetail />} />
        <Route path="/my-plan" element={<MyPlan />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toast />
    </div>
  );
}
