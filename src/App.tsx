import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TopList from './components/TopList/TopList';

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="min-h-screen bg-white/50 backdrop-blur-3xl">
        <Navbar />
        <Hero />
        <TopList />
      </div>
    </div>
  );
};

export default App