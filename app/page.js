const missions = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet.",
];

const values = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed.",
  "Mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel.",
  "Et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed.",
  "Dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus.",
];

const historyMoments = [
  {
    year: "2016",
    title: "Lorem ipsum dolor",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    year: "2019",
    title: "Consectetur adipiscing",
    copy: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.",
  },
  {
    year: "2024",
    title: "Eiusmod tempor incididunt",
    copy: "Cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt.",
  },
];

const stats = [
  { value: "12+", label: "Lorem ipsum dolor sit amet" },
  { value: "24/7", label: "Sed do eiusmod tempor" },
  { value: "48", label: "Ut labore et dolore magna" },
];

const clients = [
  { name: "Lorem Alpha", logo: "/clients/lorem-alpha.svg" },
  { name: "Ipsum Beta", logo: "/clients/ipsum-beta.svg" },
  { name: "Dolor Gamma", logo: "/clients/dolor-gamma.svg" },
  { name: "Sit Amet", logo: "/clients/sit-amet.svg" },
];

const clientTrack = [...clients, ...clients, ...clients];

const infoItems = [
  { label: "Nama Perusahaan", value: "Ryedummy" },
  { label: "Alamat", value: "Jl. Lorem Ipsum No. 123, Dolor District, Jakarta 12345" },
  { label: "No. Telepon", value: "(021) 0000 0000" },
  { label: "Email", value: "hello@ryedummy.example" },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </div>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="info-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      <div className="page-glow glow-one" aria-hidden="true" />
      <div className="page-glow glow-two" aria-hidden="true" />
      <div className="page-glow glow-three" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark">R</span>
          <span>ryedummy</span>
        </a>

        <nav className="main-nav" aria-label="Navigasi halaman">
          <a href="#sejarah">Sejarah</a>
          <a href="#visi-misi">Visi & Misi</a>
          <a href="#nilai">Nilai</a>
          <a href="#struktur">Struktur</a>
          <a href="#informasi">Informasi</a>
          <a href="#clients">Clients</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid">
          <div className="hero-copy appear delay-1">
            <p className="eyebrow">Company Profile</p>
            <h1>Ryedummy</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>

            <div className="hero-badges">
              <span>Lorem ipsum</span>
              <span>Dolor sit amet</span>
              <span>Consectetur elit</span>
            </div>

            <div className="hero-actions">
              <a className="primary-link" href="#informasi">
                Informasi Perusahaan
              </a>
              <a className="secondary-link" href="#clients">
                Lihat Clients
              </a>
            </div>
          </div>

          <div className="hero-visual appear delay-2">
            <div className="visual-orb orb-one" />
            <div className="visual-orb orb-two" />

            <article className="floating-card primary-card">
              <p className="mini-eyebrow">Overview</p>
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </article>

            <article className="floating-card secondary-card">
              <span>01</span>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </article>

            <article className="floating-card tertiary-card">
              <span>02</span>
              <p>Ut enim ad minim veniam quis nostrud exercitation.</p>
            </article>
          </div>
        </div>

        <div className="hero-ribbon appear delay-3">
          {stats.map((item) => (
            <article className="ribbon-card" key={item.value}>
              <strong>{item.value}</strong>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="sejarah">
        <div className="section-band history-band">
          <div className="history-layout">
            <div className="history-intro">
              <SectionHeading
                eyebrow="Sejarah"
                title="Perjalanan Ryedummy"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />

              <div className="history-note">
                <p className="mini-eyebrow">Highlights</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt
                  ornare massa eget egestas purus viverra accumsan in nisl nisi.
                </p>
              </div>
            </div>

            <div className="history-track">
              {historyMoments.map((item) => (
                <article className="timeline-card" key={item.year}>
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="visi-misi">
        <div className="vision-layout">
          <article className="vision-card">
            <SectionHeading
              eyebrow="Visi"
              title="Visi Perusahaan"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis."
            />

            <div className="vision-pills">
              <span>Clarity</span>
              <span>Growth</span>
              <span>Impact</span>
            </div>
          </article>

          <article className="mission-card">
            <SectionHeading
              eyebrow="Misi"
              title="Misi Perusahaan"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <ul className="mission-list">
              {missions.map((mission) => (
                <li key={mission}>{mission}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="content-section" id="nilai">
        <SectionHeading
          eyebrow="Nilai Perusahaan"
          title="Prinsip Kerja Ryedummy"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <div className="values-mosaic">
          {values.map((value, index) => (
            <article className={`value-card tone-${index + 1}`} key={value}>
              <span className="value-number">0{index + 1}</span>
              <p>{value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="struktur">
        <div className="org-layout">
          <div className="org-panel">
            <SectionHeading
              eyebrow="Struktur Organisasi"
              title="Bagan Organisasi"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <div className="tree-wrapper">
              <ul className="org-tree">
                <li>
                  <div className="tree-node">Ryedummy</div>
                  <ul>
                    <li>
                      <div className="tree-node">Direktur Utama Lorem</div>
                      <ul>
                        <li>
                          <div className="tree-node">Divisi Operasional Ipsum</div>
                        </li>
                        <li>
                          <div className="tree-node">Divisi Keuangan Dolor</div>
                        </li>
                        <li>
                          <div className="tree-node">Divisi Pengembangan Sit</div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="tree-node">Komisaris Amet</div>
                    </li>
                    <li>
                      <div className="tree-node">Sekretariat Elit</div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <aside className="org-sidecard">
            <p className="mini-eyebrow">Core Structure</p>
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Arcu vitae elementum
              curabitur vitae nunc sed velit dignissim sodales.
            </p>
            <ul className="org-points">
              <li>Lorem ipsum dolor sit amet consectetur adipiscing elit.</li>
              <li>Sed do eiusmod tempor incididunt ut labore et dolore magna.</li>
              <li>Ut enim ad minim veniam quis nostrud exercitation ullamco.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="content-section" id="informasi">
        <div className="info-layout">
          <article className="company-card">
            <SectionHeading
              eyebrow="Informasi Perusahaan"
              title="Detail Kontak"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />

            <div className="info-grid">
              {infoItems.map((item) => (
                <InfoCard key={item.label} label={item.label} value={item.value} />
              ))}
            </div>
          </article>

          <article className="office-card">
            <div className="office-map" aria-hidden="true">
              <span className="map-line line-one" />
              <span className="map-line line-two" />
              <span className="map-line line-three" />
              <span className="map-point point-one" />
              <span className="map-point point-two" />
            </div>
            <p className="mini-eyebrow">Office Snapshot</p>
            <h3>Lorem ipsum office overview</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Eu facilisis sed
              odio morbi quis commodo odio aenean sed.
            </p>
          </article>
        </div>
      </section>

      <section className="content-section" id="clients">
        <div className="clients-head">
          <SectionHeading
            eyebrow="Clients"
            title="Dummy Client Showcase"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

        </div>

        <div className="client-marquee">
          <div className="client-track">
            {clientTrack.map((client, index) => (
              <article className="client-card" key={`${client.name}-${index}`}>
                <img src={client.logo} alt={`Logo ${client.name}`} />
                <h3>{client.name}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="page-footer">
        <p>Ryedummy</p>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
      </footer>
    </main>
  );
}
