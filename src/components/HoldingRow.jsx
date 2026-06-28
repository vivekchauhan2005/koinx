import { formatCurrency, calcNet } from "../utils/calculateHarvest";
 
function GainLossCell({ gain, loss }) {
  const net = calcNet(gain, loss);
  const isGain = net >= 0;

  return (
    <div className="text-right">
      <span
        className={`text-sm font-medium ${
          isGain ? "text-success" : "text-danger"
        }`}
      >
        {isGain ? "+" : "-"}₹{formatCurrency(Math.abs(net))}
      </span>
    </div>
  );
}

function HoldingRow({ holding, isSelected, onToggle }) {
  const currentValue = holding.currentPrice * holding.totalHolding;
  const avgValue = holding.avgBuyPrice * holding.totalHolding;
  const totalPnL = currentValue - avgValue;
  const isProfit = totalPnL >= 0;

  return (
    <tr
      onClick={() => onToggle(holding.id)}
      className={`border-b border-gray-100 cursor-pointer transition-colors hover:bg-gray-50 ${
        isSelected ? "bg-blue-50 hover:bg-blue-50" : ""
      }`}
    >
      {/* Row checkbox */}
      <td className="py-3 pl-4 pr-2">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggle(holding.id)}
          onClick={(e) => e.stopPropagation()} // prevent double-toggle from tr click
          className="w-4 h-4 rounded border-gray-300 cursor-pointer accent-primary"
        />
      </td>

      {/* Coin name + symbol */}
      <td className="py-3 px-3">
        <div className="flex items-center gap-2.5">
          <img
            src={holding.coinIcon}
            alt={holding.coin}
            className="w-7 h-7 rounded-full object-cover"
            onError={(e) => {
              e.target.src = `https://placehold.co/28x28/1A56DB/white?text=${holding.symbol[0]}`;
            }}
          />
          <div>
            <p className="font-medium text-gray-900 text-sm">{holding.coin}</p>
            <p className="text-xs text-gray-400">{holding.symbol}</p>
          </div>
        </div>
      </td>

      {/* How many coins + INR value */}
      <td className="py-3 px-3 text-right">
        <p className="text-sm font-medium text-gray-800">
          {holding.totalHolding.toLocaleString()} {holding.symbol}
        </p>
        <p className="text-xs text-gray-400">₹{formatCurrency(currentValue)}</p>
      </td>

      {/* Current market price */}
      <td className="py-3 px-3 text-right">
        <p className="text-sm text-gray-700">
          ₹{formatCurrency(holding.currentPrice)}
        </p>
      </td>

      {/* Total unrealised P&L */}
      <td className="py-3 px-3 text-right">
        <span
          className={`text-sm font-medium ${
            isProfit ? "text-success" : "text-danger"
          }`}
        >
          {isProfit ? "+" : "-"}₹{formatCurrency(Math.abs(totalPnL))}
        </span>
      </td>

      {/* Short-term capital gain/loss for this coin */}
      <td className="py-3 px-3">
        <GainLossCell gain={holding.stcg.gain} loss={holding.stcg.loss} />
      </td>

      {/* Long-term capital gain/loss for this coin */}
      <td className="py-3 px-3">
        <GainLossCell gain={holding.ltcg.gain} loss={holding.ltcg.loss} />
      </td>

      {/* Amount To Sell — only shows a value when the row is selected */}
      <td className="py-3 px-3 text-right">
        {isSelected ? (
          <div>
            <p className="text-sm font-semibold text-primary">
              ₹{formatCurrency(currentValue)}
            </p>
            <p className="text-xs text-gray-400">
              {holding.totalHolding.toLocaleString()} {holding.symbol}
            </p>
          </div>
        ) : (
          <span className="text-sm text-gray-300">—</span>
        )}
      </td>
    </tr>
  );
}

export default HoldingRow;
