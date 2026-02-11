import { ClipboardEditIcon, MessageSquareIcon, FingerprintIcon, ArrowRightIcon } from 'lucide-react';

export default function ProcessSection() {
    const steps = [
        {
            title: 'Register Your Profile',
            description: 'Fill out our quick lead form with your study preferences (MBBS, France, or local options).',
            icon: ClipboardEditIcon,
        },
        {
            title: 'Expert Outreach',
            description: 'Our counselors will contact you via WhatsApp within 24–48 hours for a personalized discovery call.',
            icon: MessageSquareIcon,
        },
        {
            title: 'Tracking & Updates',
            description: 'Receive a unique Application ID to track your admission status in real time.',
            icon: FingerprintIcon,
        },
    ];

    return (
        <section className='relative py-32 bg-[#FDFDFD] font-["Plus_Jakarta_Sans"] overflow-hidden'>
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00E0FF]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 md:px-16 lg:px-24">
                {/* Header Section */}
                {/* Header Section */}
                <div className="flex flex-col mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className='flex items-center gap-3 mb-6'>
                            <span className="h-[3px] w-12 bg-[#CE2029]"></span>
                            <span className='text-[11px] font-[900] uppercase tracking-[0.3em] text-[#CE2029]'>
                                The Roadmap
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-[900] text-[#001F3F] tracking-tighter leading-none">
                            How Our <br />
                            <span className="text-slate-400">Process Works</span>
                        </h2>
                    </div>
                    <p className="max-w-2xl text-lg text-slate-500 font-medium leading-relaxed border-l-2 border-slate-100 pl-6">
                        We’ve streamlined the journey from exploration to enrollment into three simple stages.
                    </p>
                </div>

                <div className='relative mt-16 w-full max-w-6xl mx-auto'>
                    {/* Connecting Line (Desktop) - Replaced with a solid Navy/Red gradient line */}
                    <div className='absolute top-[40px] left-[10%] hidden h-[2px] w-[80%] bg-gradient-to-r from-[#00E0FF]/20 via-[#CE2029]/20 to-[#00E0FF]/20 md:block'></div>

                    <div className='grid grid-cols-1 gap-16 md:grid-cols-3'>
                        {steps.map((step, index) => (
                            <div key={index} className='relative flex flex-col items-center text-center group'>
                                {/* Step Number Indicator */}
                                <div className='mb-6 text-[10px] font-black text-[#CE2029] uppercase tracking-[0.4em]'>
                                    Stage 0{index + 1}
                                </div>

                                {/* Icon Circle - Navy with Red Glow on hover */}
                                <div className={`relative z-10 flex size-24 items-center justify-center rounded-[2rem] bg-white border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] text-[#001F3F] transition-all duration-500 group-hover:bg-[#001F3F] group-hover:text-white group-hover:-translate-y-2`}>
                                    <step.icon className='size-10 stroke-[1.5px]' />

                                    {/* Hover Red Badge */}
                                    <div className='absolute -right-2 -top-2 flex size-8 items-center justify-center rounded-xl bg-[#CE2029] text-[10px] font-black text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity'>
                                        GO
                                    </div>
                                </div>

                                <h3 className='mt-10 text-2xl font-black text-[#001F3F] tracking-tight'>
                                    {step.title}
                                </h3>

                                <p className='mt-4 text-[15px] leading-relaxed text-slate-500 font-medium px-6'>
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Premium CTA Button */}
                <div className='mt-24 flex flex-col items-center'>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfkglHXnqOnh4rqlrBwgBmWAe2wZy6nAiYhJ3x8rscI_XCfmw/viewform"
                        target="_blank"
                        className='group relative flex items-center gap-4 overflow-hidden rounded-2xl bg-[#001F3F] px-12 py-5 text-sm font-black text-white transition-all hover:bg-[#CE2029] hover:shadow-[0_20px_40px_rgba(206,32,41,0.3)] active:scale-95'
                    >
                        <span className="tracking-widest italic">START STEP 1 NOW</span>
                        <ArrowRightIcon className='size-5 transition-transform group-hover:translate-x-2' />
                    </a>
                    <div className='mt-6 flex items-center gap-2'>
                        <div className="h-1.5 w-1.5 rounded-full bg-[#00E0FF] animate-pulse" />
                        <p className='text-[10px] text-slate-400 font-black uppercase tracking-widest'>
                            100% Free Consultation
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
