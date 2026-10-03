import { useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Clock3,
  Instagram,
  MapPin,
  Menu as MenuIcon,
  Music2,
  X,
} from 'lucide-react';

type MenuItem = {
  name: string;
  price: string;
  description?: string;
};

type MenuCategory = {
  title: string;
  items: MenuItem[];
};

const menuCategories: MenuCategory[] = [
  {
    title: 'CHICKEN BURGER',
    items: [
      { name: 'First Street', price: 'Rp23.000', description: 'Soft bun, signature sauce, marinated chicken patty, lettuce, dan caramelized onion.' },
      { name: 'Cheese Street', price: 'Rp28.000', description: 'Soft bun, signature sauce, marinated chicken patty, lettuce, caramelized onion, dan red cheddar cheese.' },
      { name: 'Double Lane', price: 'Rp38.000', description: 'Soft bun, signature sauce, double marinated chicken patty, lettuce, caramelized onion, dan double red cheddar cheese.' },
    ],
  },
  {
    title: 'BEEF BURGER',
    items: [
      { name: 'Beef Avenue', price: 'Rp33.000', description: 'Soft bun, signature sauce, beef patty, lettuce, dan caramelized onion.' },
      { name: 'Cheese Avenue', price: 'Rp38.000', description: 'Soft bun, signature sauce, beef patty, lettuce, caramelized onion, dan red cheddar cheese.' },
      { name: 'Double District', price: 'Rp50.000', description: 'Soft bun, signature sauce, double beef patty, lettuce, caramelized onion, dan double red cheddar cheese.' },
    ],
  },
  {
    title: 'SIDE DISH',
    items: [
      { name: 'Hand-Cut Fries', price: 'Rp15.000', description: 'Kentang potong segar, digoreng langsung.' },
      { name: 'Cheese Fries', price: 'Rp20.000', description: 'Hand-cut fries dengan creamy cheese sauce.' },
      { name: 'Beef Loaded Fries', price: 'Rp30.000', description: 'Hand-cut fries dengan creamy cheese sauce dan beef patty.' },
    ],
  },
  {
    title: 'DRINK & EXTRA',
    items: [
      { name: 'Mineral Water', price: 'Rp5.000' },
      { name: 'Cola', price: 'Rp5.000' },
      { name: 'Extra Ice', price: 'Rp2.000' },
    ],
  },
];

const socialProfiles: { name: string; handle: string; icon: typeof Instagram; url: string | null }[] = [
  { name: 'Instagram', handle: 'Burggrrr', icon: Instagram, url: 'https://www.instagram.com/burggrrr?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==' },
  { name: 'TikTok', handle: 'Burggrrr', icon: Music2, url: null },
];

const burgerPhotoUrl = 'https://images.pexels.com/photos/34407499/pexels-photo-34407499.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const mapsUrl = 'https://www.google.com/maps?q=Jl.+Letjen+Ibrahim+Adjie+No.1312,+Rancabango,+Kec.+Tarogong+Kaler,+Kabupaten+Garut,+Jawa+Barat+44151&ftid=0x2e68b0966d33e7d7:0x2a723dd94a31e595&entry=gps&shh=CAE&lucs=,94297699,100795621,94231188,94280568,100821559,47071704,100809209,94218641,94282134,100835694,94286869,100820247,100822504,100838873&g_ep=CAISEjI2LjM4LjEuOTgwODE1NDQ1MBgAIIgnKoUBLDk0Mjk3Njk5LDEwMDc5NTYyMSw5NDIzMTE4OCw5NDI4MDU2OCwxMDA4MjE1NTksNDcwNzE3MDQsMTAwODA5MjA5LDk0MjE4NjQxLDk0MjgyMTM0LDEwMDgzNTY5NCwxMDA4MjAyNDcsMTAwODIyNTA0LDEwMDgzODg3M0ICSUQ%3D&skid=66839b9a-62e6-4321-8100-ab99881e3fd0&g_st=ic';

function CheckerStrip({ dark = false }: { dark?: boolean }) {
  return <div className={`checker-strip${dark ? ' checker-strip-dark' : ''}`} aria-hidden="true" />;
}

