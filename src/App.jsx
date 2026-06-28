import { HarvestingProvider } from "./context/HarvestingContext";
import Navbar from "./components/Navbar";
import TaxHarvestingPage from "./pages/TaxHarvestingPage";

function App() {
  return (
    <HarvestingProvider>
      <div className="min-h-screen bg-bg-main">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <TaxHarvestingPage />
        </main>
      </div>
    </HarvestingProvider>
  );
}

export default App;
