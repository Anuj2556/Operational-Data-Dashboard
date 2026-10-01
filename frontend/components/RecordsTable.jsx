import StatusBadge from "./StatusBadge";
import { Link } from "react-router-dom";

function RecordsTable({visibleRecords}) {
  return (
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
            <td>
              <StatusBadge status={record.status} />
            </td>
            <td>{record.priority}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RecordsTable;
