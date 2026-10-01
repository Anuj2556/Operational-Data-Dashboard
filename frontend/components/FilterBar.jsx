function FilterBar({ filters, onChange, onReset }) {
  return (
    <section className="filter-bar" aria-label="Filter records">
      <label className="control-label">
        Search
        <input
          type="search"
          value={filters.search}
          onChange={(e) => onChange("search", e.target.value)}
          placeholder="Search Records"
        />
      </label>

      <label className="control-label">
        Status
        <select
          value={filters.status}
          onChange={(e) => onChange("status", e.target.value)}
        >
          <option value="">All statuses</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Blocked">Blocked</option>
        </select>
      </label>

      <label className="control-label">
        Priority
        <select
          value={filters.priority}
          onChange={(e) => onChange("priority", e.target.value)}
        >
          <option value="">All Priority</option>
          <option value="Critical">Critical</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
        </select>
      </label>

      <button className="filter-reset" type="button" onClick={onReset}>
        Reset Filters
      </button>
    </section>
  );
}

export default FilterBar;
