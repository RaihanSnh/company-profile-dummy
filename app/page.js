const missions = [
  "Menyediakan layanan konsultasi dan implementasi yang membantu perusahaan menata proses kerja, mempercepat koordinasi tim, dan menjaga kualitas layanan secara konsisten di setiap tahap operasional.",
  "Mengembangkan solusi digital yang mudah dipakai, relevan dengan kebutuhan bisnis, serta dapat diukur dampaknya terhadap efisiensi, transparansi data, dan kecepatan pengambilan keputusan.",
  "Membangun kemitraan jangka panjang melalui komunikasi yang terbuka, pendampingan yang responsif, dan perencanaan kerja yang realistis agar perubahan dapat dijalankan secara bertahap dan berkelanjutan.",
];

const values = [
  {
    title: "Integritas dalam Eksekusi",
    copy: "Kami menempatkan kejelasan komitmen, konsistensi kualitas kerja, dan tanggung jawab terhadap hasil sebagai dasar dalam setiap proyek. Bagi Ryedummy, kepercayaan klien dibangun dari kemampuan untuk menepati janji, menyampaikan progres secara jujur, dan menyelesaikan pekerjaan dengan standar yang dapat dipertanggungjawabkan.",
  },
  {
    title: "Kolaborasi yang Sehat",
    copy: "Kami percaya solusi terbaik lahir dari proses kerja yang terbuka dan saling mendengar. Karena itu, setiap tim didorong untuk aktif berdiskusi, memahami kebutuhan lintas fungsi, dan menyelaraskan keputusan agar pekerjaan tidak berjalan sendiri-sendiri, melainkan saling menguatkan.",
  },
  {
    title: "Fokus pada Dampak",
    copy: "Setiap inisiatif yang kami jalankan harus memiliki manfaat yang nyata, baik dalam bentuk efisiensi waktu, perbaikan alur kerja, peningkatan layanan, maupun kualitas data yang lebih baik. Kami tidak mengejar perubahan yang rumit bila hasil yang dibutuhkan dapat dicapai dengan pendekatan yang lebih sederhana dan efektif.",
  },
  {
    title: "Tumbuh Secara Adaptif",
    copy: "Ryedummy memandang perubahan sebagai bagian dari pertumbuhan. Kami membangun budaya belajar yang mendorong tim untuk cepat beradaptasi, tetap rapi dalam bekerja, dan siap menyesuaikan strategi ketika kebutuhan bisnis bergerak lebih cepat daripada rencana awal.",
  },
];

const historyMoments = [
  {
    year: "2016",
    title: "Berdiri sebagai mitra penataan proses kerja",
    copy: "Ryedummy memulai perjalanan sebagai perusahaan pendamping operasional yang membantu usaha menengah merapikan alur administrasi, layanan pelanggan, dan koordinasi tim inti.",
  },
  {
    year: "2019",
    title: "Memperluas layanan ke integrasi sistem pendukung",
    copy: "Setelah memahami kebutuhan klien yang semakin kompleks, Ryedummy menambahkan layanan pengembangan dashboard, dokumentasi proses, dan integrasi sistem kerja yang lebih terukur.",
  },
  {
    year: "2024",
    title: "Menguatkan posisi sebagai partner transformasi bertahap",
    copy: "Ryedummy fokus pada pendekatan implementasi yang realistis, yaitu menggabungkan strategi, perbaikan operasional, dan solusi digital secara bertahap agar perubahan lebih mudah diterapkan.",
  },
];

const stats = [
  { value: "8 Tahun", label: "Pengalaman tim inti dalam pendampingan operasional" },
  { value: "35+ Proyek", label: "Inisiatif transformasi yang ditangani lintas sektor" },
  { value: "24/7", label: "Komitmen respons awal untuk kebutuhan prioritas" },
];

const clients = [
  {
    name: "PT Nusa Aruna",
    logo: "/clients/lorem-alpha.svg",
    description: "Perusahaan distribusi regional yang membutuhkan standardisasi alur kerja dan pelaporan cabang.",
  },
  {
    name: "PT Tirta Logika",
    logo: "/clients/ipsum-beta.svg",
    description: "Mitra dummy untuk proyek penataan dashboard operasional dan pemetaan proses layanan internal.",
  },
  {
    name: "CV Sentra Prima",
    logo: "/clients/dolor-gamma.svg",
    description: "Usaha berkembang yang memerlukan pendampingan prosedur kerja, dokumentasi, dan penguatan koordinasi tim.",
  },
  {
    name: "PT Rimba Karya",
    logo: "/clients/sit-amet.svg",
    description: "Perusahaan dengan kebutuhan integrasi informasi proyek, monitoring progres, dan perbaikan komunikasi lintas unit.",
  },
];

