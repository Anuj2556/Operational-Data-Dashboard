function StatusBadge({ status }) {
  const statusClass = status.toLowerCase().replaceAll(" ", "-");

  return (
    <span className={`status-badge status-${statusClass}`}>
      {status}
    </span>
  );
}

export default StatusBadge;
