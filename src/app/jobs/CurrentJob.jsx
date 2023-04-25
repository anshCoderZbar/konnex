import React from "react";

export const CurrentJob = () => {
  return (
    <div class="medium-4 tablet-portrait-12 column">
      <h3 class="section-title yellow">Aktuelles</h3>
      <div class="box yellow">
        <span class="date yellow-text">23. April 2020</span>
        <h4 class="blue-text">Aktuelle Informationen zu Corona COVID 19</h4>
        <div class="blue-text no-mar-b">
          Die Ereignisse im Zusammenhang mit Coronavirus COVID 19 überschlagen
          sich fast täglich. Es ist kein Fall von Infektionen bei uns und
          unseren Mitarbeitern aufgetreten....
        </div>
        <a
          href="../aktuelle-informationen-zu-corona-covid-19/index.html"
          class="read-more"
        >
          <span class="icon-Pfeil-rechts"></span>mehr dazu
        </a>
        <div class="text-right">
          <img
            width="800"
            height="450"
            src="../wp-content/uploads/2020/04/konnex-corona-update.png"
            class="full-width thmb wp-post-image"
            alt=""
            decoding="async"
            loading="lazy"
            srcset="
            https://konnex-zeitarbeit.de/wp-content/uploads/2020/04/konnex-corona-update.png         800w,
            https://konnex-zeitarbeit.de/wp-content/uploads/2020/04/konnex-corona-update-300x169.png 300w,
            https://konnex-zeitarbeit.de/wp-content/uploads/2020/04/konnex-corona-update-768x432.png 768w
          "
            sizes="(max-width: 800px) 100vw, 800px"
          />
        </div>

        <a href="../aktuelles/index.html" class="more-btn yellow">
          <span class="icon-Pfeil-rechts"></span>weitere Meldungen
        </a>
      </div>
    </div>
  );
};
