import { useState, useEffect, useCallback } from "react";
import { fetchHoldings, fetchCapitalGains } from "../services/api";
import { useHarvesting } from "../context/HarvestingContext";

const useHoldingsData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { setHoldings, setCapitalGains } = useHarvesting();

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const [holdingsData, capitalGainsData] = await Promise.all([
        fetchHoldings(),
        fetchCapitalGains(),
      ]);

      setHoldings(holdingsData);
      setCapitalGains(capitalGainsData);
    } catch (err) {
      console.error("API error:", err);
      setError("Failed to load your portfolio data. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [setHoldings, setCapitalGains]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return { loading, error, retry: loadData };
};

export default useHoldingsData;
