import { createContext, useContext, useState } from "react";

const HarvestingContext = createContext(null);

export function HarvestingProvider({ children }) {
  const [holdings, setHoldings] = useState([]);
  const [capitalGains, setCapitalGains] = useState(null); // renamed from preHarvesting for clarity
  const [selectedIds, setSelectedIds] = useState([]);

  const toggleHolding = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const selectAll = (allIds) => setSelectedIds(allIds);
  const deselectAll = () => setSelectedIds([]);

  // Derive selected holding objects from IDs — no extra state needed
  const selectedHoldings = holdings.filter((h) => selectedIds.includes(h.id));

  return (
    <HarvestingContext.Provider
      value={{
        holdings,
        setHoldings,
        capitalGains,
        setCapitalGains,
        selectedIds,
        selectedHoldings,
        toggleHolding,
        selectAll,
        deselectAll,
      }}
    >
      {children}
    </HarvestingContext.Provider>
  );
}

export const useHarvesting = () => useContext(HarvestingContext);
