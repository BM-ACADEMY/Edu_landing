import { GraduationCapIcon, MapPinIcon, BanknoteIcon, CalendarIcon, ArrowRightIcon } from 'lucide-react';

export default function PopularProgramsSection() {
    const programs = [
        {
            category: 'MBBS Abroad',
            title: 'Medical Degree in Georgia & Kyrgyzstan',
            details: [
                { icon: MapPinIcon, label: 'Destinations', value: 'Georgia, Kyrgyzstan, Uzbekistan' },
                { icon: BanknoteIcon, label: 'Fee Range', value: '₹18L – ₹30L (Total Package)' },
                { icon: CalendarIcon, label: 'Intakes', value: 'September & March' },
                { icon: GraduationCapIcon, label: 'Eligibility', value: 'NEET Qualified' },
            ],
            image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=600',
        },
        {
            category: 'France UG/PG',
            title: 'Study in France (Public & Private)',
            details: [
                { icon: MapPinIcon, label: 'Disciplines', value: 'Business, Engineering, Arts' },
                { icon: BanknoteIcon, label: 'Scholarships', value: 'Eiffel & Charpak Available' },
                { icon: CalendarIcon, label: 'Intakes', value: 'September Intake' },
                { icon: GraduationCapIcon, label: 'Language', value: 'English & French Tracks' },
            ],
            image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=600',
        },
        {
            category: 'Local Admissions',
            title: 'Top Indian College Admissions',
            details: [
                { icon: MapPinIcon, label: 'Disciplines', value: 'Nursing, Engineering, Allied Health' },
                { icon: BanknoteIcon, label: 'Courses', value: 'Arts, Science & Professional' },
                { icon: CalendarIcon, label: 'Intakes', value: 'June – August' },
                { icon: GraduationCapIcon, label: 'Support', value: 'Direct Admission Assistance' },
            ],
            image: 'https://images.unsplash.com/photo-1763924041841-04527f0bb1a5?q=80&w=782&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }
    ];

    return (
        <section className='relative py-32 bg-white font-["Plus_Jakarta_Sans"] overflow-hidden'>
            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#00E0FF]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-6 md:px-16 lg:px-24">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <div className='flex items-center gap-3 mb-6'>
                            <span className="h-[3px] w-12 bg-[#CE2029]"></span>
                            <span className='text-[11px] font-[900] uppercase tracking-[0.3em] text-[#CE2029]'>
                                Global Pathways
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-[900] text-[#001F3F] tracking-tighter leading-none">
                            Popular <span className="text-slate-400">Programs</span>
                        </h2>
                    </div>
                    <p className="max-w-sm text-lg text-slate-500 font-medium leading-relaxed border-l-2 border-slate-100 pl-6">
                        Explore our sought-after pathways with clear details on costs and intake timelines.
                    </p>
                </div>

                {/* Programs Grid */}
                <div className='grid grid-cols-1 gap-10 lg:grid-cols-3'>
                    {programs.map((program, index) => (
                        <div key={index} className='group flex flex-col overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,31,63,0.1)] hover:-translate-y-3'>

                            {/* Image Header with Category Badge */}
                            <div className='h-52 w-full relative overflow-hidden'>
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1523050335392-9bc5675e583f?q=80&w=600'; }}
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-[#001F3F]/60 to-transparent' />
                                <div className='absolute bottom-6 left-8 flex items-center gap-2'>
                                    <span className='h-2 w-2 rounded-full bg-[#00E0FF] shadow-[0_0_8px_#00E0FF]' />
                                    <p className='text-[10px] font-black text-white tracking-[0.2em] uppercase'>
                                        {program.category}
                                    </p>
                                </div>
                            </div>

                            {/* Content Body */}
                            <div className='p-10 flex flex-col flex-1'>
                                <h3 className='text-2xl font-black text-[#001F3F] mb-8 leading-[1.2] group-hover:text-[#CE2029] transition-colors'>
                                    {program.title}
                                </h3>

                                <div className='space-y-6 flex-1'>
                                    {program.details.map((detail, idx) => (
                                        <div key={idx} className='flex items-start gap-4'>
                                            <div className='mt-1 flex size-8 items-center justify-center rounded-lg bg-slate-50 text-[#00E0FF] group-hover:bg-[#00E0FF]/10 transition-colors'>
                                                <detail.icon className='size-4 stroke-[2.5px]' />
                                            </div>
                                            <div>
                                                <p className='text-[10px] font-black uppercase tracking-widest text-slate-400'>
                                                    {detail.label}
                                                </p>
                                                <p className='text-[14px] font-bold text-slate-700'>
                                                    {detail.value}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Premium Action Button */}
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSfkglHXnqOnh4rqlrBwgBmWAe2wZy6nAiYhJ3x8rscI_XCfmw/viewform"
                                    target="_blank"
                                    className='mt-10 flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#001F3F] text-white font-black text-xs tracking-widest transition-all hover:bg-[#CE2029] hover:shadow-[0_15px_30px_-5px_rgba(206,32,41,0.3)] active:scale-95'
                                >
                                    GET BROCHURE
                                    <ArrowRightIcon className="size-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
