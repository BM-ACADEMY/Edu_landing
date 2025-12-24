import { MenuIcon, XIcon, ChevronDown, GraduationCap, Globe, BookOpen, Users, ClipboardCheck } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const navigate = useNavigate();

    const links = [
        { name: 'Home', href: '/' },
        {
            name: 'Programs',
            subLinks: [
                { name: 'MBBS Abroad', href: '/mbbs', icon: GraduationCap, description: 'Medical studies worldwide' },
                { name: 'Study in France', href: '/france', icon: Globe, description: 'European education' },
                { name: 'Local Admissions', href: '/local', icon: BookOpen, description: 'Colleges in India' },
            ]
        },
        { name: 'Webinars', href: '/webinars' },
        { name: 'About', href: '/about' },
    ];

    return (
        <>
            <nav className='sticky top-0 z-50 flex w-full items-center justify-between border-b border-slate-100 bg-white/80 px-6 py-4 backdrop-blur-xl md:px-16 lg:px-24 font-heading'>

                {/* 1. LEFT: LOGO */}
                <div className="flex-shrink-0">
                    <Link to='/' className="flex items-center gap-2 transition-transform hover:scale-105 active:scale-95">
                        <img src='/assets/edu.png' alt='EDU Consultants' className='h-10 w-auto' />
                    </Link>
                </div>

                {/* 2. CENTER: DESKTOP MENU */}
                <div className='hidden flex-grow items-center justify-center space-x-8 text-[13px] font-bold tracking-tight text-slate-600 md:flex'>
                    {links.map((link) => link.subLinks ? (
                        <div
                            key={link.name}
                            className='group relative py-2'
                            onMouseEnter={() => setOpenDropdown(link.name)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <div className='flex cursor-pointer items-center gap-1 transition-colors hover:text-edu-navy'>
                                {link.name}
                                <ChevronDown className={`size-3.5 transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180 text-edu-red' : ''}`} />
                            </div>

                            {/* PREMIUM DROPDOWN */}
                            <div className={`absolute top-full left-1/2 -translate-x-1/2 z-40 w-[380px] rounded-3xl border border-slate-100 bg-white p-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out ${openDropdown === link.name ? 'visible translate-y-2 opacity-100' : 'invisible translate-y-4 opacity-0'}`}>
                                <div className='grid gap-1'>
                                    {link.subLinks.map((sub) => (
                                        <Link
                                            to={sub.href}
                                            key={sub.name}
                                            className='group/link flex items-center gap-4 rounded-2xl p-3 transition hover:bg-slate-50'
                                            onClick={() => setOpenDropdown(null)}
                                        >
                                            <div className='flex size-10 items-center justify-center rounded-xl bg-edu-navy/5 text-edu-navy transition group-hover/link:bg-edu-navy group-hover/link:text-white'>
                                                <sub.icon className='size-5' />
                                            </div>
                                            <div className='text-left'>
                                                <p className='text-sm font-bold text-edu-navy'>{sub.name}</p>
                                                <p className='text-[10px] text-slate-400 font-semibold uppercase tracking-tighter'>{sub.description}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Link key={link.name} to={link.href} className='relative transition-colors hover:text-edu-navy group'>
                            {link.name}
                            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-edu-red transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* 3. RIGHT: ACTION BUTTONS */}
                <div className="hidden flex-shrink-0 items-center gap-6 md:flex">
                    <Link
                        to='/support'
                        className='text-[13px] font-bold text-edu-navy hover:text-edu-red transition-colors'
                    >
                        Support
                    </Link>
                    <button
                        onClick={() => navigate('/contact')}
                        className='rounded-full bg-edu-navy px-8 py-3 text-[13px] font-bold text-white shadow-xl shadow-edu-navy/20 transition-all hover:bg-edu-red hover:shadow-edu-red/20 hover:-translate-y-0.5 active:scale-95'
                    >
                        Contact Us
                    </button>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button onClick={() => setIsOpen(true)} className='p-2 text-edu-navy md:hidden'>
                    <MenuIcon className='size-7' />
                </button>
            </nav>

            {/* MOBILE SIDEBAR OVERLAY (Code remains same as your original) */}
            {/* ... */}
        </>
    );
}
