export default function FilterSortControls({
  filter,
  setFilter,
  sort,
  setSort,
}) {
  return (
    <div className="fade-in show flex justify-end gap-2 md:w-[638px] w-[340px]">
      <select
        onChange={(e) => setFilter(e.target.value)}
        className="p-2 border-[0.05em] border-solid border-[#a2a2a250] text-xs rounded-md"
      >
        <option value="all">All Tasks</option>
        <option value="completed">Completed Tasks</option>
        <option value="active">Active Tasks</option>
      </select>

      <select
        onChange={(e) => setSort(e.target.value)}
        className="p-2 border-[0.05em] border-solid border-[#a2a2a250] text-xs rounded-md"
      >
        <option value="date">Sort by Created at</option>
        <option value="alphabetical">Sort Alphabetically</option>
        <option value="status">Sort by Status</option>
      </select>
    </div>
  );
}
