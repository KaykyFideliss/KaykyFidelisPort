import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Syne, Zalando_Sans_Expanded } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: [
    '100', '200', '300', '400', '500',
    '600', '700', '800', '900',
  ],
  variable: '--font-poppins',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const zalando = Zalando_Sans_Expanded({
  subsets: ['latin'],
  weight: [
    '200', '300', '400', '500',
    '600', '700', '800', '900',
  ],
  variable: '--font-zalando',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kayky Portfolio',
  description: 'Portfolio moderno com React, GSAP e Tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`
          ${poppins.variable}
          ${syne.variable}
          ${zalando.variable}
          font-poppins
          bg-black
          text-white
        `}
      >
        {children}
      </body>
    </html>
  )
}
