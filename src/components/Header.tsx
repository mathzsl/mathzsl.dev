import { Button } from './Button'

import { ExternalLink } from 'lucide-react'

export function Header() {
  return (
    <div className="h-28 flex items-center justify-between w-full sticky top-0 backdrop-blur">
      <span className="font-title text-2xl font-bold txt-g text-gray-100">
        Matheus<span className="text-green-300">.</span>
      </span>

      <div className="flex items-center gap-14">
        <nav className="flex gap-8">
          <a
            href="#"
            className="text-gray-100 font-medium hover:text-green-200 transition-colors"
          >
            Sobre
          </a>
          <a
            href="#"
            className="text-gray-100 font-medium hover:text-green-200 transition-colors"
          >
            Projetos
          </a>
          <a
            href="#"
            className="text-gray-100 font-medium hover:text-green-200 transition-colors"
          >
            Experiência
          </a>
          <a
            href="#"
            className="text-gray-100 font-medium hover:text-green-200 transition-colors"
          >
            Contato
          </a>
        </nav>

        <Button variant="outline">
          Ver currículo
          <ExternalLink size={18} />
        </Button>
      </div>
    </div>
  )
}