const clientTrack = [...clients, ...clients, ...clients];

const infoItems = [
  { label: "Nama Perusahaan", value: "PT Ryedummy Solusi Nusantara" },
  { label: "Bidang Usaha", value: "Konsultasi operasional dan solusi digital bisnis" },
  { label: "Alamat", value: "Jl. Danau Cerah No. 18, Kebayoran Baru, Jakarta Selatan 12160" },
  { label: "No. Telepon", value: "(021) 5098 7788" },
  { label: "Email", value: "halo@ryedummy.co.id" },
  { label: "Website", value: "www.ryedummy.co.id" },
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

function TreeNode({ title, subtitle, root = false }) {
  return (
    <div className={`tree-node${root ? " tree-node-root" : ""}`}>
      <strong>{title}</strong>
      <small>{subtitle}</small>
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

        <details className="mobile-nav">
          <summary aria-label="Buka navigasi">
            <span className="mobile-nav-label">Menu</span>
            <span className="hamburger" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </summary>
          <nav className="mobile-nav-panel" aria-label="Navigasi mobile">
            <a href="#sejarah">Sejarah</a>
            <a href="#visi-misi">Visi & Misi</a>
            <a href="#nilai">Nilai</a>
            <a href="#struktur">Struktur</a>
            <a href="#informasi">Informasi</a>
            <a href="#clients">Clients</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid">
          <div className="hero-copy appear delay-1">
            <p className="eyebrow">Company Profile</p>
            <h1>Ryedummy</h1>
            <p className="lead">
              Ryedummy adalah perusahaan dummy yang bergerak di bidang konsultasi
              operasional, pengembangan sistem pendukung kerja, dan pendampingan
              transformasi proses bisnis. Kami membantu organisasi menata alur kerja,
              memperjelas koordinasi tim, dan menghadirkan layanan yang lebih
              konsisten kepada pelanggan.
            </p>

            <div className="hero-badges">
              <span>Strategi Operasional</span>
              <span>Pengembangan Sistem</span>
              <span>Pendampingan Tim</span>
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
            <div className="hero-visual-stack">
              <article className="floating-card primary-card">
                <p className="mini-eyebrow">Overview</p>
                <h2>Mitra pertumbuhan bisnis yang tertata</h2>
                <p>
                  Ryedummy menggabungkan pemetaan proses, desain solusi, dan eksekusi
                  bertahap supaya perubahan dapat diterapkan tanpa mengganggu operasi
                  harian perusahaan.
                </p>
              </article>

              <div className="hero-mini-grid">
                <article className="floating-card secondary-card">
                  <span>Fokus</span>
                  <p>
                    Perbaikan proses kerja, layanan internal, dan standar
                    operasional.
                  </p>
                </article>

                <article className="floating-card tertiary-card">
                  <span>Metode</span>
                  <p>
                    Implementasi bertahap yang realistis, terukur, dan mudah
                    diadopsi.
                  </p>
                </article>
              </div>
            </div>
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
                description="Ryedummy berkembang dari mitra penataan proses kerja menjadi partner transformasi yang membantu bisnis bergerak lebih rapi, efisien, dan siap bertumbuh."
              />

              <div className="history-note">
                <p className="mini-eyebrow">Highlights</p>
                <p>
                  Perjalanan perusahaan dibangun dari kebutuhan nyata klien: mulai dari
                  pembenahan alur operasional dasar, penyusunan dokumentasi, sampai
                  integrasi sistem pendukung yang membuat keputusan bisnis lebih cepat
                  dan berbasis data.
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
              description="Menjadi mitra pertumbuhan bisnis yang menghadirkan solusi operasional dan digital yang rapi, adaptif, dan mudah diterapkan oleh perusahaan di Indonesia."
            />

            <div className="vision-pills">
              <span>Terukur</span>
              <span>Adaptif</span>
              <span>Kolaboratif</span>
            </div>
          </article>

          <article className="mission-card">
            <SectionHeading
              eyebrow="Misi"
              title="Misi Perusahaan"
              description="Kami membangun pendekatan kerja yang tidak hanya strategis di atas kertas, tetapi juga realistis ketika dijalankan oleh tim di lapangan."
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
          description="Nilai-nilai ini menjadi dasar dalam menyusun strategi, menjalankan proyek, dan membangun hubungan kerja jangka panjang dengan setiap klien."
        />

        <div className="values-mosaic">
          {values.map((value, index) => (
            <article className={`value-card tone-${index + 1}`} key={value.title}>
              <span className="value-number">0{index + 1}</span>
              <h3>{value.title}</h3>
              <p>{value.copy}</p>
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
              description="Struktur organisasi Ryedummy disusun agar pengambilan keputusan tetap cepat, namun koordinasi antar unit tetap jelas dan terkontrol."
            />

            <div className="tree-wrapper">
              <ul className="org-tree">
                <li>
                  <TreeNode
                    root
                    title="PT Ryedummy Solusi Nusantara"
                    subtitle="Arah korporat dan standar layanan"
                  />
                  <ul>
                    <li>
                      <TreeNode
                        title="Dewan Komisaris"
                        subtitle="Pengawasan strategi dan tata kelola"
                      />
                    </li>
                    <li>
                      <TreeNode
                        title="Direktur Utama"
                        subtitle="Kepemimpinan bisnis dan eksekusi"
                      />
                      <ul>
                        <li>
                          <TreeNode
                            title="Manajer Operasional"
                            subtitle="Kualitas layanan dan pengiriman proyek"
                          />
                        </li>
                        <li>
                          <TreeNode
                            title="Manajer Keuangan & Legal"
                            subtitle="Kontrol anggaran dan kepatuhan"
                          />
                        </li>
                        <li>
                          <TreeNode
                            title="Manajer Produk & Teknologi"
                            subtitle="Solusi digital dan integrasi sistem"
                          />
                        </li>
                        <li>
                          <TreeNode
                            title="Manajer Sales & Partnership"
                            subtitle="Relasi klien dan pengembangan pasar"
                          />
                        </li>
                      </ul>
                    </li>
                    <li>
                      <TreeNode
                        title="Sekretaris Perusahaan"
                        subtitle="Administrasi korporat dan dokumentasi"
                      />
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="org-mobile-chart">
                <div className="org-mobile-level single">
                  <TreeNode
                    root
                    title="PT Ryedummy Solusi Nusantara"
                    subtitle="Arah korporat dan standar layanan"
                  />
                </div>

                <div className="org-mobile-line" aria-hidden="true" />

                <div className="org-mobile-level top-level">
                  <TreeNode
                    title="Dewan Komisaris"
                    subtitle="Pengawasan strategi dan tata kelola"
                  />
                  <TreeNode
                    title="Direktur Utama"
                    subtitle="Kepemimpinan bisnis dan eksekusi"
                  />
                  <TreeNode
                    title="Sekretaris Perusahaan"
                    subtitle="Administrasi korporat dan dokumentasi"
                  />
                </div>

                <div className="org-mobile-subsection">
                  <p className="mini-eyebrow">Unit di Bawah Direktur Utama</p>
                  <div className="org-mobile-level grid-two">
                    <TreeNode
                      title="Manajer Operasional"
                      subtitle="Kualitas layanan dan pengiriman proyek"
                    />
                    <TreeNode
                      title="Manajer Keuangan & Legal"
                      subtitle="Kontrol anggaran dan kepatuhan"
                    />
                    <TreeNode
                      title="Manajer Produk & Teknologi"
                      subtitle="Solusi digital dan integrasi sistem"
                    />
                    <TreeNode
                      title="Manajer Sales & Partnership"
                      subtitle="Relasi klien dan pengembangan pasar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="informasi">
        <div className="info-layout">
          <article className="company-card">
            <SectionHeading
              eyebrow="Informasi Perusahaan"
              title="Detail Kontak"
              description="Informasi berikut disiapkan sebagai data dummy company profile yang tetap terlihat profesional dan realistis ketika ditampilkan di halaman publik."
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
            <h3>Kantor pusat yang mendukung kolaborasi tim</h3>
            <p>
              Kantor pusat Ryedummy dirancang sebagai ruang koordinasi untuk tim
              proyek, pertemuan klien, dan evaluasi rutin lintas divisi. Pendekatan
              kerja hybrid tetap dijaga, namun pusat keputusan dan pengendalian mutu
              berada di satu jalur komunikasi yang jelas.
            </p>
          </article>
        </div>
      </section>

      <section className="content-section" id="clients">
        <div className="clients-head">
          <SectionHeading
            eyebrow="Clients"
            title="Dummy Client Showcase"
            description="Daftar berikut menggunakan identitas klien dummy untuk memberi gambaran bagaimana portofolio perusahaan dapat ditampilkan secara ringkas dan rapi."
          />
        </div>

        <div className="client-marquee">
          <div className="client-track">
            {clientTrack.map((client, index) => (
              <article className="client-card" key={`${client.name}-${index}`}>
                <img src={client.logo} alt={`Logo ${client.name}`} />
                <h3>{client.name}</h3>
                <p>{client.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="page-footer">
        <p>PT Ryedummy Solusi Nusantara</p>
        <span>
          Perusahaan dummy untuk company profile dengan tampilan cerah, rapi, dan
          responsif di desktop maupun mobile.
        </span>
      </footer>
    </main>
  );
}
