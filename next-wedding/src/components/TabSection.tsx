"use client";

import { useEffect } from "react";
import "baguettebox.js/dist/baguetteBox.min.css";

type Bride = {
  name: string;
  instagram: string;
  photo: string;
  child: string;
  name_mother: string;
  name_father: string;
};

type Detail = {
  type: string;
  date: string;
  address: string;
  maps: string;
  calendar: string;
};

type Gallery = {
  title: string;
  images: string[];
  video?: string;
};

type Gift = {
  address: string;
  note?: string;
  maps: string;
};

type Bank = {
  name: string;
  logo: string;
  acc_number: string;
  acc_name: string;
};

type Wish = {
  note: string;
};

type TabSectionProps = {
  brides: Bride[];
  details: Detail[];
  galleries: Gallery[];
  thanks: Wish[];
  gifts: Gift[];
  banks: Bank[];
  to: string;
};

export default function TabSection({
  brides,
  details,
  galleries,
  thanks,
  gifts,
  banks,
  to,
}: TabSectionProps) {
  useEffect(() => {
    // Initialize tab functionality from legacy script
    const script = document.createElement("script");
    script.src = "/assets/undangan/js/main.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="details" className="s-details">
      <div className="row">
        <div className="column">
          <nav className="tab-nav">
            <ul className="tab-nav__list">
              <li data-id="tab-couple" className="active">
                <a href="#tab-couple">
                  <span>Bride &amp; Groom</span>
                </a>
              </li>
              <li>
                <a href="#tab-event">
                  <span>Event</span>
                </a>
              </li>
              <li>
                <a href="#tab-gallery">
                  <span>Gallery</span>
                </a>
              </li>
              <li>
                <a href="#tab-wishes">
                  <span>Wishes</span>
                </a>
              </li>
              <li>
                <a href="#tab-gift">
                  <span>Gift</span>
                </a>
              </li>
            </ul>
          </nav>

          <div className="tab-content">
            <div id="tab-couple" className="tab-content__item text-center" data-tab-active>
              <div className="row">
                <div className="column">
                  <div className="row">
                    {brides.map((item) => (
                      <div className="column lg-6 tab-12" key={item.name}>
                        <p className="name-bride">{item.name}</p>
                        <a href={item.instagram} target="_blank" rel="noreferrer">
                          <p className="desc-bride">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="bi bi-instagram"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                            </svg>
                            <b>instagram</b>
                          </p>
                        </a>
                        <br />
                        <img src={item.photo} style={{ height: "500px", width: "auto" }} alt={item.name} />
                        <p className="desc-bride">{item.child}</p>
                        <p>
                          {item.name_mother}
                          <br />&amp;<br />
                          {item.name_father}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div id="tab-event" className="tab-content__item" aria-hidden="true">
              <div className="row tab-content__item-header">
                <div className="column">
                  <h2>Save the date</h2>
                </div>
              </div>

              <div className="row">
                <div className="column">
                  <p className="desc">Kami sangat berharap anda dapat hadir di moment bahagia ini</p>
                </div>
              </div>

              <div className="row services-list block-lg-one-half block-md-one-half block-tab-whole">
                {details.map((item) => (
                  <div className="column services-list__item" key={item.type}>
                    <div className="services-list__item-content">
                      <h4 className="item-title">{item.type}</h4>
                      <p className="desc-bride">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-calendar3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                          <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                        {item.date}
                        <br />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-clock"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                        </svg>
                        {item.date}
                        <br />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-geo-alt"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        {item.address}
                        <br />
                        <br />
                        <a href={item.maps} className="btn btn--stroke u-fullwidth" target="_blank" rel="noreferrer">
                          View Maps
                        </a>
                        <a href={item.calendar} className="btn btn--stroke u-fullwidth" target="_blank" rel="noreferrer">
                          Add to calendar
                        </a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {galleries.map((gallery) => (
              <div id="tab-gallery" className="tab-content__item" key={gallery.title} aria-hidden="true">
                <div className="tz-gallery">
                  <div className="row">
                    {gallery.images.map((image) => (
                      <div className="col-sm-6 col-md-4" key={image}>
                        <a className="lightbox" href={image}>
                          <img src={image} alt="Gallery item" />
                        </a>
                      </div>
                    ))}
                  </div>
                  {gallery.video && (
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        className="embed-responsive-item"
                        src={gallery.video}
                        title="Gallery video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
              </div>
            ))}

            <div id="tab-wishes" className="tab-content__item" aria-hidden="true">
              {thanks.map((item, idx) => (
                <p key={idx}>{item.note}</p>
              ))}
              <br />
              <div className="row">
                <div className="column lg-6 tab-12">
                  <p className="desc-bride">
                    Share your wishes for {to}!
                  </p>
                </div>
                <div className="column lg-6 tab-12" style={{ height: "500px", overflow: "auto" }}>
                  <p>
                    <b>Ucapan &amp; Doa</b>
                  </p>
                  {thanks.map((item, idx) => (
                    <p key={`wish-${idx}`}>{item.note}</p>
                  ))}
                </div>
              </div>
            </div>

            <div id="tab-gift" className="tab-content__item" aria-hidden="true">
              <p>Tanpa mengurangi rasa hormat, bagi anda yang ingin memberikan tanda kasih untuk mempelai dapat melalui:</p>
              <div className="row">
                <div className="column">
                  <div className="row">
                    {gifts.map((item, idx) => (
                      <div className="column lg-6 tab-12" key={`gift-${idx}`}>
                        <h4>Alamat</h4>
                        <p className="desc">
                          {item.address}
                          <br />
                          {item.note ? `Patokan: ${item.note}` : null}
                          <a href={item.maps} target="_blank" rel="noreferrer">
                            {item.maps}
                          </a>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="column">
                  <div className="row">
                    {banks.map((item) => (
                      <div className="column lg-6 tab-12" key={item.name}>
                        <h4>{item.name}</h4>
                        <img src={item.logo} style={{ height: "30px", width: "auto" }} alt={item.name} />
                        <p className="desc">
                          {item.acc_number}
                          <br />a/n {item.acc_name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer>
            <div className="ss-copyright">
              <span>© Copyright {new Date().getFullYear()}</span>
              <span>
                Developed by
                <a href="https://wa.me/6287823327307" target="_blank" rel="noreferrer">
                  danixsofyan
                </a>
              </span>
            </div>
          </footer>
        </div>
      </div>

      <div className="ss-go-top">
        <a className="smoothscroll" title="Back to Top" href="#top">
          <span>Back to Top</span>
          <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
            <path d="M7.5 1.5l.354-.354L7.5.793l-.354.353.354.354zm-.354.354l4 4 .708-.708-4-4-.708.708zm0-.708l-4 4 .708.708 4-4-.708-.708zM7 1.5V14h1V1.5H7z" fill="currentColor"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}
