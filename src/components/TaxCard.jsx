import { calcNet, formatCurrency } from "../utils/calculateHarvest"; 
function TaxRow({ label, gains, losses }) {
  const net = calcNet(gains, losses);
  const isPositive = net >= 0;

  return (
    <div className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0">
      <span className="text-sm text-gray-600">{label}</span>
      <div className="flex items-center gap-6 text-sm">
        <div className="text-right">
          <p className="text-xs text-gray-400 mb-0.5">Gains</p>
          <p className="font-medium text-success">₹{formatCurrency(gains)}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400 mb-0.5">Losses</p>
          <p className="font-medium text-danger">₹{formatCurrency(losses)}</p>
        </div>
        <div className="text-right min-w-[80px]">
          <p className="text-xs text-gray-400 mb-0.5">Net</p>
          <p
            className={`font-semibold ${
              isPositive ? "text-success" : "text-danger"
            }`}
          >
            {isPositive ? "+" : "-"}₹{formatCurrency(Math.abs(net))}
          </p>
        </div>
      </div>
    </div>
  );
}

function TaxCard({ title, data, taxAmount, highlight }) {
  if (!data) return null;

  return (
    <div
      className={`bg-white rounded-xl shadow-sm border p-5 flex-1 ${
        highlight ? "border-primary" : "border-gray-200"
      }`}
    >
      {/* Card header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        {highlight && (
          <span className="text-xs bg-blue-50 text-primary font-medium px-2 py-0.5 rounded-full">
            After Harvesting
          </span>
        )}
      </div>

      {/* STCG and LTCG rows */}
      <div className="mb-4">
        <TaxRow
          label="Short Term Gains (STCG)"
          gains={data.stcg.gain}
          losses={data.stcg.loss}
        />
        <TaxRow
          label="Long Term Gains (LTCG)"
          gains={data.ltcg.gain}
          losses={data.ltcg.loss}
        />
      </div>

      {/* Estimated tax footer */}
      <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">Estimated Tax</span>
        <span className="text-lg font-bold text-gray-900">
          ₹{formatCurrency(taxAmount)}
        </span>
      </div>
    </div>
  );
}

export default TaxCard;
