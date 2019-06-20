import React from "react";
import Layout from "../components/Layout";
import { CardContainer } from "../components/Container";

function Landing() {
  return (
    <Layout>
      <CardContainer>
        {/* Grid 1 */}
        <div>
          <div id="card1" className="uk-card uk-position-center ">
            <div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
              <img src="/Assets/Landing/pro2.jpg" alt="Cojo - Block boy" />
              <div className="uk-overlay uk-light uk-position-top">
                <h4>Cojo - Block boy</h4>
              </div>
              <iframe
                className="uk-transition-fade uk-position-cover"
                id="youtubeVid"
                title="youtube testing"
                width="890"
                height="500"
                src="https://www.youtube.com/embed/Ot6cTte70p8"
                frameBorder="0"
                allow=" autoplay; encrypted-media; "
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div>
          <div
            id="blankCard"
            className="uk-card uk-card-muted uk-flex"
            style={{ height: "450px" }}
          />
        </div>

        {/* Grid 2 */}

        <div>
          <div id="card2" className="uk-card uk-card-muted uk-flex">
            <div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
              <img src="/Assets/Landing/pro4.jpg" alt="BR-STOL x new era" />
              <div className="uk-overlay uk-light uk-position-top">
                <h4>BR-STOL x New Era</h4>
              </div>

              <iframe
                id="newEra"
                title="vimeo- BR-STOL x new era"
                className="uk-transition-fade uk-position-cover"
                src="https://player.vimeo.com/video/325809855?title=0&byline=0"
                width="569"
                height="300"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div>
          <div id="blankCard" className="uk-card uk-card-muted uk-flex" />
        </div>

        {/* Grid 3 */}

        <div>
          <div id="card3" className="uk-card uk-card-muted uk-flex">
            <div
              className="uk-inline-clip uk-transition-toggle uk-position-cover"
              tabIndex="0"
            >
              <img src="/Assets/Landing/pro1.jpg" alt="nig." />
              <div className="uk-overlay uk-light uk-position-top">
                <h4>nig.</h4>
              </div>

              <iframe
                id="nig"
                title="vimeo - nig."
                className="uk-transition-fade uk-position-cover"
                src="https://player.vimeo.com/video/338146747?title=0&byline=0&portrait=0"
                width="949"
                height="500"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div>
          <div id="card4" className="uk-card uk-card-muted uk-flex">
            <div
              className="uk-inline-clip uk-transition-toggle uk-position-cover"
              tabIndex="0"
            >
              <img src="/Assets/Landing/pro3.png" alt="BR-STOL at Coachella" />
              <div className="uk-overlay uk-light uk-position-top">
                <h4>BR–STOL at Coachella</h4>
              </div>
              <iframe
                id="coachella"
                title="BR-STOL at Coachella"
                className="uk-transition-fade uk-position-cover"
                src="https://player.vimeo.com/video/332145760?title=0&byline=0&portrait=0"
                width="400"
                height="211"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Grid 4 */}

        <div>
          <div id="card5" className="uk-card uk-card-muted uk-flex">
            <div
              className="uk-inline-clip uk-transition-toggle uk-position-cover"
              tabIndex="0"
            >
              <img src="/Assets/Landing/pro5.png" alt="BR-STOL X NY Sunshine" />
              <div className="uk-overlay uk-light uk-position-top">
                <h4>BR-STOL X NY Sunshine</h4>
              </div>

              <iframe
                id="NY"
                title="BR-STOL X NY Sunshine"
                className="uk-transition-fade uk-position-cover"
                src="https://player.vimeo.com/video/325811367?title=0&byline=0&portrait=0"
                width="600"
                height="338"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div>
          <div id="blankCard" className="uk-card" />
        </div>
        <div>
          <div
            id="blankCard"
            className="uk-card uk-card-muted uk-flex"
            style={{
              width: "500px",
              height: "281px"
            }}
          />
        </div>
        <div>
          <div id="card6" className="uk-card uk-card-muted uk-flex">
            <div
              className="uk-inline-clip uk-transition-toggle uk-position-cover"
              tabIndex="0"
            >
              <img src="/Assets/Landing/pro6.png" alt="BR-STOL Memoriam Gym" />
              <div className="uk-overlay uk-light uk-position-top">
                <h4>BR-STOL Memoriam Gym</h4>
              </div>
              <iframe
                title="BR-STOL Memoriam Gym"
                className="uk-transition-fade uk-position-cover"
                src="https://player.vimeo.com/video/329699071?title=0&byline=0&portrait=0"
                width="500"
                height="281"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div>
          <div id="blankCard" className="uk-card" />
        </div>
      </CardContainer>
    </Layout>
  );
}
export default Landing;
