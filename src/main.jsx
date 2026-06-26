import React from 'react'
import { createRoot } from 'react-dom/client'
import { Heart, QrCode, Images, MessageCircle, Music, Video, ShieldCheck, Truck, CreditCard, MapPin, Camera, Mail, Phone, ChevronRight, Building2, Sparkles } from 'lucide-react'
import './styles.css'

const nav = ['Inicio', 'Memorial', 'Placa QR', 'FAQ', 'Contacto', 'Para empresas']

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <WhatIs />
      <HowWorks />
      <Plaque />
      <Faq />
      <Business />
      <Discounts />
      <Packaging />
      <Contact />
      <Footer />
    </main>
  )
}

function Header() {
  return <header className="header">
    <a className="brand" href="#inicio">
      <span>Recuerdos<br/>Compartidos</span>
    </a>
    <nav>
      {nav.map(item => <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`}>{item}</a>)}
    </nav>
    <a className="smallCta" href="https://wa.me/5493516805117" target="_blank">WhatsApp</a>
  </header>
}

function Hero() {
  return <section id="inicio" className="hero">
    <div className="heroBg" />
    <div className="heroContent">
      <div className="pill"><Sparkles size={16}/> Innovación en memoriales multimedia</div>
      <h1>La memoria de un ser querido, viva en un espacio digital íntimo.</h1>
      <p>Creamos memoriales multimedia accesibles por código QR para compartir biografía, fotos, videos, audios y mensajes con familiares y amigos autorizados.</p>
      <div className="heroActions">
        <a className="btn primary" href="#contacto">Solicitar información <ChevronRight size={18}/></a>
        <a className="btn ghost" href="#memorial">Ver cómo funciona</a>
      </div>
    </div>
    <div className="quote">“La luz de tu amor se aviva toda vez que compartimos tus recuerdos.”</div>
  </section>
}

function WhatIs() {
  const cards = [
    ['Biografía', 'Una descripción escrita de su historia de vida.', Heart],
    ['Galería', 'Fotos, audios, música y videos para recordar momentos especiales.', Images],
    ['Mensajes', 'Saludos recordatorios de familiares y amigos.', MessageCircle],
    ['Ubicación', 'La ubicación de la parcela para encontrar fácilmente el lugar de descanso.', MapPin]
  ]
  return <section id="memorial" className="section light">
    <div className="container twoCol">
      <div>
        <span className="eyebrow">Memorial multimedia</span>
        <h2>Un homenaje digital simple, seguro y emotivo.</h2>
        <p>Es un sitio web que permite narrar la historia de vida de un ser querido mediante textos, fotos, audios y videos, creando un espacio personal para rendir homenaje.</p>
        <div className="cardGrid">
          {cards.map(([title, text, Icon]) => <article className="miniCard" key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </div>
      <div className="phoneMock">
        <div className="phoneTop" />
        <img src="/assets/hero-memorial.jpg" alt="Memorial Recuerdos Compartidos" />
        <div className="phoneText">
          <strong>Recuerdos Compartidos</strong>
          <span>Biografía · Galería · Mensajes</span>
        </div>
      </div>
    </div>
  </section>
}

function HowWorks() {
  const steps = [
    ['1', 'Cargá el material', 'Subí textos, imágenes, audios y videos desde el formulario de contacto.'],
    ['2', 'Armamos el memorial', 'El equipo organiza el contenido en una página elegante y privada.'],
    ['3', 'Escaneá la placa', 'La placa QR se adhiere a la lápida o urna y permite acceder al memorial desde el celular.']
  ]
  return <section className="section dark">
    <div className="container">
      <span className="eyebrow aqua">Cómo funciona</span>
      <h2>Del recuerdo familiar a un memorial accesible con QR.</h2>
      <div className="howImg"><img src="/assets/img12.png" alt="Persona escaneando el código QR de una placa en una lápida" /></div>
      <div className="steps">{steps.map(([n, t, d]) => <article className="step" key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div>
      <div className="formats"><Video/> MP4, AVI, WMV <Music/> MP3 y YouTube <Images/> JPG, PNG, GIF</div>
    </div>
  </section>
}

function Plaque() {
  return <section id="placa-qr" className="section light">
    <div className="container twoCol reverse">
      <div className="imageFrame"><img src="/assets/placa-qr.png" alt="Placa con código QR en lápida" /></div>
      <div>
        <span className="eyebrow">Placa conmemorativa</span>
        <h2>Una placa QR resistente para acceder al memorial.</h2>
        <p>La placa está pensada para ser adherida a lápidas o urnas funerarias. El soporte es duradero y resistente a condiciones climáticas.</p>
        <ul className="checks">
          <li><ShieldCheck/> Material perdurable y sin valor comercial.</li>
          <li><QrCode/> Código QR personalizado para cada memorial.</li>
          <li><Truck/> Envío en packaging con la marca.</li>
        </ul>
      </div>
    </div>
  </section>
}

function Business() {
  const benefits = ['Valor agregado para sus clientes', 'Ingresos adicionales', 'Fidelización del cliente', 'Modelo de negocio flexible', 'Bajo costo de implementación', 'Ventaja competitiva']
  return <section id="para-empresas" className="section business">
    <div className="container center">
      <span className="eyebrow aqua">Para empresas · Funerarias y cementerios</span>
      <h2>Una oportunidad de negocio con tecnología emocional.</h2>
      <p>Esta sección está pensada para funerarias, cementerios y aliados comerciales que quieran ofrecer el memorial como un servicio adicional a las familias.</p>
      <div className="benefits">{benefits.map(b => <div key={b}><Building2 size={22}/>{b}</div>)}</div>
    </div>
  </section>
}

function Discounts() {
  const rows = [['10 unidades', '20% de descuento'], ['20 unidades', '30% de descuento'], ['50 unidades', '50% de descuento'], ['Más de 100 unidades', '60% de descuento']]
  return <section className="section light">
    <div className="container center small">
      <span className="eyebrow">Compras al por mayor</span>
      <h2>Descuentos especiales para aliados.</h2>
      <table><thead><tr><th>Cantidad</th><th>Descuento</th></tr></thead><tbody>{rows.map(r => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td></tr>)}</tbody></table>
      <p className="note">Tu propuesta nos interesa.</p>
    </div>
  </section>
}

function Faq() {
  const faqs = [
    ['¿Qué información debo enviar?', 'Texto para biografía, fotos en JPG/PNG/GIF, videos en MP4/AVI/WMV y audios en MP3.'],
    ['¿Cómo se publica el memorial?', 'Se publica en una dirección específica del sitio y se accede escaneando el código QR.'],
    ['¿Cuánto tiempo estará online?', 'Por un período de cinco años, posteriormente renovable.'],
    ['¿Cómo puedo pagar?', 'Tarjetas, transferencia bancaria, billeteras virtuales, PayPal o Mercado Pago.']
  ]
  return <section id="faq" className="section dark faq">
    <div className="container">
      <span className="eyebrow aqua">Preguntas frecuentes</span>
      <h2>Todo claro antes de comenzar.</h2>
      <div className="faqGrid">{faqs.map(([q, a]) => <details key={q} open><summary>{q}</summary><p>{a}</p></details>)}</div>
    </div>
  </section>
}

function Packaging() {
  return <section id="packaging" className="section light">
    <div className="container twoCol reverse">
      <div className="imageFrame"><img src="/assets/paka.png" alt="Packaging de Recuerdos Compartidos con la placa QR y la tarjeta de acceso" /></div>
      <div>
        <span className="eyebrow">Cómo lo entregamos</span>
        <h2>Llega listo, en un packaging cuidado.</h2>
        <p>Cada memorial se entrega en un estuche conmemorativo con la placa QR, una tarjeta con tus credenciales de acceso y las instrucciones para empezar a compartir recuerdos.</p>
        <ul className="checks">
          <li><QrCode/> Placa QR personalizada, lista para adherir.</li>
          <li><ShieldCheck/> Tarjeta con usuario y contraseña privados.</li>
          <li><Truck/> Presentación elegante, ideal para entregar o regalar.</li>
        </ul>
      </div>
    </div>
  </section>
}

function Contact() {
  return <section id="contacto" className="section contact">
    <div className="container contactBox">
      <div>
        <span className="eyebrow">Contacto</span>
        <h2>Ponte en contacto con nosotros</h2>
        <p>Córdoba, Argentina · www.recuerdos-compartidos.com.ar</p>
        <div className="contactLinks">
          <a href="https://wa.me/5493516805117" target="_blank"><Phone/> +54 9 351 680 5117</a>
          <a href="mailto:info@recuerdos-compartidos.com.ar"><Mail/> info@recuerdos-compartidos.com.ar</a>
          <a href="https://www.instagram.com/recuerdosscompartidos" target="_blank"><Camera/> @recuerdosscompartidos</a>
          <span><MapPin/> Córdoba, Argentina</span>
        </div>
      </div>
      <form onSubmit={(e)=>e.preventDefault()}>
        <input placeholder="Nombre y apellido" />
        <input placeholder="Teléfono o email" />
        <textarea placeholder="Contanos qué necesitás" rows="5" />
        <button className="btn primary"><CreditCard size={18}/> Enviar consulta</button>
      </form>
    </div>
  </section>
}

function Footer() {
  return <footer>© {new Date().getFullYear()} Recuerdos Compartidos · Memoriales multimedia con QR</footer>
}

createRoot(document.getElementById('root')).render(<App />)
