const currentPage = window.location.pathname.split("/").pop() || "index.html";

const isCurrent = (href) => (currentPage === href ? ' aria-current="page"' : "");

const headerTarget = document.querySelector("[data-site-header]");
if (headerTarget) {
  headerTarget.outerHTML = `
    <header class="site-header">
      <a class="skip-link" href="#main">Skip to content</a>
      <div class="top-strip">
        <div class="container">
          <span>Serving the DMV region with Dedication, Mastery &amp; Vision</span>
          <span><a href="tel:+1-000-000-0000">(000) 000-0000</a> | <a href="mailto:info@cpa-dmv.com">info@cpa-dmv.com</a></span>
        </div>
      </div>
      <div class="container nav-wrap">
        <a class="brand" href="index.html" aria-label="CPA-DMV.COM home">
          <img src="assets/logo-dmv-cpa.svg" alt="CPA-DMV.COM logo">
          <span><strong>CPA-DMV.COM</strong><span>Dedication &bull; Mastery &bull; Vision</span></span>
        </a>
        <nav aria-label="Main navigation">
          <ul class="nav-menu">
            <li><a class="nav-link" href="index.html"${isCurrent("index.html")}>Home</a></li>
            <li><a class="nav-link" href="about.html"${isCurrent("about.html")}>About</a></li>
            <li class="has-dropdown">
              <button class="dropdown-toggle" type="button" aria-expanded="false">Services</button>
              <div class="dropdown">
                <a href="services.html"${isCurrent("services.html")}>Services Overview</a>
                <a href="accounting-bookkeeping.html"${isCurrent("accounting-bookkeeping.html")}>Accounting &amp; Bookkeeping</a>
                <a href="quickbooks-setup-training.html"${isCurrent("quickbooks-setup-training.html")}>QuickBooks Setup &amp; Training</a>
                <a href="payroll-services.html"${isCurrent("payroll-services.html")}>Payroll Services</a>
                <a href="hr-support-advisory.html"${isCurrent("hr-support-advisory.html")}>HR Support &amp; Advisory</a>
                <a href="taxation-services.html"${isCurrent("taxation-services.html")}>Taxation Services</a>
                <a href="business-registration.html"${isCurrent("business-registration.html")}>Business Registration</a>
              </div>
            </li>
            <li class="has-dropdown">
              <button class="dropdown-toggle" type="button" aria-expanded="false">Industries</button>
              <div class="dropdown">
                <a href="specialized-audit-advisory.html"${isCurrent("specialized-audit-advisory.html")}>Specialized Audit &amp; Advisory</a>
                <a href="credit-union-audits.html"${isCurrent("credit-union-audits.html")}>Credit Union Audits</a>
                <a href="single-audits-uniform-guidance.html"${isCurrent("single-audits-uniform-guidance.html")}>Single Audits / Uniform Guidance</a>
                <a href="assisted-living-facilities.html"${isCurrent("assisted-living-facilities.html")}>Assisted Living Facilities</a>
                <a href="classrooms-educational-institutions.html"${isCurrent("classrooms-educational-institutions.html")}>Educational Institutions</a>
              </div>
            </li>
            <li><a class="nav-link" href="resources-tax-updates.html"${isCurrent("resources-tax-updates.html")}>Tax Resources</a></li>
            <li><a class="nav-link" href="contact.html"${isCurrent("contact.html")}>Contact</a></li>
          </ul>
        </nav>
        <button class="menu-button" type="button" aria-label="Toggle navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <a class="btn primary header-cta" href="contact.html">Schedule a Consultation</a>
      </div>
    </header>
  `;
}

const footerTarget = document.querySelector("[data-site-footer]");
if (footerTarget) {
  footerTarget.outerHTML = `
    <footer class="site-footer">
      <div class="container footer-main">
        <div>
          <a class="brand" href="index.html" aria-label="CPA-DMV.COM home">
            <img src="assets/logo-dmv-cpa.svg" alt="CPA-DMV.COM logo">
            <span><strong>CPA-DMV.COM</strong><span>Dedication &bull; Mastery &bull; Vision</span></span>
          </a>
          <p>Specialized CPA, audit, tax, accounting, payroll, QuickBooks, HR advisory, and consulting support for clients across the District of Columbia, Maryland, and Virginia.</p>
          <p>Where financial precision meets Dedication &bull; Mastery &bull; Vision.</p>
          <p>Placeholders: professional affiliations, social links, and final firm address to be added when provided.</p>
        </div>
        <div>
          <h3>Services</h3>
          <ul>
            <li><a href="taxation-services.html">Taxation Services</a></li>
            <li><a href="accounting-bookkeeping.html">Accounting &amp; Bookkeeping</a></li>
            <li><a href="quickbooks-setup-training.html">QuickBooks Setup &amp; Training</a></li>
            <li><a href="payroll-services.html">Payroll Services</a></li>
            <li><a href="hr-support-advisory.html">HR Support &amp; Advisory</a></li>
            <li><a href="business-registration.html">Business Registration</a></li>
          </ul>
        </div>
        <div>
          <h3>Industries</h3>
          <ul>
            <li><a href="credit-union-audits.html">Credit Unions</a></li>
            <li><a href="single-audits-uniform-guidance.html">Single Audits</a></li>
            <li><a href="assisted-living-facilities.html">Assisted Living Facilities</a></li>
            <li><a href="classrooms-educational-institutions.html">Educational Institutions</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Phone: <a href="tel:+1-000-000-0000">(000) 000-0000</a></li>
            <li>Email: <a href="mailto:info@cpa-dmv.com">info@cpa-dmv.com</a></li>
            <li>Address: [DMV office address placeholder]</li>
            <li>Service Area: District of Columbia, Maryland, and Virginia</li>
          </ul>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>&copy; <span data-current-year></span> CPA-DMV.COM. All rights reserved.</span>
        <span>CPA DMV | Dedication &bull; Mastery &bull; Vision</span>
      </div>
    </footer>
  `;
}

const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const yearNodes = document.querySelectorAll("[data-current-year]");
const formNodes = document.querySelectorAll("[data-contact-form]");

yearNodes.forEach((node) => {
  node.textContent = new Date().getFullYear();
});

if (menuButton && header) {
  menuButton.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll(".dropdown-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
  });
});

document.addEventListener("click", (event) => {
  if (!header || !header.classList.contains("nav-open")) return;
  if (event.target instanceof Node && header.contains(event.target)) return;
  header.classList.remove("nav-open");
  if (menuButton) menuButton.setAttribute("aria-expanded", "false");
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".fade-up").forEach((node) => observer.observe(node));
} else {
  document.querySelectorAll(".fade-up").forEach((node) => node.classList.add("is-visible"));
}

formNodes.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector("[data-form-status]");
    if (status) {
      status.textContent = "Thank you. This demo form is ready to connect to your email or CRM endpoint.";
    }
    form.reset();
  });
});
