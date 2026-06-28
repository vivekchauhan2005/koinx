import { FiCheckCircle } from "react-icons/fi";
import { formatCurrency } from "../utils/calculateHarvest"; 
function SavingsBanner({ savings }) {
  if (savings <= 0) return null;

  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
      <FiCheckCircle className="text-success text-2xl flex-shrink-0" />
      <div>
        <p className="font-semibold text-green-800">
          🎉 You&apos;re going to save ₹{formatCurrency(savings)}
        </p>
        <p className="text-sm text-green-600 mt-0.5">
          By harvesting the selected holdings, you can offset your gains and
          reduce your tax liability for this financial year.
        </p>
      </div>
    </div>
  );
}

export default SavingsBanner;
