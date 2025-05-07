import img from "../image/img.png";
import Cryptocurrency from "./Cryptocurrency";
import Weather from "./Weather";
import News from "./News";
function Navbar({ preNav, setNav, MyNavbar }) {
  const handleMyNavbar = (Dashboard) => {
    setNav(Dashboard);
  };

  return (
    <>
      <header class="p-3 bg-dark text-white">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <img className="img" src={img} alt="CryptoWeather Nexus" />
            </a>

            <ul class="nav nav-pills col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              {MyNavbar.map((data) => (
                <li class="nav-item" key={data}>
                  <a
                    href="#"
                    class={`nav-link ${preNav === data ? "active" : ""}`}
                    aria-current="page"
                    onClick={() => handleMyNavbar(data)}
                  >
                    {data}
                  </a>
                </li>
              ))}
            </ul>
            {/* "nav-link active" */}
            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                class="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div class="text-end">
              <button type="button" class="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" class="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
      {preNav === "Weather" ? <Weather></Weather> : ""}

      {preNav === "Cryptocurrency" ? <Cryptocurrency></Cryptocurrency> : ""}
      {preNav === "News" ? <News></News> : ""}
    </>
  );
}
export default Navbar;
