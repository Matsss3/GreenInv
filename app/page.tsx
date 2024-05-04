import { Feature } from "@/components/layout/features";
import { Footer } from "@/components/layout/footer";
import { ImageCard } from "@/components/layout/image-card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from "next/link";

export default function Home() {
  // TODO: Update Features

  return (
    <div className="mx-auto px-8 md:px-[10rem]">
      <section className="min-h-[80vh] relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48 mb-16">
        <Image src="https://images.unsplash.com/photo-1501059520966-c59141726d6c?auto=format&q=75&fit=crop&w=1500" width="1000" height="1000" alt="bg-photo" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center"/>

        <div className="absolute inset-0 bg-[#435334] mix-blend-multiply"></div>

        <div className="relative flex flex-col items-center p-4 sm:max-w-xl gap-2.5">
          <p className="mb-4 text-center text-lg text-white sm:text-xl md:mb-8">Consectetur odipucing elit, sed ed</p>
          <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl"><q>Tu Evento en Pantalla</q></h1>
          <div className="flex w-full flex-col gap-10 sm:flex-row sm:justify-center">
            <Link href="#invitaciones" className="flex flex-col justify-center">
              <Button variant="outline" size="xlg">
                ↓ Invitaciones
              </Button>
            </Link>
            <Link href="#funcionalidades" className="flex flex-col justify-center">
              <Button variant="outline" size="xlg">
                ↓ Funcionalidades
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <div className="mb-10 md:mb-16" id="funcionalidades">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Funcionalidades de Nuestras Invitaciones</h2>
        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum iure aliquam eaque nemo vero nesciunt labore deleniti omnis ea dicta.</p>
      </div>
      <div className="mb-16 md:mb-20 grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-16">
        <Feature
          minimalistic
          title="Save the Date"
          description="Para anunciar el día de la boda"
          src="/std.svg"
        />
        <Feature
          minimalistic
          title="RSVP"
          src="/rsvp.svg"
          description="Para confirmar asistencia e informar restricciones alimentarias en caso de ser necesario"
        />
        <Feature
          minimalistic
          title="Cuenta Regresiva"
          src="/cuenta_reg.svg"
          description="Sumá emoción mostrando los días, horas, minutos y segundos para el evento"
        />
        <Feature
          minimalistic
          title="Hashtag"
          src="/hashtag.svg"
          description="Compartí el del evento para ver todas las publicaciones del instagram en un mismo lugar"
        />
        <Feature
          minimalistic
          title="GPS"
          src="/gps.svg"
          description="Indicaciones para llegar al evento con Maps"
        />
        <Feature
          minimalistic
          title="Regalos"
          src="/regalos.svg"
          description="Info de tu lista de regalos, cuenta bancaria, etc"
        />
        <Feature
          minimalistic
          title="Album de Fotos"
          src="/album.svg"
          description="Las fotos que marcaron tu historia"
        />
        <Feature
          minimalistic
          title="Instagram Wall"
          src="/ig_wall.svg"
          description="Agrega el Instagram de tu boda"
        />
        <Feature
          minimalistic
          title="Playlist"
          src="/playlist.svg"
          description="Sugerencia de canciones"
        />
        <Feature
          minimalistic
          title="Agendar"
          src="/agendar.svg"
          description="Para que los invitados agenden en su calendario"
        />
        <Feature
          minimalistic
          title="Musica"
          src="/musica.svg"
          description="Tu canción favorita sonando de fondo"
        />
        <Feature
          minimalistic
          title="Dress Code"
          src="/dress_code.svg"
          description="Info de vestimenta para tus invitados"
        />
        <Feature
          minimalistic
          title="Multi Idioma"
          src="/idioma.svg"
          description="Opción de traducir a otros idiomas"
        />
        <Feature
          minimalistic
          title="Lista Ficticia"
          src="/lista.svg"
          description="Una forma original de sugerir regalos"
        />
        <Feature
          minimalistic
          title="Info Útil"
          src="/info.svg"
          description="Datos sobre traslados, hospedajes, etc"
        />
      </div>
      <div className="mb-10 md:mb-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Modelos de nuestras Invitaciones</h2>
        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum iure aliquam eaque nemo vero nesciunt labore deleniti omnis ea dicta.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-3 mb-16 md:mb-20">
        <ImageCard
          href="#"
          src="https://images.unsplash.com/photo-1620243318482-fdd2affd7a38?auto=format&q=75&fit=crop&w=750"
          subtitle="Moderna"
          title="Lorem"
        />
        <ImageCard
          href="#"
          src="https://images.unsplash.com/photo-1620241608701-94ef138c7ec9?auto=format&q=75&fit=crop&w=750"
          subtitle="Moderna"
          title="Ipsum"
        />
        <ImageCard
          href="#"
          src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=750"
          subtitle="Vintage"
          title="Amet"
        />
      </div>
      <div className="flex flex-col overflow-hidden rounded-lg bg-[#FAF1E4] sm:flex-row md:h-80 mb-16 md:mb-20">
        <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
          <Image
            src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&q=75&fit=crop&w=1000"
            alt="contacto"
            loading="lazy"
            width="1000"
            height="1000"
            className="h-full w-full object-cover object-center"
          />
        </div> 
        <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
          <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">Comunicate</h2>
          <p className="mb-8 max-w-md text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique tenetur vero, eligendi ratione ea laboriosam.</p>
          <h3 className="mt-auto text-l md:text-xl lg:text-2xl">ejemplo@gmail.com</h3>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
