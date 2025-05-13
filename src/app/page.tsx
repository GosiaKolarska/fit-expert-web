"use client"
import { useState } from 'react';

import BusinessCard from "@/components/animated/BusinessCard";
import RevealOnScroll from "@/components/animated/RevealOnScroll";
import Solution from "@/components/animated/Solution";
import CustomAccording from "@/components/CustomAccordion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OpinionSlider from "@/components/OpinionSlider";


export default function Home() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const data = [
    {
      question: 'Czy fit.expert jest za darmo?',
      answer: 'Tak! Aktualnie wszyscy nasi Testerzy mają dostęp do wszystkich funkcji beta aplikacji za darmo.'
    },
    {
      question: 'Czy muszę korzystać z płatności on-line?',
      answer: 'Nie, nie musisz. Nasz system daje Ci pełną elastyczność - możesz przyjmować płatności gotówką, przelewem lub korzystać z naszej integracji z płatnościami online, jeśli chcesz ułatwić sobie zarządzanie finansami.'
    },
    {
      question: 'Moi klienci mogą korzystać z mojego profilu i rezerwować treningi?',
      answer: 'Tak, jak najbardziej. Twój profil z dostępnością będzie widoczny po kliknięciu w link, który możesz udostępnić w swoich social media (np. Instagram, Facebook, Tiktok) albo przesłać bezpośrednio do klienta. Klient nie musi się rejestrować - wystarczy kliknąć i zarezerwować wolny termin.'
    },
    {
      question: 'Jak wygląda proces rezerwacji dla klienta?',
      answer: 'Klient klika w link do Twojego kalendarza, wybiera pasujący termin i potwierdza rezerwację. Ty otrzymujesz powiadomienie i możesz zarządzać wszystkimi terminami z jednego miejsca.'
    },
    {
      question: 'Czy muszę mieć własną stronę internetową?',
      answer: 'Nie. Twój profil w naszej aplikacji działa jak mini-strona - możesz podzielić się linkiem, a klienci zobaczą Twój grafik, dane kontaktowe i ofertę. To idealne rozwiązanie, jeśli jeszcze nie masz własnej strony.'
    },
    {
      question: 'Czy mogę ustawić własne godziny pracy i dni wolne?',
      answer: 'Tak. Masz pełną kontrolę nad swoim kalendarzem. Możesz ustawić dostępność godzinową, dni wolne, a także zablokować terminy na urlop czy inne zobowiązania.'
    },
  ]
  return (
    <div>
      <RevealOnScroll
        distance={40}
        duration={0.8}
        ease="power2.out"
        stagger={true}
        staggerAmount={0.12}
        randomize={true}
        randomFactor={0.15}
      />
      <Header />

      <main className="pt-[108px]">
      <section className="hero py-[50px] relative mb-[100px] overflow-x-clip max-[650px]:mb-[90px] max-[650px]:py-1" id="hero">
          <img src="/images/radial-1.svg" alt="" className="absolute top-2/5 -left-[30%] -translate-y-1/2 -z-10 max-[650px]:max-w-[unset] max-[650px]:w-[800px] max-[650px]:top-[16%] max-[650px]:-left-1/2" />
          <img src="/images/radial-2.svg" alt="" className="absolute -top-[30%] -right-[70%] -translate-y-1/2 -z-10" />
          <div className="container flex items-center max-[990px]:flex-col">
            <div className="w-2/5 pr-4 max-[1400px]:w-1/2 max-[990px]:w-full max-[990px]:pr-0 max-[990px]:mb-12">
              <div className="reveal flex items-center p-3.5 rounded-full bg-white mb-4">
                <img src="/icons/muscle.png" alt="" className="mr-3" />
                <p className="text-sm font-bold">Trwają zapisy do bety - miejsce ograniczone</p>
              </div>
              <h1 className="reveal text-6xl font-black italic uppercase mb-[26px] max-[1200px]:text-5xl max-[650px]:text-[38px]">
                PROSTE rozwiązania dla <span className="text-[#B2CC07]">trenerów</span> ORAZ <span className="text-[#B2CC07]">obiektów</span> sportowych
              </h1>
              <p className="reveal text-lg text-[#606060] mb-12">
                Twoja FIT wizytówka online, zarządzanie kalendarzem dostępności, kontrola nad Twoimi podopiecznymi i wiele więcej.
              </p>
              <div className="reveal flex items-center">
                <a href="https://tally.so/r/mYeEoz" target="_blank" rel="noopener noreferrer" className="mr-[34px] max-[1050px]:mr-[14px] max-[650px]:mr-2">
                  <button className="py-2 px-2.5 pl-8 bg-[#C7E410] rounded-full text-lg font-bold flex items-center justify-center group max-[1050px]:pl-[14px] max-[650px]:p-[7px] max-[650px]:pl-5 max-[650px]:text-sm max-[390px]:text-xs">
                    <span className="mr-2.5 max-[390px]:mr-1">Dołącz do Testerów</span>
                    <span className="size-[51px] rounded-full bg-black flex items-center justify-center duration-300 group-hover:bg-white max-[650px]:size-[42px] max-[390px]:size-9">
                      <img src="/icons/arrow-right-white.svg" alt="" className="w-[22px] duration-300 invert-0 group-hover:invert" />
                    </span>
                  </button>
                </a>
                <a href="#instruction" className="text-lg font-bold max-[650px]:text-sm text-start max-[390px]:text-xs">
                  Zobacz jak to działa
                </a>
              </div>
            </div>
            <div className="w-3/5 h-[590px] flex justify-center relative max-[1400px]:w-1/2 max-[990px]:w-full max-[650px]:h-fit max-[450px]:w-[130vw] max-[450px]:left-[12%]">
              <div className="relative w-fit h-full">
                <img src="/images/hero-image.png" alt="" className="w-full max-w-full max-h-full object-contain" />
                <img src="/images/hero-phone.png" alt="" className="absolute left-[38px] top-8 animate-custom-float max-[450px]:w-[170px]" />
              </div>
            </div>
          </div>
        </section>

        <section className="instruction mb-[120px] pt-[10px]" id="instruction">
          <div className="container">
            <div className="w-full p-20 pb-0 bg-black rounded-[40px] text-center text-white overflow-hidden max-[990px]:py-[61px] max-[990px]:px-[40px] max-[990px]:pb-0 max-[650px]:px-5 max-[650px]:pb-6">
              <h3 className="reveal text-[22px] font-bold mb-[26px] relative z-10 max-[1200px]:text-xl max-[650px]:text-lg max-[650px]:mb-[18px]">Masz 2 minuty?</h3>
              <h2 className="reveal text-[52px] font-black mb-[72px] relative z-10 max-[1200px]:text-[44px] max-[650px]:text-[28px]">Zobacz jak to <span className="text-[#D0EA2A]">działa</span></h2>
              <div className="reveal relative h-fit flex justify-center">
                <img src="/images/radial-2.svg" alt="" className="absolute -top-1/2 left-1/2 -translate-x-1/2 translate-y-[25%]" />
                <img src="/images/instruction-demo2.svg" alt="" className="relative z-[1]" />
                <div className="h-1/2 w-full bg-gradient-to-t from-black to-transparent absolute left-0 bottom-0 z-[1]"></div>
                <div className="size-[183px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full max-[650px]:size-[91px]">
                  <button 
                    onClick={() => setShowVideoModal(true)}
                    className="size-full bg-black flex items-center justify-center rounded-full relative z-10 cursor-pointer hover:bg-gray-900 transition-colors"
                  >
                    <img src="/icons/play-circle.svg" alt="" className="max-[650px]:w-9 pointer-events-none" />
                  </button>
                  <span className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(128,194,226,1)] opacity-75 animate-[ping_2s_ease-in-out_infinite] pointer-events-none"></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mainFunction pt-[30px] mb-[237px] max-[650px]:mb-0" id="mainFunction">
          <div className="container">
            <div className="max-w-[1023px] mb-28 max-[650px]:mb-12">
              <h3 className="reveal text-[22px] font-bold mb-9 max-[1200px]:text-xl max-[650px]:text-lg max-[650px]:mb-6 flex items-center">
                <img src="/icons/glow-icon.png" alt="" className="mr-1" />
                Główne funkcje
              </h3>
              <h2 className="reveal text-[52px] font-black italic uppercase leading-[1] max-[1200px]:text-[44px] max-[650px]:text-[34px]">
                Oszczędzamy <span className="text-[#B2CC07]">Twój czas <br /></span> i <span className="text-[#B2CC07]">pieniądze</span> prostotą rozwiązań jakie oferujemy
              </h2>
            </div>
            <div className="flex items-start justify-between mb-[125px] max-[990px]:flex-col max-[650px]:mb-[78px]">
              <div className="w-[53%] max-[990px]:w-full max-[990px]:mb-[26px]">
                <div className="mb-6 hidden max-[990px]:block">
                  <h3 className="reveal w-fit text-lg font-bold py-2.5 px-[18px] bg-[#BBD60F10] border-[1px] border-[#BBD60F] rounded-full mb-5 flex items-center">
                    <img src="/icons/calender-icon.png" alt="" className="mr-1" />Kalendarz Twoich usług
                  </h3>
                  <h2 className="reveal text-[34px] font-bold leading-[1] max-[1200px]:text-[30px] max-[650px]:text-2xl">
                    Twórz wygodnie i szybko swoje sloty treningowe – oddaj je w ręce swoich podopiecznych!
                  </h2>
                </div>
                <img src="/images/function-image-1.png" alt="" className="reveal w-full rounded-[30px]" />
              </div>
              <div className="w-[38%] max-[990px]:w-full">
                <div className="mb-[34px] block max-[990px]:hidden">
                  <h3 className="reveal w-fit text-lg font-bold py-2.5 px-[18px] bg-[#BBD60F10] border-[1px] border-[#BBD60F] rounded-full mb-5 flex items-center">
                    <img src="/icons/calender-icon.png" alt="" className="mr-1" />Kalendarz Twoich usług
                  </h3>
                  <h2 className="reveal text-[34px] font-bold leading-[1] max-[1200px]:text-[30px] max-[650px]:text-2xl">
                    Twórz wygodnie i szybko swoje sloty treningowe – oddaj je w ręce swoich podopiecznych!
                  </h2>
                </div>
                <p className="reveal text-lg text-[#606060] mb-[26px]">
                  Prosty i szybki system kalendarza oparty o Twoje sloty, rodzaje treningów oraz ceny.
                </p>
                <ul className="reveal mb-6">
                  <li className="flex items-center text-lg font-bold mb-2">
                    <span className="size-[11px] block mr-4 bg-[#BBD60F] rounded-full"></span>
                    Treningi personalne i grupowe
                  </li>
                  <li className="flex items-center text-lg font-bold mb-2">
                    <span className="size-[11px] block mr-4 bg-[#BBD60F] rounded-full"></span>
                    Integracja z pakietami treningowymi
                  </li>
                  <li className="flex items-center text-lg font-bold mb-2">
                    <span className="size-[11px] block mr-4 bg-[#BBD60F] rounded-full"></span>
                    Powielanie slotów treningowych
                  </li>
                  <li className="flex items-center text-lg font-bold mb-2">
                    <span className="size-[11px] block mr-4 bg-[#BBD60F] rounded-full"></span>
                    Zabezpieczenie przed odwołanymi spotkaniami
                  </li>
                  <li className="flex items-center text-lg font-bold mb-2">
                    <span className="size-[11px] block mr-4 bg-[#BBD60F] rounded-full"></span>
                    Określanie lokalizacji usług
                  </li>
                </ul>
                <a href="https://tally.so/r/mYeEoz" target="_blank" rel="noopener noreferrer" className="w-fit block max-[650px]:w-full">
                  <button className="reveal py-5 px-6 rounded-full border-2 border-[#BBD60F] text-lg font-bold flex items-center duration-300 bg-white hover:bg-[#BBD60F] max-[1200px]:py-4 max-[650px]:w-full max-[650px]:justify-center">
                    Dołącz do testerów
                    <img src="/icons/arrow-right-white.svg" alt="" className="invert ml-2.5" />
                  </button>
                </a>
              </div>
            </div>

            <div className="flex items-start justify-between mb-[125px] max-[990px]:flex-col-reverse max-[650px]:mb-[78px]">
              <div className="w-[38%] max-[990px]:w-full">
                <div className="mb-[34px] block max-[990px]:hidden">
                  <h3 className="reveal w-fit text-lg font-bold py-2.5 px-[18px] bg-[#BBD60F10] border-[1px] border-[#BBD60F] rounded-full mb-5 flex items-center">
                    <img src="/icons/clipboard-icon.png" alt="" className="mr-1" />Lista klientów
                  </h3>
                  <h2 className="reveal text-[34px] font-bold leading-[1] max-[1200px]:text-[30px] max-[650px]:text-2xl">
                    Prosty system zarządzania swoimi klientami, który możesz wykorzystać jak chcesz.
                  </h2>
                </div>
                <p className="reveal text-lg text-[#606060] mb-[26px]">
                  Masz pełną kontrole nad swoimi podopiecznymi w prostej czytelnej formie. Pożegnaj się z Excelem.
                </p>
                <ul className="reveal mb-6">
                  <li className="flex items-center text-lg font-bold mb-2">
                    <span className="size-[11px] block mr-4 bg-[#BBD60F] rounded-full"></span>
                    Wszystkie dane w jednym miejscu
                  </li>
                  <li className="flex items-center text-lg font-bold mb-2">
                    <span className="size-[11px] block mr-4 bg-[#BBD60F] rounded-full"></span>
                    Przejrzysty spis wszystkich rezerwacji
                  </li>
                  <li className="flex items-center text-lg font-bold mb-2">
                    <span className="size-[11px] block mr-4 bg-[#BBD60F] rounded-full"></span>
                    Manualne przydzielanie pakietów & treningów
                  </li>
                </ul>
                <a href="https://tally.so/r/mYeEoz" target="_blank" rel="noopener noreferrer" className="w-fit block max-[650px]:w-full">
                  <button className="reveal py-5 px-6 rounded-full border-2 border-[#BBD60F] text-lg font-bold flex items-center duration-300 bg-white hover:bg-[#BBD60F] max-[1200px]:py-4 max-[650px]:w-full max-[650px]:justify-center">
                    Dołącz do testerów
                    <img src="/icons/arrow-right-white.svg" alt="" className="invert ml-2.5" />
                  </button>
                </a>
              </div>
              <div className="w-[53%] max-[990px]:w-full max-[990px]:mb-[26px]">
                <div className="mb-6 hidden max-[990px]:block">
                  <h3 className="reveal w-fit text-lg font-bold py-2.5 px-[18px] bg-[#BBD60F10] border-[1px] border-[#BBD60F] rounded-full mb-5 flex items-center">
                    <img src="/icons/clipboard-icon.png" alt="" className="mr-1" />Lista klientów
                  </h3>
                  <h2 className="reveal text-[34px] font-bold leading-[1] max-[1200px]:text-[30px] max-[650px]:text-2xl">
                    Prosty system zarządzania swoimi klientami, który możesz wykorzystać jak chcesz.
                  </h2>
                </div>
                <img src="/images/function-image-2.svg" alt="" className="reveal w-full rounded-[30px]" />
              </div>
            </div>

            <div className="flex items-start justify-between mb-[125px] max-[990px]:flex-col max-[650px]:mb-[78px]">
              <div className="w-[53%] max-[990px]:w-full max-[990px]:mb-[26px]">
                <div className="mb-6 hidden max-[990px]:block">
                  <h3 className="reveal w-fit text-lg font-bold py-2.5 px-[18px] bg-[#BBD60F10] border-[1px] border-[#BBD60F] rounded-full mb-5 flex items-center">
                    <img src="/icons/id-card-icon.png" alt="" className="mr-1" />Spersonalizowana wizytówka
                  </h3>
                  <h2 className="reveal text-[34px] font-bold leading-[1] max-[1200px]:text-[30px] max-[650px]:text-2xl">
                    Skonfiguruj swoją wizytówkę którą zobaczą Twoi klienci - nie potrzebujesz już strony www.
                  </h2>
                </div>
                <img src="/images/function-image-3.svg" alt="" className="reveal w-full rounded-[30px]" />
              </div>
              <div className="w-[38%] max-[990px]:w-full">
                <div className="mb-[34px] block max-[990px]:hidden">
                  <h3 className="reveal w-fit text-lg font-bold py-2.5 px-[18px] bg-[#BBD60F10] border-[1px] border-[#BBD60F] rounded-full mb-5 flex items-center">
                    <img src="/icons/id-card-icon.png" alt="" className="mr-1" />Spersonalizowana wizytówka
                  </h3>
                  <h2 className="reveal text-[34px] font-bold leading-[1] max-[1200px]:text-[30px] max-[650px]:text-2xl">
                    Skonfiguruj swoją wizytówkę którą zobaczą Twoi klienci - nie potrzebujesz już strony www.
                  </h2>
                </div>
                <p className="reveal text-lg text-[#606060] mb-[26px]">
                  Spersonalizuj swoją wizytówkę jak tylko chcesz.
                </p>
                <ul className="reveal mb-6">
                  <li className="flex items-center text-lg font-bold mb-2">
                    <span className="size-[11px] block mr-4 bg-[#BBD60F] rounded-full"></span>
                    Personalizacja kolorów i bannerów
                  </li>
                  <li className="flex items-center text-lg font-bold mb-2">
                    <span className="size-[11px] block mr-4 bg-[#BBD60F] rounded-full"></span>
                    Linki do Twoich miejsc w sieci i nie tylko
                  </li>
                  <li className="flex items-center text-lg font-bold mb-2">
                    <span className="size-[11px] block mr-4 bg-[#BBD60F] rounded-full"></span>
                    Galeria zdjęć i video
                  </li>
                  <li className="flex items-center text-lg font-bold mb-2">
                    <span className="size-[11px] block mr-4 bg-[#BBD60F] rounded-full"></span>
                    Przejrzysty cennik i dostęp do kalendarza
                  </li>
                  <li className="flex items-center text-lg font-bold mb-2">
                    <span className="size-[11px] block mr-4 bg-[#BBD60F] rounded-full"></span>
                    Synchronizacja z Linktree
                  </li>
                </ul>
                <a href="https://tally.so/r/mYeEoz" target="_blank" rel="noopener noreferrer" className="w-fit block max-[650px]:w-full">
                  <button className="reveal py-5 px-6 rounded-full border-2 border-[#BBD60F] text-lg font-bold flex items-center duration-300 bg-white hover:bg-[#BBD60F] max-[1200px]:py-4 max-[650px]:w-full max-[650px]:justify-center">
                    Dołącz do testerów
                    <img src="/icons/arrow-right-white.svg" alt="" className="invert ml-2.5" />
                  </button>
                </a>
              </div>
            </div>

            <div className="flex items-start justify-between mb-[125px] max-[990px]:flex-col-reverse max-[650px]:mb-[78px]">
              <div className="w-[38%] max-[990px]:w-full">
                <div className="mb-[34px] block max-[990px]:hidden">
                  <h3 className="reveal w-fit text-lg font-bold py-2.5 px-[18px] bg-[#BBD60F10] border-[1px] border-[#BBD60F] rounded-full mb-5 flex items-center">
                    <img src="/icons/phone-icon.png" alt="" className="mr-1" />Dla Twoich klientów
                  </h3>
                  <h2 className="reveal text-[34px] font-bold leading-[1] max-[1200px]:text-[30px] max-[650px]:text-2xl">
                    Aplikacja dla Twoich klientów to wygoda dla nich i dla Ciebie.
                  </h2>
                </div>
                <p className="reveal text-lg text-[#606060] mb-[26px]">
                  Twoi klienci mają kontrole nad terminami swoich w tym opłacania pakietów
                </p>
                <ul className="reveal mb-6">
                  <li className="flex items-center text-lg font-bold mb-2">
                    <span className="size-[11px] block mr-4 bg-[#BBD60F] rounded-full"></span>
                    Szybka i wygodna rezerwacja terminów
                  </li>
                  <li className="flex items-center text-lg font-bold mb-2">
                    <span className="size-[11px] block mr-4 bg-[#BBD60F] rounded-full"></span>
                    Zarządzanie umówionymi treningami
                  </li>
                  <li className="flex items-center text-lg font-bold mb-2">
                    <span className="size-[11px] block mr-4 bg-[#BBD60F] rounded-full"></span>
                    Zakup pakietów off-line & on-line
                  </li>
                  <li className="flex items-center text-lg font-bold mb-2">
                    <span className="size-[11px] block mr-4 bg-[#BBD60F] rounded-full"></span>
                    Lista ulubionych trenerów
                  </li>
                </ul>
                <a href="https://tally.so/r/mYeEoz" target="_blank" rel="noopener noreferrer" className="w-fit block max-[650px]:w-full">
                  <button className="reveal py-5 px-6 rounded-full border-2 border-[#BBD60F] text-lg font-bold flex items-center duration-300 bg-white hover:bg-[#BBD60F] max-[1200px]:py-4 max-[650px]:w-full max-[650px]:justify-center">
                    Dołącz do testerów
                    <img src="/icons/arrow-right-white.svg" alt="" className="invert ml-2.5" />
                  </button>
                </a>
              </div>
              <div className="w-[53%] max-[990px]:w-full max-[990px]:mb-[26px]">
                <div className="mb-6 hidden max-[990px]:block">
                  <h3 className="reveal w-fit text-lg font-bold py-2.5 px-[18px] bg-[#BBD60F10] border-[1px] border-[#BBD60F] rounded-full mb-5 flex items-center">
                    <img src="/icons/phone-icon.png" alt="" className="mr-1" />Dla Twoich klientów
                  </h3>
                  <h2 className="reveal text-[34px] font-bold leading-[1] max-[1200px]:text-[30px] max-[650px]:text-2xl">
                    Aplikacja dla Twoich klientów to wygoda dla nich i dla Ciebie.
                  </h2>
                </div>
                <img src="/images/function-image-4.svg" alt="" className="reveal w-full rounded-[30px]" />
              </div>
            </div>

            <div className="flex items-start justify-between mb-[125px] max-[990px]:flex-col max-[650px]:mb-0">
              <div className="w-[53%] max-[990px]:w-full max-[990px]:mb-[26px]">
                <div className="mb-6 hidden max-[990px]:block">
                  <h3 className="reveal w-fit text-lg font-bold py-2.5 px-[18px] bg-[#BBD60F10] border-[1px] border-[#BBD60F] rounded-full mb-5 flex items-center">
                    <img src="/icons/money-icon.png" alt="" className="mr-1" />Prosty system płatności
                  </h3>
                  <h2 className="reveal text-[34px] font-bold leading-[1] max-[1200px]:text-[30px] max-[650px]:text-2xl">
                    Rozliczaj się z klientami tak jak lubisz. Prywatnie lub on-line.
                  </h2>
                </div>
                <img src="/images/function-image-5.svg" alt="" className="reveal w-full rounded-[30px]" />
              </div>
              <div className="w-[38%] max-[990px]:w-full">
                <div className="mb-[34px] block max-[990px]:hidden">
                  <h3 className="reveal w-fit text-lg font-bold py-2.5 px-[18px] bg-[#BBD60F10] border-[1px] border-[#BBD60F] rounded-full mb-5 flex items-center">
                    <img src="/icons/money-icon.png" alt="" className="mr-1" />Prosty system płatności
                  </h3>
                  <h2 className="reveal text-[34px] font-bold leading-[1] max-[1200px]:text-[30px] max-[650px]:text-2xl">
                    Rozliczaj się z klientami tak jak lubisz. Prywatnie lub on-line.
                  </h2>
                </div>
                <p className="reveal text-lg text-[#606060] mb-[26px]">
                  Trzymaj rekę na pulsie i kontroluj płatności klientów
                </p>
                <ul className="reveal mb-6">
                  <li className="flex items-center text-lg font-bold mb-2">
                    <span className="size-[11px] block mr-4 bg-[#BBD60F] rounded-full"></span>
                    Integracja ze Stripe
                  </li>
                  <li className="flex items-center text-lg font-bold mb-2">
                    <span className="size-[11px] block mr-4 bg-[#BBD60F] rounded-full"></span>
                    Wysyłanie linku z płatnością do klienta
                  </li>
                  <li className="flex items-center text-lg font-bold mb-2">
                    <span className="size-[11px] block mr-4 bg-[#BBD60F] rounded-full"></span>
                    Rozliczanie klientów gotówkowych
                  </li>
                  <li className="flex items-center text-lg font-bold mb-2">
                    <span className="size-[11px] block mr-4 bg-[#BBD60F] rounded-full"></span>
                    Monitorowanie płatności
                  </li>
                </ul>
                <a href="https://tally.so/r/mYeEoz" className="w-fit block max-[650px]:w-full">
                  <button className="reveal py-5 px-6 rounded-full border-2 border-[#BBD60F] text-lg font-bold flex items-center duration-300 bg-white hover:bg-[#BBD60F] max-[1200px]:py-4 max-[650px]:w-full max-[650px]:justify-center">
                    Dołącz do testerów
                    <img src="/icons/arrow-right-white.svg" alt="" className="invert ml-2.5" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="additionalFeature pt-[91px] pb-[61px]" id="additionalFeature">
          <div className="container">
            <div className="mb-[102px] text-center max-[650px]:text-start max-[650px]:mb-7">
              <h3 className="reveal text-[22px] font-bold mb-9 max-[1200px]:text-xl max-[650px]:text-lg max-[650px]:mb-6 flex items-center justify-center">
                <img src="/icons/fire-icon.png" alt="" className="mr-1" />Dodatkowe ficzery
              </h3>
              <h2 className="reveal text-[52px] font-black italic uppercase leading-[1] max-[1200px]:text-[44px] max-[650px]:text-[34px]">Wszystko co potrzebujesz <br /> w <span className="text-[#B2CC07]">jednym miejscu</span></h2>
            </div>
            <div>
              <div className="reveal flex justify-between mb-10 max-[1200px]:mb-[30px] max-[990px]:flex-wrap max-[990px]:mb-2.5">
                <div className="w-1/2 bg-[#F2F2F2] rounded-[50px] py-12 px-10 max-[1200px]:p-9 max-[1200px]:rounded-[35px] max-[990px]:w-full max-[990px]:mb-2.5 max-[650px]:rounded-3xl max-[650px]:p-5">
                  <h3 className="text-[26px] font-bold leading-[1.2] mb-4 max-[650px]:text-2xl">Prosty system płatności <br /> manualnych + online</h3>
                  <p className="max-w-[425px] text-[#606060] text-lg leading-[1.2]">
                    Rozliczaj się z klientami tak jak lubisz. Prywatnie lub on-line dzięki zabezpieczonym płatnością STRIPE.
                  </p>
                </div>
                <div className="w-[calc(25%-15px)] bg-[#F2F2F2] rounded-[50px] py-12 px-10 max-[1200px]:p-9 max-[1200px]:rounded-[35px] max-[990px]:w-[calc(50%-5px)] max-[650px]:rounded-3xl max-[650px]:p-5">
                  <h3 className="text-[26px] font-bold leading-[1.2] mb-4 max-[650px]:text-2xl">Tworzenie <br /> pakietów</h3>
                  <p className="max-w-[229px] text-[#606060] text-lg leading-[1.2]">
                    Twórz pakiety takie jak chcesz i ile chcesz.
                  </p>
                </div>
                <div className="w-[calc(25%-15px)] bg-[#F2F2F2] rounded-[50px] py-12 px-10 max-[1200px]:p-9 max-[1200px]:rounded-[35px] max-[990px]:w-[calc(50%-5px)] max-[650px]:rounded-3xl max-[650px]:p-5">
                  <h3 className="text-[26px] font-bold leading-[1.2] mb-4 max-[650px]:text-2xl">Własna <br /> wizytówka</h3>
                  <p className="max-w-[229px] text-[#606060] text-lg leading-[1.2]">
                    Zdjęcia, linki, bio, video. Co tylko potrzebujesz i to w Twoich kolorach.
                  </p>
                </div>
              </div>
              <div className="reveal flex justify-between mb-12 max-[990px]:flex-wrap">
                <div className="w-[calc(100%/3-10px)] bg-[#F2F2F2] rounded-[50px] py-12 px-10 max-[1200px]:p-9 max-[1200px]:rounded-[35px] max-[990px]:w-full max-[990px]:mb-2.5 max-[650px]:rounded-3xl max-[650px]:p-5">
                  <h3 className="text-[26px] font-bold leading-[1.2] mb-4 max-[650px]:text-2xl">Zarządzaj dostępnością innych pracowników.</h3>
                  <p className="text-[#606060] text-lg leading-[1.2]">
                    Chcesz dodać zastępstwo za swój trening? Żaden problem, możesz dodać dodatkowych trenerów.
                  </p>
                </div>
                <div className="w-[calc(100%/3-10px)] bg-[#F2F2F2] rounded-[50px] py-12 px-10 max-[1200px]:p-9 max-[1200px]:rounded-[35px] max-[990px]:w-full max-[990px]:mb-2.5 max-[650px]:rounded-3xl max-[650px]:p-5">
                  <h3 className="text-[26px] font-bold leading-[1.2] mb-4 max-[650px]:text-2xl">System powiadomień <br /> SMS</h3>
                  <p className="text-[#606060] text-lg leading-[1.2]">
                    Poinformuj klientów o nadchodzących treningach i odwołaniach
                  </p>
                </div>
                <div className="w-[calc(100%/3-10px)] bg-[#F2F2F2] rounded-[50px] py-12 px-10 max-[1200px]:p-9 max-[1200px]:rounded-[35px] max-[990px]:w-full max-[990px]:mb-2.5 max-[650px]:rounded-3xl max-[650px]:p-5">
                  <h3 className="text-[26px] font-bold leading-[1.2] mb-4 max-[650px]:text-2xl">Zarządzanie <br /> klientami</h3>
                  <p className="text-[#606060] text-lg leading-[1.2]">
                    Monitoruj ilość treningów, pakiety w jednym miejscu
                  </p>
                </div>
              </div>

              <a href="https://tally.so/r/mYeEoz" target="_blank" rel="noopener noreferrer" className="block w-fit mx-auto">
                <button className="reveal text-lg font-bold w-[248px] h-[60px] rounded-full bg-[#C7E410] flex items-center justify-center border-2 border-[#C7E410] duration-300 hover:bg-transparent">
                  Dołącz do testerów
                  <img src="/icons/arrow-right-white.svg" alt="" className="invert ml-2.5" />
                </button>
              </a>
            </div>
          </div>
        </section>

        <Solution />

        <BusinessCard />

        <section className="opinions pt-[30px] pb-[120px] max-[650px]:pb-5" id="opinions">
          <div className="container">
            <div className="mb-20 text-center max-[650px]:mb-[66px]">
              <h3 className="reveal text-[22px] font-bold mb-9 max-[1200px]:text-xl max-[650px]:text-lg max-[650px]:mb-6">Opinie Testerów</h3>
              <h2 className="reveal text-[52px] font-black italic uppercase leading-[1] max-[1200px]:text-[44px] max-[650px]:text-[34px]">Zobacz co <span className="text-[#B2CC07]">mówią <br /> nasi</span> testerzy</h2>
            </div>

            <OpinionSlider />
          </div>
        </section>

        <section className="faq pt-[30px] pb-[77px] max-[650px]:pb-[52px]" id="faq">
          <div className="container flex max-[990px]:flex-wrap">
            <div className="w-[48%] pr-10 max-[990px]:w-full max-[990px]:mb-10 max-[990px]:pr-0">
              <div>
                <h3 className="reveal text-[22px] font-bold mb-9 max-[1200px]:text-xl max-[650px]:text-lg max-[650px]:mb-6">FAQ</h3>
                <h2 className="reveal text-[52px] font-black italic uppercase leading-[1] mb-9 max-[1200px]:text-[44px] max-[650px]:text-[34px] max-[650px]:mb-7">Wciąż masz <br className="max-[990px]:hidden" /> jakieś <span className="text-[#B2CC07]">pytania?</span></h2>
                <p className="reveal max-w-[426px] text-lg font-medium text-[#606060] leading-[24px] max-[990px]:max-w-full">
                  Znajdź jasne odpowiedzi na podstawowe pytania i nie czekaj za długo tylko dołącz do naszych testerów i przekonaj się jakie to wszystko proste!
                </p>
              </div>
            </div>

            <div className="reveal w-[52%] max-[990px]:w-full">
              {data.map((item, index) => (
                <CustomAccording key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </section>

        <section className="pt-[60px] joinTester mb-28" id="joinTester">
          <div className="container">
            <div className="min-h-[600px] py-[63px] px-[91px] rounded-[40px] bg-[#C7E410] flex max-[990px]:py-12 max-[990px]:px-5 max-[650px]:py-7 max-[650px]:px-3.5">
              <div className="w-[calc(100%-559px)] max-[1200px]:w-[calc(100%-450px)] max-[990px]:w-full">
                <img src="/images/footer-logo.svg" alt="" className="reveal mb-10 block max-[1200px]:mb-6 max-[990px]:mx-auto max-[650px]:w-[150px] max-[650px]:mb-[26px]" />
                <h2 className="reveal text-[52px] font-black leading-[1] mb-[27px] max-[1200px]:text-[44px] max-[990px]:text-center max-[650px]:text-[34px]">
                  Dołącz do naszych testerów <span className="text-white">za darmo</span>
                </h2>
                <div className="w-full mb-10 hidden max-[990px]:block">
                  <div className="w-full relative flex items-center justify-between max-[650px]:w-[100vw] max-[650px]:-left-[31px]">
                    <div className="w-[calc(100%/3-7px)] flex flex-col gap-2">
                      <img src="/images/tester-1.png" alt="" className="w-full rounded-[30px] max-[650px]:rounded-[17px]" />
                    </div>
                    <div className="w-[calc(100%/3-7px)] flex flex-col gap-2">
                      <img src="/images/tester-3.png" alt="" className="w-full rounded-[30px] max-[650px]:rounded-[17px]" />
                      <img src="/images/tester-4.png" alt="" className="w-full rounded-[30px] max-[650px]:rounded-[17px]" />
                    </div>
                    <div className="w-[calc(100%/3-7px)] flex flex-col gap-2">
                      <img src="/images/tester-4.png" alt="" className="w-full rounded-[30px] max-[650px]:rounded-[17px]" />
                    </div>
                  </div>
                </div>
                <p className="reveal text-lg font-medium mb-20 leading-[140%] max-[990px]:text-center max-[990px]:mb-10">
                  Klikając na przycisk <span className="font-bold">"Dołącz do Testerów"</span> dołączysz do grona osób mających pełny dostęp do naszej aplikacji <span className="font-bold">całkowicie za darmo.</span> Dodatkowo będziesz w stałym kontakcie z naszą ekipą mając realny wpływ na rozwój aplikacji.
                </p>
                <a href="https://tally.so/r/mYeEoz" target="_blank" rel="noopener noreferrer" className="w-fit block max-[990px]:mx-auto">
                  <button className="reveal py-2 px-2.5 pl-8 bg-black rounded-full text-lg font-bold text-white flex items-center justify-center group">
                    <span className="mr-5">Dołącz do Testerów</span>
                    <span className="size-[51px] rounded-full bg-white flex items-center justify-center border-[3px] border-white duration-300 group-hover:bg-[#C7E410]">
                      <img src="/icons/arrow-right-white.svg" alt="" className="w-[22px] invert" />
                    </span>
                  </button>
                </a>
              </div>

              <div className="w-[559px] pl-20 max-[1200px]:w-[450px] block max-[990px]:hidden">
                <div className="reveal w-full relative">
                  <div className="w-[calc(50%-8px)] flex flex-col gap-5 absolute -top-8 left-0">
                    <img src="/images/tester-1.png" alt="" className="w-full rounded-[30px]" />
                    <img src="/images/tester-2.png" alt="" className="w-full rounded-[30px]" />
                  </div>
                  <div className="reveal w-[calc(50%-8px)] flex flex-col gap-5 absolute -top-24 right-0">
                    <img src="/images/tester-3.png" alt="" className="w-full rounded-[30px]" />
                    <img src="/images/tester-4.png" alt="" className="w-full rounded-[30px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />

          {/* Modal z filmem */}
          {showVideoModal && (
            <div 
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
              onClick={() => setShowVideoModal(false)}
            >
              <div 
                className="relative w-full max-w-4xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setShowVideoModal(false)}
                  className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors z-50 
                            max-[650px]:-top-8 max-[650px]:right-2 max-[650px]:text-3xl 
                            bg-black/50 rounded-full w-10 h-10 flex items-center justify-center
                            max-[650px]:w-8 max-[650px]:h-8"
                >
                  ×
                </button>
                <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden shadow-2xl">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/Xod8Un1RD0E?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}

      </main>
    </div >
  );
}
