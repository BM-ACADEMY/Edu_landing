import { useState } from 'react';
import {
    WalletIcon,
    GlobeIcon,
    ClipboardCheckIcon,
    PlaneIcon,
    UserIcon,
    ArrowRightIcon,
    PlusIcon
} from 'lucide-react';

export default function ServicesSection() {
    // We set the initial state to 0 so the first service is visible by default
    const [activeIndex, setActiveIndex] = useState(0);

    const services = [
        {
            title: 'Global University Selection',
            description: 'Strategic placement in verified medical and engineering faculties across France, Georgia, Kyrgyzstan, and India. We match your academic profile with global standards.',
            icon: GlobeIcon,
            tag: 'Destinations',
            details: '150+ Partner Universities'
        },
        {
            title: 'Financial Architecture',
            description: 'Customized budget roadmaps from ₹10L to ₹30L+. We provide full transparency on tuition, currency exchange, and hidden living costs.',
            icon: WalletIcon,
            tag: 'Planning',
            details: 'No Hidden Charges'
        },
        {
            title: 'Apostille & Compliance',
            description: 'Complete handling of transcript verification, NEET score submission, and international apostille requirements for error-free applications.',
            icon: ClipboardCheckIcon,
            tag: 'Legal',
            details: '100% Document Success'
        },
        {
            title: 'Visa & Logistics Envoy',
            description: 'Professional representation for student visa interviews and end-to-end travel coordination to ensure a seamless arrival at your campus.',
            icon: PlaneIcon,
            tag: 'Schengen/Global',
            details: 'Priority Processing'
        },
        {
            title: 'Executive Consulting',
            description: 'Private 1-to-1 sessions with senior consultants to define your 5-year career roadmap and residency goals post-graduation.',
            icon: UserIcon,
            tag: 'Strategic',
            details: 'Expert Led'
        }
    ];

    return (
<section
  id="about"
  className='relative py-32 bg-white font-["Plus_Jakarta_Sans"] overflow-hidden'
>
            <div className="container mx-auto px-6 md:px-16 lg:px-24">

                {/* PRE-HEADER */}
                <div className='flex items-center gap-4 mb-4'>
                    <div className="h-[1px] w-12 bg-[#CE2029]"></div>
                    <span className='text-[10px] font-black uppercase tracking-[0.4em] text-[#CE2029]'>
                        Our Expertise
                    </span>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-12 gap-20'>

                    {/* LEFT SIDE: Interactive Service List */}
                    <div className='lg:col-span-7 space-y-2'>
                        <h2 className='text-5xl md:text-7xl font-black text-[#001F3F] tracking-tighter mb-12 leading-none'>
                            What We <span className='text-slate-300'>Deliver.</span>
                        </h2>

                        <div className='border-t border-slate-100'>
                            {services.map((service, index) => (
    <div
        key={index}
        onMouseEnter={() => setActiveIndex(index)}
        onClick={() => setActiveIndex(index)}
        className={`group flex items-center justify-between py-8 border-b border-slate-100 cursor-pointer transition-all duration-500 ${
            activeIndex === index ? 'px-4 bg-slate-50/50' : 'px-0'
        }`}
    >
        <div className='flex items-center gap-8'>
            <span className={`text-sm font-black transition-colors duration-500 ${
                activeIndex === index ? 'text-[#CE2029]' : 'text-slate-300'
            }`}>
                0{index + 1}
            </span>
            <h3 className={`text-2xl md:text-3xl font-bold tracking-tight transition-all duration-500 ${
                activeIndex === index ? 'text-[#001F3F] translate-x-2' : 'text-slate-400'
            }`}>
                {service.title}
            </h3>
        </div>

        {/* --- FIXED ICON SECTION --- */}
        <div className="flex items-center justify-center">
            <div
                className={`p-3 rounded-full transition-all duration-500 ease-in-out flex items-center justify-center ${
                    activeIndex === index
                    ? 'bg-[#CE2029] text-white shadow-lg shadow-[#CE2029]/20'
                    : 'bg-slate-50 text-slate-300'
                }`}
                style={{
                    // This forces the rotation regardless of Tailwind's internal state
                    transform: activeIndex === index ? 'rotate(135deg)' : 'rotate(0deg)'
                }}
            >
                <PlusIcon className='size-5 stroke-[3px]' />
            </div>
        </div>
        {/* --- END FIXED ICON SECTION --- */}
    </div>
))}
                        </div>
                    </div>

                    {/* RIGHT SIDE: Dynamic Detail View */}
                    <div className='lg:col-span-5 relative mt-20 lg:mt-0'>
                        <div className='sticky top-32'>
                            <div className='relative overflow-hidden rounded-[3rem] bg-[#001F3F] p-12 text-white shadow-[0_50px_100px_-20px_rgba(0,31,63,0.4)]'>
                                <div className='absolute top-0 right-0 w-64 h-64 bg-[#00E0FF]/10 rounded-full blur-3xl' />

                                {/* We use the index to force a re-render/animation when service changes */}
                                <div key={activeIndex} className='relative z-10 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700'>
                                    <div className='flex items-center justify-between'>
                                        <div className='p-4 bg-white/10 rounded-2xl backdrop-blur-md'>
                                            {/* Dynamic Icon Rendering */}
                                            {(() => {
                                                const ActiveIcon = services[activeIndex].icon;
                                                return <ActiveIcon className='size-8 text-[#00E0FF]' />;
                                            })()}
                                        </div>
                                        <span className='text-[10px] font-black uppercase tracking-widest text-[#00E0FF] bg-white/5 px-4 py-2 rounded-full border border-white/10'>
                                            {services[activeIndex].tag}
                                        </span>
                                    </div>

                                    <h4 className='text-3xl font-black leading-tight'>
                                        {services[activeIndex].title}
                                    </h4>

                                    <p className='text-white/70 text-lg font-medium leading-relaxed italic'>
                                        "{services[activeIndex].description}"
                                    </p>

                                    <div className='pt-8 border-t border-white/10 flex items-center justify-between'>
                                        <span className='text-xs font-bold text-[#00E0FF] uppercase tracking-widest'>
                                            {services[activeIndex].details}
                                        </span>
                                        <a
                                            href="https://docs.google.com/forms/d/e/1FAIpQLSfkglHXnqOnh4rqlrBwgBmWAe2wZy6nAiYhJ3x8rscI_XCfmw/viewform"
                                            target="_blank"
                                            rel="noreferrer"
                                            className='flex items-center gap-2 group/btn font-black text-sm hover:text-[#00E0FF] transition-colors'
                                        >
                                            ENQUIRE <ArrowRightIcon className='size-4 group-hover/btn:translate-x-2 transition-transform' />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <p className='mt-10 text-center text-slate-400 text-sm font-bold tracking-widest uppercase'>
                                Need more info? <span className='text-[#CE2029] cursor-pointer hover:underline ml-2' onClick={() => window.open('https://wa.me/918015359971')}>Book a Call</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
