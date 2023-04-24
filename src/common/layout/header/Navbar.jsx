import React, { useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <div id="main-nav">
      <div className="row">
        <div className="large-12 column">
          <div className="contain-to-grid">
            <nav
              className={`top-bar ${active ? "expanded" : null}`}
              data-topbar
              role="navigation"
              data-options="back_text:zurück;mobile_show_parent_link:false;"
            >
              <ul className="title-area">
                <li className="name"></li>
                <li className="toggle-topbar menu-icon">
                  <a href="#" onClick={() => setActive(!active)}>
                    <span>Menu</span>
                  </a>
                </li>
              </ul>
              <section className="top-bar-section">
                <ul id="menu-hauptnavigation" className="">
                  <li
                    id="menu-item-573"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has-dropdown menu-item-573"
                  >
                    <a href="#">für Bewerber</a>
                    <ul className="sub-menu dropdown">
                      <li
                        id="menu-item-299"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-299"
                      >
                        <a href="vorteile-fuer-bewerber/index.html">Vorteile</a>
                      </li>
                      <li
                        id="menu-item-464"
                        className="menu-item menu-item-type-post_type_archive menu-item-object-jobs menu-item-464"
                      >
                        <a href="jobs/index.html">Aktuelle Jobs</a>
                      </li>
                      <li
                        id="menu-item-340"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-340"
                      >
                        <a href="jetzt-bewerben/index.html">Jetzt bewerben!</a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-574"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has-dropdown menu-item-574"
                  >
                    <a href="#">für Unternehmen</a>
                    <ul className="sub-menu dropdown">
                      <li
                        id="menu-item-364"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-364"
                      >
                        <a href="vorteile/index.html">Vorteile</a>
                      </li>
                      <li
                        id="menu-item-363"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-363"
                      >
                        <a href="zeitarbeit-heute/index.html">
                          Zeitarbeit heute
                        </a>
                      </li>
                      <li
                        id="menu-item-297"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-297"
                      >
                        <a href="personalvermittlung/index.html">
                          Personalvermittlung
                        </a>
                      </li>
                      <li
                        id="menu-item-296"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-296"
                      >
                        <a href="on-site-management/index.html">
                          On-Site-Management
                        </a>
                      </li>
                      <li
                        id="menu-item-365"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-365"
                      >
                        <a href="outsourcing/index.html">Outsourcing</a>
                      </li>
                      <li
                        id="menu-item-362"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-362"
                      >
                        <a href="master-vendor-management/index.html">
                          Master-Vendor-Management
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-575"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has-dropdown menu-item-575"
                  >
                    <a href="#">über KONNEX</a>
                    <ul className="sub-menu dropdown">
                      <li
                        id="menu-item-386"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-386"
                      >
                        <a href="unsere-philosophie/index.html">
                          Unsere Philosophie
                        </a>
                      </li>
                      <li
                        id="menu-item-385"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-385"
                      >
                        <a href="werte-und-geschichte/index.html">
                          Werte und Geschichte
                        </a>
                      </li>
                      <li
                        id="menu-item-384"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-384"
                      >
                        <a href="qualitaet-und-sicherheit/index.html">
                          Qualität und Sicherheit
                        </a>
                      </li>
                      <li
                        id="menu-item-387"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-387"
                      >
                        <a href="ansprechpartner/index.html">
                          Ihre Ansprechpartner
                        </a>
                      </li>
                      <li
                        id="menu-item-478"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-478"
                      >
                        <a href="zertifikate-und-urkunden/index.html">
                          Zertifikate und Urkunden
                        </a>
                      </li>
                      <li
                        id="menu-item-1265"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1265"
                      >
                        <a href="sponsoring-sc-koeln-muelheim-nord/index.html">
                          Sponsoring – SC Köln-Mülheim Nord
                        </a>
                      </li>
                      <li
                        id="menu-item-1264"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1264"
                      >
                        <a href="sponsoring-chinese-boxing-akademie-koeln/index.html">
                          Sponsoring – Chinese Boxing Akademie Köln
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-29"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-29"
                  >
                    <a href="aktuelles/index.html">Aktuelles</a>
                  </li>
                  <li
                    id="menu-item-507"
                    className="search-jobs menu-item menu-item-type-custom menu-item-object-custom menu-item-507"
                  >
                    <a href="#">Jobsuche</a>
                  </li>
                  <li
                    id="menu-item-854"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-854"
                  >
                    <a href="kontakt/index.html">Kontakt</a>
                  </li>
                </ul>
                <div id="main-nav-contact-info">
                  <p className="title">Ihr persönlicher Kontakt!</p>
                  <p className="ph-number">0221 3567481</p>
                </div>
              </section>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
