import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto px-8 md:px-[10rem]">
      <section className="min-h-[70vh] relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
        <Image src="https://images.unsplash.com/photo-1517264097307-63b4210df978?auto=format&q=75&fit=crop&w=1500" width="1000" height="1000" alt="bg-photo" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center"/>

        <div className="absolute inset-0 bg-[#9EB384] mix-blend-multiply"></div>

        <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
          <p className="mb-4 text-center text-lg text-orange-100 sm:text-xl md:mb-8">Consectetur odipucing elit, sed ed</p>
          <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl"><q>Tu Evento en Pantalla</q></h1>
          <div className="flex w-full flex-col gap-10 sm:flex-row sm:justify-center">
            <Link href="#" className="flex flex-col justify-center">
              <Button variant="outline" size="xlg">
                ↓ Invitaciones
              </Button>
            </Link>
            <Link href="#" className="flex flex-col justify-center">
              <Button variant="outline" size="xlg">
                ↓ Funcionalidades
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <p className="text-center text-slate-700 text-xl md:text-lg flex flex-col gap-0.5 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit est enim ut velit quia veritatis perferendis harum optio iure in?
        <Link href="#" className="text-black hover:underline text-2xl md:text-xl">
          Seguir viendo ↓
        </Link>
      </p>
    </div>
  );
}
