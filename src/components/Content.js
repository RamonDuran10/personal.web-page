import React from "react";
import "./styles.css";

const Content = () => {
  return (
    <div className="content">
      <div className="banner col-">
        <h1>Futbol Legends</h1>
      </div>
      <div className="sub-banner ">
        <p>Disigned with React</p>
      </div>
      <div className="subtitle">
        {" "}
        <h2>Latest News</h2>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center">
              <img
                src="https://estaticos-cdn.sport.es/clip/7e68e975-fb6d-494d-bcd0-a2ed40f91377_alta-libre-aspect-ratio_default_0.jpg"
                className="card-img-top"
                alt="imagen"
              />
              <div className="card-body">
                <h5>
                  La salida de Messi podría costarle 137 millones al Barça
                </h5>
                <a
                  href="https://www.sport.es/es/noticias/barca/salida-messi-costarle-137-millones-11978592"
                  alt="logo"
                  target="_blank"
                  rel="noreferrer"
                >
                  See more...
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <img
                src="https://i2-prod.mirror.co.uk/incoming/article24720565.ece/ALTERNATES/r500/0_MAIN-MIRRORMESSIPSG.jpg"
                className="card-img-top"
                alt="imagen"
              />
              <div className="card-body">
                <h5>
                  Paris Saint-Germain are reportedly set to put as many as 10
                  players on their transfer list as they seek to fund the
                  mega-money signing of Lionel Messi.
                </h5>
                <a
                  href="https://www.mirror.co.uk/sport/football/transfer-news/psg-lionel-messi-transfer-news-24718228"
                  alt="logo"
                  target="_blank"
                  rel="noreferrer"
                >
                  See more...
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <img
                src="https://www.thesun.co.uk/wp-content/uploads/2021/08/crop-15821528.jpg?w=660"
                className="card-img-top"
                alt="imagen"
              />
              <div className="card-body">
                <h5>
                  ON THE BOX BT Sport announce new broadcast deal to show Serie
                  A until 2024 with Italian and German football now on UK TV
                </h5>
                <a
                  href="https://www.thesun.co.uk/sport/football/15820965/bt-sport-serie-a-2024-italian-german-football-uk-tv/"
                  alt="logo"
                  target="_blank"
                  rel="noreferrer"
                >
                  See more
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <img
                src="https://www.thesun.co.uk/wp-content/uploads/2021/08/crop-15818111.jpg?w=660"
                className="card-img-top"
                alt="imagen"
              />
              <div className="card-body">
                <h5>
                  DOUBLE WHAMMY Barcelona blow with Sergio Aguero out until
                  November as he suffers muscle injury while Messi closes in on
                  PSG transfer
                </h5>
                <a
                  href="https://www.thesun.co.uk/sport/football/15817701/sergio-aguero-injured-november-barcelona-lionel-messi/"
                  alt="logo"
                  target="_blank"
                  rel="noreferrer"
                >
                  See more
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <img
                src="https://estaticos-cdn.sport.es/clip/ae1ecef5-0dc7-41e2-98d1-7a86770c9068_baja-aspect-ratio_default_0.jpg"
                className="card-img-top"
                alt="imagen"
              />
              <div className="card-body">
                <h5>
                  Dani Alves a Leo Messi: "El más grande de todos, puedes
                  superarme cuando quieras, será una asistencia más para vos"
                </h5>
                <a
                  href="https://www.sport.es/es/noticias/barca/dani-alves-leo-messi-grande-11978507"
                  alt="logo"
                  target="_blank"
                  rel="noreferrer"
                >
                  See more
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <img
                src="https://estaticos-cdn.sport.es/clip/a48083b0-9747-4615-a0de-88fa9155218a_media-libre-aspect-ratio_default_0.jpg"
                className="card-img-top"
                alt="imagen"
              />
              <div className="card-body">
                <h5>
                  El Bayern de Múnich confirmó públicamente tener interés en
                  Haaland.
                </h5>
                <a
                  href="https://www.sport.es/es/noticias/bundesliga/bayern-haaland-11979252"
                  alt="logo"
                  target="_blank"
                  rel="noreferrer"
                >
                  See more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
