import { Button } from '@/components/Button'
import { Download } from 'lucide-react'
import Image from 'next/image'

import teste from '@/assets/teste3.png'

export function Hero() {
  return (
    <section className="max-h-[calc(100vh-7rem)] h-screen grid grid-cols-2">
      <div className="max-w-3xl flex flex-col justify-center h-full">
        <div>
          <h1 className="font-title text-4xl  text-green-200 font-bold">
            Hello, I'm Matheus Lima<span className="text-zinc-100">.</span>
          </h1>

          <h2 className="font-title text-7xl font-bold text-zinc-100">
            FullStack Developer
          </h2>
        </div>

        <p className="text-gray-400 max-w-xl w-full mt-9">
          Oi 👋 Eu sou Matheus – Um designer e programador fullstack freelancer.
          Minha paixão pela tecnologia reside em sonhar ideias e torná-las
          realidade com interfaces elegantes. Desenvolvo interfaces modernas e
          de alta qualidade, concentrado em performance, animações,
          responsividade e SEO.
        </p>

        <div className="flex items-center gap-8 mt-14">
          <Button variant="primary">Entre em contato</Button>
          <Button variant="ghost">
            Download CV <Download />
          </Button>
        </div>
      </div>
      <Image src={teste} alt="" className="mt-16" />
    </section>
  )
}
