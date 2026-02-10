import {
    UserCheckIcon,
    GlobeIcon,
    ShieldCheckIcon,
    ZapIcon,
    GraduationCapIcon,
    FileTextIcon
} from 'lucide-react';

export default function WhyChooseUsSection() {
    const data = [
        {
            title: 'Personalized Guidance',
            description: 'One-on-one counselling tailored to your academic goals, budget, and career plans.',
            icon: UserCheckIcon,
        },
        {
            title: 'International Study Options',
            description: 'Guided pathways for study abroad in France and MBBS admissions in Georgia.',
            icon: GlobeIcon,
        },
        {
            title: 'Local Admissions',
            description: 'Expert assistance for securing seats in top local colleges and universities.',
            icon: GraduationCapIcon,
        },
        {
            title: 'Transparent Process',
            description: 'No hidden costs, clear fee structures, and complete transparency at every stage.',
            icon: ShieldCheckIcon,
        },
        {
            title: 'Visa & Documentation',
            description: 'Hassle-free visa support and end-to-end documentation handling.',
            icon: FileTextIcon,
        },
        {
            title: 'Instant Support',
            description: 'Get your queries resolved quickly through our 24/7 WhatsApp support team.',
            icon: ZapIcon,
        },
    ];

    return (
        <section className='relative py-24 bg-white overflow-hidden font-["Plus_Jakarta_Sans"]'>
            <div className="container mx-auto px-6 md:px-16 lg:px-24">

                {/* Header Section: Stacked Layout */}
                <div className="mb-20 max-w-3xl">
                    <div className='flex items-center gap-3 mb-6'>
                        <span className="h-[3px] w-12 bg-[#CE2029]"></span>
                        <span className='text-[11px] font-[900] uppercase tracking-[0.3em] text-[#CE2029]'>
                            THE EDU CONSULTANT ADVANTAGE
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-[900] text-slate-900 tracking-tighter leading-[1.1] mb-8">
                        Why Students <br />
                        <span className="text-slate-400">Trust Us</span>
                    </h2>

                    {/* Supporting line moved below the heading with updated text */}
                    <p className="text-lg text-slate-500 font-medium leading-relaxed border-l-[3px] border-slate-100 pl-6">
                        We simplify international and local admissions through expert guidance, transparent processes, and dedicated support.
                    </p>
                </div>

                {/* Grid Layout mimicking the reference cards */}
                <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2'>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className='group relative flex flex-col md:flex-row items-start gap-6 rounded-[2.5rem] bg-slate-50/50 p-10 transition-all duration-500 hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(0,224,255,0.15)] border border-transparent hover:border-[#00E0FF]/20'
                        >
                            {/* Icon Container with Light Blue / Cyan */}
                            <div className='flex size-16 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white transition-all duration-500 group-hover:bg-[#00E0FF] group-hover:shadow-[0_0_20px_rgba(0,224,255,0.4)]'>
                                <item.icon className='size-7 stroke-[2px]' />
                            </div>

                            <div className="space-y-3">
                                <h3 className='text-2xl font-extrabold text-slate-900 tracking-tight'>
                                    {item.title}
                                </h3>
                                <p className='text-[16px] leading-relaxed text-slate-500 font-medium max-w-md'>
                                    {item.description}
                                </p>
                            </div>

                            {/* Corner Accent - Light Blue Blur */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E0FF]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}