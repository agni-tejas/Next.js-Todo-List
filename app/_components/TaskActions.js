import { Button } from "../_ui/Button";

export default function TaskActions({
  selectedCount,
  filteredTasks,
  clearSelectedTasks,
  clearAllTasks,
}) {
  return (
    <div className="flex justify-between pt-2 border-t md:w-[638px] w-[350px]">
      <span className="text-[#B1BACB] text-lg font-medium">
        {filteredTasks.length} items
      </span>
      <div className="flex gap-4">
        {selectedCount > 0 && (
          <Button
            variant="clear"
            className="text-sm"
            onClick={clearSelectedTasks}
            size="sm"
            disabled={selectedCount === 0}
          >
            Clear Completed
          </Button>
        )}
        <button
          className="text-[#B1BACB] hover:text-[hsl(var(--accent1))] py-1 transition-[box-shadow_background-color] duration-fast ease-squish hover:shadow-[0_0_0_hsl(var(--accent1)_/_0.3),_0_0_0_-0.1em_hsl(var(--bg)),_0_0_0_-0.2em_hsl(var(--accent))]"
          onClick={clearAllTasks}
        >
          Clear All
        </button>
      </div>
    </div>
  );
}
