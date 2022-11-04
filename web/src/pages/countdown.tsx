import Image from 'next/image'
import { useEffect, useState } from 'react'
import appPreviewImg from '../assets/app-nlw-copa-preview.png'
import logoImg from '../assets/logo.svg'

export default function Countdown() {
  const [isConcluded, setIsConcluded] = useState(false)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const target = new Date('11/20/2022 13:00:00')

    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d)

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      setHours(h)

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      setMinutes(m)

      const s = Math.floor((difference % (1000 * 60)) / 1000)
      setSeconds(s)

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setIsConcluded(true)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="max-w-[1124px] h-screen mx-auto flex flex-col items-center justify-center">
      <Image src={logoImg} alt="NLW Copa" />
      {isConcluded ? (
        <Image
          src={appPreviewImg}
          alt="Dois celulares exibindo uma prévia da aplicação móvel do NLW Copa"
          quality={100}
        />
      ) : (
        <div className="flex flex-col items-center justify-center mt-16">
          <h2 className="text-white text-bold text-4xl">
            Contagem regressiva para a abertura da Copa!
          </h2>
          <div className="mt-4 p-8">
            <div className="flex gap-5 text-white">
              <div className="flex flex-col items-center p-2">
                <span className="text-5xl">{days}</span>
                <span className="">Dias</span>
              </div>
              <span className="">:</span>
              <div className="flex flex-col items-center p-2">
                <span className="text-5xl">{hours}</span>
                <span className="">Horas</span>
              </div>
              <span className="">:</span>
              <div className="flex flex-col items-center p-2">
                <span className="text-5xl">{minutes}</span>
                <span className="">Minutos</span>
              </div>
              <span className="">:</span>
              <div className="flex flex-col items-center p-2">
                <span className="text-5xl">{seconds}</span>
                <span className="">Segundos</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
