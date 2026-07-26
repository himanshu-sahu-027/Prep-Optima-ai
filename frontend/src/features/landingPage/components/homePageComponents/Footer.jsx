import { useNavigate } from "react-router";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "About", href: "/about" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (e, href) => {
    e.preventDefault();

    if (href.startsWith("#") && href !== "#") {
      document
        .querySelector(href)
        ?.scrollIntoView({ behavior: "smooth" });

      return;
    }

    if (href !== "#") {
      navigate(href);
    }
  };

  return (
    <footer className="home-footer">
      <div className="home-footer__inner">

        {/* LEFT */}
        <div className="home-footer__brand">
          <div
            className="home-footer__brand-name"
            onClick={() => navigate("/")}
          >
            <span className="home-footer__brand-icon">&#9670;</span>

            <span>PrepOptima AI</span>
          </div>

          <p className="home-footer__description">
            Turn any job description into a personalized interview
            preparation strategy tailored to your unique profile and
            experience.
          </p>
        </div>

        {/* RIGHT */}
        <div className="home-footer__links">
          <h4 className="home-footer__links-title">Links</h4>

          <ul className="home-footer__links-list">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="home-footer__link"
                  onClick={(e) => handleNavigation(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* BOTTOM */}
        <div className="home-footer__copyright">
          &copy; {new Date().getFullYear()} PrepOptima AI. All rights reserved.
        </div>

      </div>
    </footer>
  );
}