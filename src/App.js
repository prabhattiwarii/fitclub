
import './App.css';
import Footer from './component/Footer/Footer';
import Hero from './component/Hero/Hero';
import Join from './component/Join/Join';
import Plans from './component/Plans/Plans';
import Programs from './component/Program/Programs';
import Reason from './component/Reasons/Reason';
import Testimonials from './component/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
     <Hero/>
     <Programs/>
     <Reason/>
     <Plans/>
     <Testimonials/>
     <Join/>
     <Footer/>
    </div>
  );
}

export default App;
