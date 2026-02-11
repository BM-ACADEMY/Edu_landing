import { CalendarIcon, VideoIcon, ArrowRightIcon } from 'lucide-react';

export default function UpcomingWebinarsSection() {
    // Fixed your Google Form link variable
    const GOOGLE_FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSfkglHXnqOnh4rqlrBwgBmWAe2wZy6nAiYhJ3x8rscI_XCfmw/viewform";

    const webinars = [
        {
            topic: 'MBBS in Georgia: Eligibility, Fees & Admission Process',
            date: 'Sunday | 4:00 PM IST',
            category: 'MBBS ABROAD',
            // Updated to a reliable high-res medical image
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
        },
        {
            topic: 'Study in France: Universities, Costs & Admission Process',
            date: 'Saturday | 6:00 PM IST',
            category: 'STUDY IN FRANCE',
            // Updated to a reliable high-res France image
            image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop',
        },
        {
            topic: 'Local College Admissions: Counselling, Cut-Offs & Seats',
            date: 'Sunday | 11:00 AM IST',
            
            category: 'LOCAL ADMISSIONS',
            // Updated to a reliable high-res graduation image
            image: 'https://images.unsplash.com/photo-1667273704848-32df02bd29f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ];

    return (
        <section id="webinars" className='relative py-24 bg-white font-["Plus_Jakarta_Sans"] overflow-hidden'>
            {/* Background Decoration */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#00E0FF]/5 rounded-full blur-3xl opacity-50" />

            <div className="container mx-auto px-6 md:px-16 lg:px-24">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className='flex items-center gap-3 mb-4'>
                            <span className="h-[3px] w-12 bg-[#CE2029]"></span>
                            <span className='text-[11px] font-[900] uppercase tracking-[0.3em] text-[#CE2029]'>
                                Live Learning
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-[900] text-slate-900 tracking-tighter leading-none">
                            Upcoming <span className="text-slate-400">Webinars</span>
                        </h2>
                    </div>
                    <p className="max-w-xs text-sm font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                        Join expert-led sessions on MBBS abroad, France education, and local admissions.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {webinars.map((webinar, index) => (
                        <div key={index} className='group flex flex-col overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(206,32,41,0.1)] hover:-translate-y-3'>

                            {/* Image with Error Handling */}
                            <div className="relative h-56 w-full overflow-hidden">
                                <img
                                    src={webinar.image}
                                    alt={webinar.topic}
                                    className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'

                                />
                                <div className="absolute top-6 left-6 rounded-xl bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-[#001F3F] backdrop-blur-md shadow-sm">
                                    {webinar.category}
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="flex flex-col p-8 bg-white flex-1">
                                <div className="mb-4 flex items-center gap-2 text-xs font-black text-[#CE2029] uppercase tracking-wider">
                                    <CalendarIcon className="size-4" />
                                    <span>{webinar.date}</span>
                                </div>

                                <h3 className='text-2xl font-extrabold leading-[1.2] text-[#001F3F] transition-colors group-hover:text-[#CE2029]'>
                                    {webinar.topic}
                                </h3>

                                <div className="mt-auto flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-tight pt-6">
                                    <VideoIcon className="size-4 text-slate-300" />
                                    <span>Live via Zoom/Meet</span>
                                </div>

                                <a
                                    href={GOOGLE_FORM_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='mt-8 flex items-center justify-center gap-3 rounded-2xl bg-[#001F3F] px-6 py-4 text-sm font-black text-white transition-all hover:bg-[#CE2029] hover:shadow-[0_15px_30px_-5px_rgba(206,32,41,0.3)] active:scale-95'
                                >
                                    REGISTER FOR FREE
                                    <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
