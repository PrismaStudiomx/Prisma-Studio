import isotipo from "./assets/isotipo prisma.png";
import logo from "./assets/Prismalogo.png";
import oniStudio from "./assets/oni-studio.png";
import sweetWhim from "./assets/sweet-whim.png";
import zanaVida from "./assets/zana-vida.png";
import heroImage from "./assets/hero imagen.png";
export default function App() {
 const projects = [
  {
    name: "Oni Studio",
    category: "Tatuajes",
    image: oniStudio,
<<<<<<< HEAD
    link: "https://oni-studio.vercel.app/",
=======
    link: "https://oniportfolio.netlify.app/",
>>>>>>> 7803afab64893795663ee595d76ac4d52cfd528b
  },

  {
    name: "Sweet Whim",
    category: "Repostería",
    image: sweetWhim,
<<<<<<< HEAD
     link: "https://sweet-whim.vercel.app/",
=======
     link: "https://sweetwhim-site.netlify.app/",
>>>>>>> 7803afab64893795663ee595d76ac4d52cfd528b
  },

  {
    name: "Zana Vida",
    category: "Wellness Store",
    image: zanaVida,
<<<<<<< HEAD
    link: "https://zana-vida.vercel.app/",
=======
    link: "https://zanavida-site.netlify.app/",
>>>>>>> 7803afab64893795663ee595d76ac4d52cfd528b
  },
];

  const services = [
    "Landing pages",
    "Sitios web para negocios",
    "Diseño responsive",
    "Optimización móvil",
    "Soporte y mantenimiento",
  ];

  const process = [
    "Hablamos sobre tu negocio",
    "Diseñamos la propuesta",
    "Desarrollamos tu página",
    "Lanzamos tu sitio",
  ];

  return (
    <div className="bg-[#f5f3ef] text-[#151515] overflow-x-hidden">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#f5f3ef]/80 border-b border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
  src={isotipo}
  alt="Prisma Studio"
  className="w-11 h-11 object-contain"
/>

            <h1 className="text-xl font-semibold tracking-tight">
              Prisma Studio
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-sm text-[#846293]">
            <a href="#Nuestro trabajo" className="hover:text-black transition">
              Nuestro trabajo
            </a>

            <a href="#Lo que hacemos" className="hover:text-black transition">
              Lo que hacemos
            </a>

            <a href="#Cómo trabajamos" className="hover:text-black transition">
              Cómo trabajamos
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="px-6 pt-24 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
          <div>
            <span className="inline-flex bg-white border border-black/[0.05] px-5 py-2 rounded-full text-sm text-black/55 mb-10">
              Diseño web para negocios reales
            </span>

            <h2 className="text-[3.7rem] md:text-[5.8rem] leading-[0.92] tracking-[-0.05em] font-semibold max-w-4xl mb-10">
              Haz que tu negocio se vea tan profesional como realmente es.
            </h2>

            <p className="text-[1.15rem] md:text-[1.35rem] leading-relaxed text-black/55 max-w-2xl mb-12">
              Diseñamos páginas web limpias, modernas y fáciles de usar para
              negocios que quieren dar una mejor impresión online.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://w.app/prismastudiomx"
                target="_blank"
                className="bg-[#151515] text-white px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition"
              >
                Hablemos de tu negocio
              </a>

              <a
                href="#Nuestro trabajo"
                className="bg-white border border-black/[0.06] px-8 py-4 rounded-2xl font-medium text-black/70"
              >
                Ver proyectos
              </a>
            </div>
          </div>

          {/* VISUAL */}
          <div className="relative">
            <div className="bg-white rounded-[2.5rem] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.06)]">
              <img
                src={heroImage}
                alt=""
                className="rounded-[2rem] aspect-[16/10] object-cover object-center w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="Nuestro trabajo"
        className="px-6 py-24 bg-white border-t border-black/[0.04]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-24">
            <span className="uppercase tracking-[4px] text-sm text-black/35">
              Proyectos
            </span>

            <h3 className="text-4xl md:text-5xl leading-[1.05] tracking-tight font-semibold mt-6">
              Páginas pensadas para verse claras, actuales y fáciles de usar.
            </h3>
          </div>

          <div className="space-y-28">
            {projects.map((project, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-[0.9fr_0.5fr] gap-14 items-center"
              >
                <div className="bg-[#f4f4f6] rounded-[2.5rem] p-5">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="rounded-[2rem] w-full h-[420px] object-contain"
                  />
                </div>

                <div>
                 <span className="uppercase tracking-[4px] text-sm text-[#846293]">
                    {project.category}
                  </span>

                  <h4 className="text-5xl font-semibold tracking-tight mt-6 mb-8">
                    {project.name}
                  </h4>

                  <a
  href={project.link}
  target="_blank"
  className="border-b border-black/20 pb-1 text-black/70 hover:text-black transition"
>
  Ver proyecto
</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="Lo que hacemos"
        className="px-6 py-32 bg-[#f5f3ef]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-20">
            <span className="uppercase tracking-[4px] text-sm text-black/35">
              Servicios
            </span>

            <h3 className="text-5xl md:text-6xl leading-[1.05] tracking-tight font-semibold mt-6">
              Lo necesario para que tu negocio tenga una presencia clara y profesional.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] p-6 md:p-8 min-h-[130px] md:min-h-[180px] flex items-end"
              >
                <p className="text-base md:text-lg leading-snug font-medium text-black/75">
                  {service}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="Cómo trabajamos"
        className="px-6 py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-20">
            <span className="uppercase tracking-[4px] text-sm text-black/35">
              Proceso
            </span>

            <h3 className="text-5xl md:text-6xl leading-[1.05] tracking-tight font-semibold mt-6">
              Un proceso simple y claro desde el inicio.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="bg-[#f6f6f8] rounded-[2rem] p-6 md:p-8"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#7364ff]/10 text-[#7364ff] flex items-center justify-center font-semibold mb-6 md:mb-10 mx-auto">
                  0{index + 1}
                </div>

                <p className="text-xl md:text-2xl leading-snug font-medium text-black/75 ">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-32 bg-[#f5f3ef]">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-14 md:p-24 text-center">
          <h3 className="text-5xl md:text-7xl leading-[1] tracking-tight font-semibold max-w-4xl mx-auto mb-8">
            Tu negocio merece verse tan bien como el servicio que ofreces.
          </h3>

          <p className="text-lg md:text-xl text-black/50 leading-relaxed max-w-3xl mx-auto mb-12">
            Creamos páginas web modernas, claras y pensadas para generar confianza desde el primer vistazo.
          </p>

          <a
            href="https://w.app/prismastudiomx"
            target="_blank"
            className="inline-flex bg-[#151515] text-white px-10 py-5 rounded-2xl font-medium"
          >
            Cotizar proyecto
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-12 bg-white border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h4 className="text-xl font-semibold">
            Prisma Studio
          </h4>

          <div className="flex items-center gap-8 text-sm text-black/50">
            <a
  href="https://www.instagram.com/prismastudioweb/"
  target="_blank"
>
  Instagram
</a>
            <a
  href="mailto:webprismastudio@gmail.com"
  className="hover:text-black transition"
>
  webprismastudio@gmail.com
</a>
            <a
  href="https://w.app/prismastudiomx"
  target="_blank"
>
  WhatsApp
</a>
          </div>
        </div>
      </footer>
    </div>
  );
}