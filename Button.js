export default function Button() {
  return (
    <button className="button" onClick={() => window.location.reload()}>
      Reset
    </button>
  );
}
