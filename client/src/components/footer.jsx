import { InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const WHATSAPP_LINK = "https://wa.me/918015359971";

    return (
        <footer className='relative bg-white pt-24 font-["Plus_Jakarta_Sans"] overflow-hidden border-t border-slate-100'>
            {/* Subtle Cyan background glow */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00E0FF]/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />

            <div className='container mx-auto px-6 md:px-16 lg:px-24'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20'>

                    {/* Brand & Address Section */}
                    <div className='lg:col-span-5 flex flex-col'>
                        <Link to='/'>
                            <img src='/assets/edu.png' alt='EDU Consultants' className='h-12 w-auto mb-8' />
                        </Link>

                        <div className='space-y-6 mb-10'>
                            <div className='flex items-start gap-4'>
                                <div className='p-2 rounded-xl bg-slate-50'>
                                    <MapPinIcon className='size-5 text-[#CE2029]' />
                                </div>
                                <p className='text-slate-500 text-base leading-relaxed font-medium'>
                                    123 Global Education Hub, <br />
                                    Business District, <br />
                                    Puducherry, India - 605001
                                </p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='p-2 rounded-xl bg-slate-50'>
                                    <PhoneIcon className='size-5 text-[#00E0FF]' />
                                </div>
                                <p className='text-[#001F3F] text-lg font-black tracking-tight'>
                                    +91 80153 59971
                                </p>
                            </div>
                        </div>

                        {/* Social Presence */}
                        <div className='flex items-center gap-4'>
                            {[
                                { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
                                { icon: InstagramIcon, href: '#', label: 'Instagram' },
                                { icon: YoutubeIcon, href: '#', label: 'YouTube' },
                                { icon: TwitterIcon, href: '#', label: 'Twitter' },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className='p-3 rounded-xl bg-slate-50 text-slate-400 transition-all hover:bg-[#001F3F] hover:text-white hover:-translate-y-1'
                                >
                                    <social.icon className='size-5' />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className='lg:col-span-7 grid grid-cols-2 gap-12 sm:gap-24'>
                        <div className='flex flex-col'>
                            <h2 className='mb-8 text-[11px] font-black uppercase tracking-[0.4em] text-[#CE2029]'>
                                Programs
                            </h2>
                            <div className='flex flex-col gap-5 text-[15px] font-bold text-[#001F3F]'>
                                <Link to='/mbbs' className='hover:text-[#CE2029] transition-colors'>MBBS Abroad</Link>
                                <Link to='/france' className='hover:text-[#CE2029] transition-colors'>Study in France</Link>
                                <Link to='/local' className='hover:text-[#CE2029] transition-colors'>Local Admissions</Link>
                                <Link to='/webinars' className='hover:text-[#CE2029] transition-colors'>Live Webinars</Link>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <h2 className='mb-8 text-[11px] font-black uppercase tracking-[0.4em] text-[#CE2029]'>
                                Quick Links
                            </h2>
                            <div className='flex flex-col gap-5 text-[15px] font-bold text-[#001F3F]'>
                                <Link to='/about' className='hover:text-[#CE2029] transition-colors'>About Us</Link>
                                <Link to='/contact' className='hover:text-[#CE2029] transition-colors'>Contact Experts</Link>
                                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className='hover:text-[#CE2029] transition-colors'>Support Chat</a>
                                <Link to='/privacy-policy' className='hover:text-[#CE2029] transition-colors'>Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Updated Copyright Bar */}
                <div className='flex flex-col items-center justify-between gap-6 border-t border-slate-100 py-10 md:flex-row text-[11px] font-black uppercase tracking-[0.2em] text-slate-400'>
                    <div className='flex items-center gap-1'>
                        © 2025
                        <a
                            href='https://bmtechx.in/'
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-[#001F3F] hover:text-[#CE2029] transition-colors font-black ml-1'
                        >
                            BMTechx.in.
                        </a>
                        All Rights Reserved.
                    </div>

                    
                </div>
            </div>
        </footer>
    );
}