function BajajIllustration() {
  return (
    <div className="bajaj-stage">
      <img className="bajaj-image" src="/images/Gerobak_Burger_Bajaj_Retro_BURGGRRR.png" alt="Ilustrasi bajaj gerobak burger BURGGRRR" />
      <div className="bajaj-road" aria-hidden="true"><span /><span /><span /></div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand-lockup" href="#beranda" onClick={closeMenu} aria-label="BURGGRRR, kembali ke beranda">
          <img src="/images/Burger_logo.jpg" alt="Logo BURGGRRR" />
        </a>
        <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}>
          {menuOpen ? <X size={25} /> : <MenuIcon size={25} />}
        </button>
        <nav id="main-navigation" className={`main-navigation${menuOpen ? ' is-open' : ''}`} aria-label="Navigasi utama">
          <a href="#beranda" onClick={closeMenu}>Beranda</a>
          <a href="#menu" onClick={closeMenu}>Menu</a>
          <a href="#lokasi" onClick={closeMenu}>Lokasi</a>
          <a className="button button-small" href="#menu" onClick={closeMenu}>Lihat Menu <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <main>
        <section id="beranda" className="hero-section section-frame">
          <div className="hero-copy hero-copy-reveal">
            <div className="eyebrow"><span className="eyebrow-dot" /> LOCAL BURGER JOINT <span className="eyebrow-line" /></div>
            <h1>FEED<br /><em>YOUR</em><br />GRRR<span>.</span></h1>
            <p className="hero-description">Burger dengan signature sauce, keju leleh, dan pilihan beef atau chicken. Siap nemenin waktu lapar kamu.</p>
            <div className="hero-actions">
              <a className="button" href="#menu">Lihat Menu <ArrowUpRight size={18} /></a>
              <a className="text-link" href="#lokasi">Mampir ke Burggrrr <ArrowDown size={16} /></a>
            </div>
            <div className="hero-labels"><span>SMASH BURGER</span><span>BEEF PATTY 100% SAPI <b>•</b> HALAL</span></div>
          </div>
          <div className="hero-visual bajaj-visual"><BajajIllustration /></div>
        </section>
        <CheckerStrip />

        <section id="menu" className="menu-section section-frame">
          <div className="section-heading">
            <div><p className="kicker">THE GOODS / 01</p><h2>PILIH<br /><em>BURGERMU.</em></h2></div>
            <p className="heading-note">Dibikin fresh, disajikan hangat,<br />dimakan sampai tidak bersisa.</p>
          </div>
          <div className="menu-feature">
            <img src={burgerPhotoUrl} alt="Burger dengan keju leleh dan beef patty" loading="lazy" />
            <div><p className="kicker">MADE TO ORDER</p><h3>GIGITAN<br /><em>PERTAMA.</em></h3><p>Hangat dari dapur, penuh signature sauce, dan siap nemenin waktu lapar kamu.</p></div>
          </div>
          <div className="menu-grid">
            {menuCategories.map((category, categoryIndex) => (
              <article className={`menu-category menu-category-${categoryIndex + 1}`} key={category.title}>
                <div className="category-title"><span>0{categoryIndex + 1}</span><h3>{category.title}</h3></div>
                <div className="menu-items">
                  {category.items.map((item) => (
                    <div className="menu-item" key={item.name}>
                      <div className="item-top"><h4>{item.name}</h4><strong>{item.price}</strong></div>
                      {item.description && <p>{item.description}</p>}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="brand-banner">
          <div className="banner-checker banner-checker-left" aria-hidden="true" />
          <div className="banner-inner section-frame">
            <div className="banner-copy"><p className="kicker cream-kicker">NO BAD DAYS / ONLY GOOD BURGERS</p><h2>LAPAR?<br /><em>LET’S</em><br />BURGGRRR<span>.</span></h2><a className="button button-cream" href="#lokasi">Cek Lokasi <ArrowUpRight size={18} /></a></div>
            <div className="banner-product" aria-hidden="true">
              <img src="/images/Produk.png" alt="" />
            </div>
          </div>
          <div className="banner-checker banner-checker-right" aria-hidden="true" />
        </section>

        <section id="lokasi" className="location-section section-frame">
          <div className="location-heading"><p className="kicker">COME SAY HI / 02</p><h2>MAMPIR,<br /><em>YUK!</em></h2></div>
          <div className="location-content">
            <div className="location-card main-location-card"><div className="card-icon"><MapPin size={22} /></div><p className="card-label">RESTORAN BURGER</p><h3>Jl. Letjen Ibrahim Adjie<br /><span>(Warung Marema Bersama)</span></h3><a className="button" href={mapsUrl} target="_blank" rel="noreferrer">Cari di Google Maps <ArrowUpRight size={18} /></a></div>
            <div className="location-card hours-card"><div className="card-icon"><Clock3 size={22} /></div><p className="card-label">OPENING HOURS</p><h3>OPEN EVERYDAY</h3><div className="hours-list"><p>Senin–Sabtu: <strong>17.00–20.00 WIB</strong></p><p>Minggu: <strong>07.00 WIB–Sold out</strong></p></div></div>
          </div>
        </section>

        <section className="social-section section-frame"><div className="social-heading"><p className="kicker">STAY HUNGRY / 03</p><h2>FOLLOW<br /><em>THE GRRR.</em></h2></div><div className="social-list">{socialProfiles.map(({ name, handle, icon: Icon, url }) => <div className="social-row" key={name}>{url ? <a href={url} target="_blank" rel="noreferrer"><Icon size={25} /><span>{name}<b>{handle}</b></span><ArrowUpRight size={19} /></a> : <div className="social-unlinked"><Icon size={25} /><span>{name}<b>{handle}</b></span></div>}</div>)}</div></section>
      </main>

      <footer className="site-footer"><CheckerStrip dark /><div className="footer-inner section-frame"><img src="/images/Burger_logo.jpg" alt="Logo BURGGRRR" /><p>BURGER ENAK, MOOD NAIK.</p><span>© BURGGRRR</span></div></footer>
    </div>
  );
}

export default App;
