 
export const calcNet = (gain, loss) => gain - loss;

 
export const calcAfterHarvesting = (preHarvesting, selectedHoldings) => {
  let totalStcgGain = preHarvesting.stcg.gain;
  let totalStcgLoss = preHarvesting.stcg.loss;
  let totalLtcgGain = preHarvesting.ltcg.gain;
  let totalLtcgLoss = preHarvesting.ltcg.loss;

  // Add up gains/losses from selected holdings
  selectedHoldings.forEach((holding) => {
    totalStcgGain += holding.stcg.gain;
    totalStcgLoss += holding.stcg.loss;
    totalLtcgGain += holding.ltcg.gain;
    totalLtcgLoss += holding.ltcg.loss;
  });

  return {
    stcg: { gain: totalStcgGain, loss: totalStcgLoss },
    ltcg: { gain: totalLtcgGain, loss: totalLtcgLoss },
  };
};
 
export const calcTax = (stcgNet, ltcgNet) => {
  const stcgTax = stcgNet > 0 ? stcgNet * 0.15 : 0; 
  const ltcgTax = ltcgNet > 0 ? ltcgNet * 0.10 : 0;  
  return stcgTax + ltcgTax;
};

 
export const formatCurrency = (num) => {
  const abs = Math.abs(num);
  return abs.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
