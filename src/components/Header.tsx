'use client'

import React, { useState, useRef, useEffect } from 'react'

const Header = () => {
    const [lang, setLang] = useState<'PL' | 'EN'>('PL')
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)
    
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('hero')
    
    const SCROLL_OFFSET = 20

    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', onClick)
        
        const handleScroll = (): void => {
            const scrollPosition = window.scrollY
            if (scrollPosition > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
            
            const sections = ['hero', 'mainFunction', 'opinions', 'faq', 'joinTester']
            const headerElement = document.querySelector('header')
            const headerHeight = headerElement ? headerElement.offsetHeight : 0
            
            let nextActiveSection = ''
            let minDistance = Infinity
            
            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    const distance = Math.abs(rect.top - headerHeight)
                    
                    if (rect.top - headerHeight < 100 && distance < minDistance) {
                        minDistance = distance
                        nextActiveSection = section
                    }
                }
            }
            
            if (nextActiveSection && nextActiveSection !== activeSection) {
                setActiveSection(nextActiveSection)
            }
        }
        
        window.addEventListener('scroll', handleScroll)
        handleScroll()
        
        return () => {
            document.removeEventListener('mousedown', onClick)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault()
        
        const element = document.getElementById(sectionId)
        if (element) {
            const headerElement = document.querySelector('header')
            const headerHeight = headerElement ? headerElement.offsetHeight : 0
            
            const elementPosition = element.getBoundingClientRect().top + window.scrollY
            
            const offsetPosition = elementPosition - headerHeight
            
            setActiveSection(sectionId)
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
            
            window.history.pushState(null, '', `#${sectionId}`)
        }
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
            ${scrolled 
                ? 'py-[15px] max-[650px]:py-[10px] bg-white/60 backdrop-blur-lg shadow-md' 
                : 'py-[25px] max-[650px]:py-[20px] bg-transparent'
            }`}>
            <div className="container flex items-center justify-between relative">
                <div className={`transition-all duration-300 ${!scrolled ? 'filter drop-shadow-md' : ''}`}>
                    <img
                        src="/images/logo.svg"
                        alt="Fix Expert Logo"
                        className="max-[1200px]:w-[130px] max-[650px]:w-[120px]"
                    />
                </div>

                <nav aria-label="Primary Navigation" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-[990px]:hidden" >
                    <ul className={`flex items-center px-[26px] rounded-full max-[1050px]:px-0 transition-all duration-300 ${scrolled ? 'border-[1px] border-[#D9D9D9] bg-white/80' : ''}`}>
                        <li className="px-4 py-5 font-bold">
                            <a
                                href="#hero"
                                onClick={(e) => handleAnchorClick(e, 'hero')}
                                className={`duration-300 hover:text-[#B2CC07] ${activeSection === 'hero' ? 'text-[#B2CC07]' : 'text-black'}`}
                            >
                                Home
                            </a>
                        </li>
                        <li className="px-4 py-5 font-bold">
                            <a
                                href="#mainFunction"
                                onClick={(e) => handleAnchorClick(e, 'mainFunction')}
                                className={`duration-300 hover:text-[#B2CC07] ${activeSection === 'mainFunction' ? 'text-[#B2CC07]' : 'text-black'}`}
                            >
                                Dla kogo
                            </a>
                        </li>
                        <li className="px-4 py-5 font-bold">
                            <a
                                href="#opinions"
                                onClick={(e) => handleAnchorClick(e, 'opinions')}
                                className={`duration-300 hover:text-[#B2CC07] ${activeSection === 'opinions' ? 'text-[#B2CC07]' : 'text-black'}`}
                            >
                                Testimonials
                            </a>
                        </li>
                        <li className="px-4 py-5 font-bold">
                            <a
                                href="#faq"
                                onClick={(e) => handleAnchorClick(e, 'faq')}
                                className={`duration-300 hover:text-[#B2CC07] ${activeSection === 'faq' ? 'text-[#B2CC07]' : 'text-black'}`}
                            >
                                FAQ
                            </a>
                        </li>
                        <li className="px-4 py-5 font-bold">
                            <a
                                href="#joinTester"
                                onClick={(e) => handleAnchorClick(e, 'joinTester')}
                                className={`duration-300 hover:text-[#B2CC07] ${activeSection === 'joinTester' ? 'text-[#B2CC07]' : 'text-black'}`}
                            >
                                Kontakt
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="flex items-center max-[1200px]:text-base">
                    <div ref={dropdownRef} className="relative mr-[26px] max-[650px]:mr-[18px]">
                        <button
                            onClick={() => setIsOpen(o => !o)}
                            aria-haspopup="menu"
                            aria-expanded={isOpen}
                            className="flex items-center font-bold transition"
                        >
                            <span className="pr-2 text-base max-[650px]:text-xs">{lang}</span>
                            <img
                                src="/icons/arrow-down-black.svg"
                                alt=""
                                className={`w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        {isOpen && (
                            <ul className="absolute left-0 mt-2 w-20 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-20">
                                {['PL', 'EN'].map((code) => (
                                    <li key={code}>
                                        <button
                                            onClick={() => { setLang(code as 'PL' | 'EN'); setIsOpen(false) }}
                                            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition"
                                        >
                                            {code}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <a href="https://tally.so/r/mYeEoz" target="_blank" rel="noopener noreferrer">
                        <button className="w-[194px] h-[58px] bg-black text-white font-bold rounded-full flex items-center justify-center border-2 border-black duration-300 group hover:bg-white hover:text-black max-[1200px]:w-[170px] max-[1200px]:h-[50px] max-[650px]:w-[145px] max-[650px]:h-11 max-[650px]:text-xs">
                            <span className="mr-1.5">Zostań testerem</span>
                            <img
                                src="/icons/arrow-right-white.svg"
                                alt=""
                                className="duration-300 invert-0 group-hover:invert"
                            />
                        </button>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header