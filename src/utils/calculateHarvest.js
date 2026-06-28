const STCG_TAX_RATE = 0.15;
const LTCG_TAX_RATE = 0.10;

export const calcNet = (gain, loss) => gain - loss;

export const calcTax = (stcgNet, ltcgNet) => {
  const stcgTax = stcgNet > 0 ? stcgNet * STCG_TAX_RATE : 0;
  const ltcgTax = ltcgNet > 0 ? ltcgNet * LTCG_TAX_RATE : 0;
  return stcgTax + ltcgTax;
};

export const formatCurrency = (num) => {
  return Math.abs(num).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const calcAfterHarvesting = (capitalGains, selectedHoldings) => {
  let stcgGain = capitalGains.stcg.gain;
  let stcgLoss = capitalGains.stcg.loss;
  let ltcgGain = capitalGains.ltcg.gain;
  let ltcgLoss = capitalGains.ltcg.loss;

  selectedHoldings.forEach((holding) => {
    stcgGain += holding.stcg.gain;
    stcgLoss += holding.stcg.loss;
    ltcgGain += holding.ltcg.gain;
    ltcgLoss += holding.ltcg.loss;
  });

  return {
    stcg: { gain: stcgGain, loss: stcgLoss },
    ltcg: { gain: ltcgGain, loss: ltcgLoss },
  };
};
 
export const buildHarvestSummary = (capitalGains, selectedHoldings) => { 
  if (!capitalGains) {
    return { preData: null, preTax: 0, afterData: null, afterTax: 0, savings: 0 };
  }

  const preStcgNet = calcNet(capitalGains.stcg.gain, capitalGains.stcg.loss);
  const preLtcgNet = calcNet(capitalGains.ltcg.gain, capitalGains.ltcg.loss);
  const preTax = calcTax(preStcgNet, preLtcgNet);

  const afterData = calcAfterHarvesting(capitalGains, selectedHoldings);
  const afterStcgNet = calcNet(afterData.stcg.gain, afterData.stcg.loss);
  const afterLtcgNet = calcNet(afterData.ltcg.gain, afterData.ltcg.loss);
  const afterTax = calcTax(afterStcgNet, afterLtcgNet);

  return {
    preData: capitalGains,
    preTax,
    afterData,
    afterTax,
    savings: preTax - afterTax,
  };
};
