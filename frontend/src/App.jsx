import { useState, useEffect } from "react";
import {
  Link,
  Route,
  Routes,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { fetchRecords, fetchRecordById } from "../services/api";

import FilterBar from "../components/FilterBar";

function DashboardPage() {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState(() => ({
    search: searchParams.get("search") || "",
    status: searchParams.get("status") || "",
    priority: searchParams.get("priority") || "",
  }));
  const [sortBy, setSortBy] = useState("updatedAt");
  const [sortDir, setSortDir] = useState("desc");

  const [page, setPage] = useState(1);
  const pageSize = 2;

  //dataloaders
  async function loadRecords() {
    try {
      setIsLoading(true);
      setError("");

      const data = await fetchRecords();
      setRecords(data);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchRecords()
      .then((data) => {
        setRecords(data);
        setIsLoading(false);
      })
      .catch((requestError) => {
        setError(requestError.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading Records ... </p>;
  }

  if (error) {
    return (
      <main>
        <main>
          <h1>Operational Dashboard</h1>
          <p>{error}</p>
          <button onClick={loadRecords}>Retry</button>
        </main>
      </main>
    );
  }

  //filter-handlers
  function handleFilterChange(name, value) {
    setFilters((currFilters) => ({
      ...currFilters,
      [name]: value,
    }));
    const nextParams = new URLSearchParams(searchParams);

    if (value) {
      nextParams.set(name, value);
    } else {
      nextParams.delete(name);
    }
    setSearchParams(nextParams);
    setPage(1);
  }

  function handleResetFilters() {
    setFilters({
      search: "",
      status: "",
      priority: "",
    });
    setSearchParams({});
    setPage(1);
  }

  //filtering
  let filteredRecords = records
    .filter((record) =>
      record.title.toLowerCase().includes(filters.search.toLowerCase()),
    )
    .filter(
      (record) => filters.status === "" || record.status === filters.status,
    )
    .filter(
      (record) =>
        filters.priority === "" || record.priority === filters.priority,
    );

  const sortedRecords = [...filteredRecords].sort(
    (firstRecord, secondRecord) => {
      const firstValue = firstRecord[sortBy];
      const secondValue = secondRecord[sortBy];

      const comparison = String(firstValue).localeCompare(
        String(secondValue),
        undefined,
        {
          numeric: true,
        },
      );
      return sortDir === "asc" ? comparison : -comparison;
    },
  );
  const totalPages = Math.max(1, Math.ceil(sortedRecords.length / pageSize));
  const startIndex = (page - 1) * pageSize;
  const visibleRecords = sortedRecords.slice(startIndex, startIndex + pageSize);

  return (
    <main>
      <FilterBar
        filters={filters}
        onChange={handleFilterChange}
        onReset={handleResetFilters}
      />

      <section className="sort-controls" aria-label="Sort records">
        <label className="control-label">
          Sort By
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="updatedAt">Last updated</option>
            <option value="title">Title</option>
            <option value="priority">Priority</option>
            <option value="status">Status</option>
          </select>
        </label>
        <button
          type="button"
          onClick={() =>
            setSortDir((currDir) => (currDir === "asc" ? "desc" : "asc"))
          }
        >
          {sortDir === "asc" ? "Ascending" : "Descending"}
        </button>
      </section>

      <h1>Operational Dashboard</h1>
      {visibleRecords.length === 0 ? (
        <p>No Records found. </p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Owner</th>
              <th>Status</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {visibleRecords.map((record) => (
              <tr key={record.id}>
                <td>
                  <Link to={`/record/${record.id}`}>{record.title}</Link>
                </td>
                <td>{record.owner}</td>
                <td>{record.status}</td>
                <td>{record.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {sortedRecords.length > 0 && (
        <nav className="pagination" aria-label="Pagination">
          <button
            type="button"
            disabled={page === 1}
            onClick={() => setPage((currPage) => currPage - 1)}
          >
            Previous
          </button>

          <span>
            Page {page} of {totalPages}
          </span>

          <button
            type="button"
            disabled={page === totalPages}
            onClick={() => setPage((currPage) => currPage + 1)}
          >
            Next
          </button>
        </nav>
      )}
    </main>
  );
}
function DetailsPage() {
  const { id } = useParams();
  const [record, setRecord] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadRecord() {
    try {
      setIsLoading(true);
      setError("");

      const data = await fetchRecordById(id);
      setRecord(data);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchRecordById(id)
      .then((data) => {
        setRecord(data);
        setIsLoading(false);
      })
      .catch((requestError) => {
        setError(requestError.message);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <p>Loading Records ... </p>;
  }

  if (error) {
    return (
      <main>
        <main>
          <h1>Operational Dashboard</h1>
          <p>{error}</p>
          <button onClick={loadRecord}>Retry</button>
          <br />
          <Link to="/">Back to dashboard</Link>
        </main>
      </main>
    );
  }

  return (
    <main>
      <h1>{record.title}</h1>
      <p>{record.description}</p>
      <dl>
        <dt>Owner</dt>
        <dd>{record.owner}</dd>

        <dt>Status</dt>
        <dd>{record.status}</dd>

        <dt>Priority</dt>
        <dd>{record.priority}</dd>

        <dt>Last updated</dt>
        <dd>{record.updatedAt}</dd>
      </dl>
      <Link to="/">Back to Dashboard</Link>
    </main>
  );
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />}></Route>
      <Route path="/record/:id" element={<DetailsPage />}></Route>
    </Routes>
  );
}

export default App;
