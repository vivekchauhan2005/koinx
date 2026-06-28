import { useHarvesting } from "../context/HarvestingContext";
import HoldingRow from "./HoldingRow"; 
const TABLE_HEADERS = [
  { label: "Asset", align: "left" },
  { label: "Holdings", align: "right" },
  { label: "Current Price", align: "right" },
  { label: "Total P&L", align: "right" },
  { label: "Short-Term", align: "right" },
  { label: "Long-Term", align: "right" },
  { label: "Amount To Sell", align: "right" },
];

function HoldingsTable() {
  const { holdings, selectedIds, toggleHolding, selectAll, deselectAll } =
    useHarvesting();

  const allSelected =
    holdings.length > 0 && selectedIds.length === holdings.length;
  const someSelected = selectedIds.length > 0 && !allSelected;

  const handleSelectAll = () => {
    if (allSelected) {
      deselectAll();
    } else {
      selectAll(holdings.map((h) => h.id));
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Table title bar */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">
          Holdings{" "}
          <span className="text-gray-400 font-normal text-sm">
            ({holdings.length} assets)
          </span>
        </h2>
        {selectedIds.length > 0 && (
          <span className="text-sm text-primary font-medium">
            {selectedIds.length} selected
          </span>
        )}
      </div>

      {/* Horizontally scrollable on small screens */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead className="bg-gray-50">
            <tr>
              {/* Select-all checkbox column */}
              <th className="py-3 pl-4 pr-2 w-10">
                <input
                  type="checkbox"
                  checked={allSelected}
                  ref={(el) => {
                    // Indeterminate = some but not all checked
                    if (el) el.indeterminate = someSelected;
                  }}
                  onChange={handleSelectAll}
                  className="w-4 h-4 rounded border-gray-300 cursor-pointer accent-primary"
                />
              </th>
              {TABLE_HEADERS.map((h) => (
                <th
                  key={h.label}
                  className={`py-3 px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider ${
                    h.align === "right" ? "text-right" : "text-left"
                  }`}
                >
                  {h.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {holdings.map((holding) => (
              <HoldingRow
                key={holding.id}
                holding={holding}
                isSelected={selectedIds.includes(holding.id)}
                onToggle={toggleHolding}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HoldingsTable;
