import { SedanIcon, SuvIcon, LuxuryIcon  } from "./assets";
import { PreviewCard } from "./components/PreviewCard";
import './App.css';

function App() {
  return (
    <main className="wrapper">
      <div className="gridContainer">
        <PreviewCard 
            title="sedans"
            icon={SedanIcon}
            description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
            articleClass="sedan"
          />
          <PreviewCard 
            title="suvs"
            icon={SuvIcon}
            description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
            articleClass="suv"

          />
          <PreviewCard 
            title="luxury"
            icon={LuxuryIcon}
            description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
            articleClass="luxury"
          />
      </div>
    </main>
  )
}

export default App;