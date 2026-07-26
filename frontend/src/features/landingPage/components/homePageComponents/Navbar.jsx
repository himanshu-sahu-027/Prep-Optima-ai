import { useNavigate, useLocation } from "react-router";

const navItems = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="home-navbar">
      <div className="home-navbar__inner">
        <div className="home-navbar__brand" onClick={() => navigate("/")}>
          <span className="home-navbar__brand-icon">&#9670;</span>
          <span className="home-navbar__brand-text">PrepOptima-ai</span>
        </div>

        <ul className="home-navbar__links">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`home-navbar__link ${
                  (item.href === "/" && location.pathname === "/") ||
                  (item.href !== "/" && location.pathname === item.href)
                    ? "home-navbar__link--active"
                    : ""
                }`}
                onClick={(e) => {
                  if (item.href.startsWith("#")) {
                    e.preventDefault();
                    document
                      .querySelector(item.href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    e.preventDefault();
                    navigate(item.href);
                  }
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="home-navbar__actions">
          <button
            className="home-navbar__btn home-navbar__btn--login"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="home-navbar__btn home-navbar__btn--get-started"
            onClick={() => navigate("/generate-interview-strategy")}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
