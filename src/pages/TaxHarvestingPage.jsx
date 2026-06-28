import { useHarvesting } from "../context/HarvestingContext";
import useHoldingsData from "../hooks/useHoldingsData";
import { buildHarvestSummary } from "../utils/calculateHarvest";

import TaxCard from "../components/TaxCard";
import SavingsBanner from "../components/SavingsBanner";
import HoldingsTable from "../components/HoldingsTable";
import LoadingSkeleton from "../components/LoadingSkeleton";
import ErrorState from "../components/ErrorState";

function TaxHarvestingPage() {
  const { loading, error, retry } = useHoldingsData();
  const { capitalGains, selectedHoldings } = useHarvesting();

  // Show skeleton while either API is still in flight
  if (loading) return <LoadingSkeleton />;

  // Show error UI if either API failed
  if (error) return <ErrorState message={error} onRetry={retry} />;

  // Guard: if somehow we're done loading but data is still null, keep showing skeleton
  // This prevents buildHarvestSummary from being called with null and crashing
  if (!capitalGains) return <LoadingSkeleton />;

  const { preData, preTax, afterData, afterTax, savings } = buildHarvestSummary(
    capitalGains,
    selectedHoldings
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tax Loss Harvesting</h1>
        <p className="text-gray-500 text-sm mt-1">
          Select holdings below to see how realising those gains/losses affects your tax.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <TaxCard title="Pre-Harvesting" data={preData} taxAmount={preTax} />

        <div className="hidden md:flex items-center justify-center text-gray-400 text-2xl font-light">
          →
        </div>

        <TaxCard
          title="After-Harvesting"
          data={afterData}
          taxAmount={afterTax}
          highlight
        />
      </div>

      <SavingsBanner savings={savings} />

      <HoldingsTable />
    </div>
  );
}

export default TaxHarvestingPage;
