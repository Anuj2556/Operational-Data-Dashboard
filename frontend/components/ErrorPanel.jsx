function ErrorPanel({msg,onRetry,backLink}) {
  return (
    <section className="error-panel" role="alert">
      <h2>Something went wrong</h2>
      <p>{msg}</p>

      <button type="button" onClick={onRetry}>
        Retry
      </button>

      {backLink && <div>{backLink}</div>}
    </section>
  )
}

export default ErrorPanel
