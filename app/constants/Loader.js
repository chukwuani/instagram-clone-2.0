export default function Loader() {
  return (
    <div className="loader">
      <div></div>

      <div className="first-loader-img">
        <img loading="eager" src="/loader logo.png" alt="logo" aria-label="Instagram" />
      </div>

      <div className="second-loader-img">
        <img loading="eager" src="/from meta.png" alt="from meta" aria-label="from meta" />
      </div>
    </div>
  );
}
