import { ArrowRightIcon, CheckCircle2, MessageSquare } from 'lucide-react';

export default function HeroSection() {
    const features = ['Free Registration', '24/7 WhatsApp Support', 'Monthly Webinars'];

    return (
        <section className='relative min-h-screen flex items-center bg-white px-6 lg:px-24 overflow-hidden'>

            {/* BACKGROUND: Minimalist and Clean */}
            <div className="absolute inset-0 hero-gradient z-0" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 translate-x-20 z-0 hidden lg:block" />

            <div className='relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center'>

                {/* LEFT CONTENT: (Occupies 7 columns) */}
                <div className='lg:col-span-7 space-y-10'>
                    <div className='space-y-4'>
                        <div className='flex items-center gap-3'>
                            <span className="h-[1px] w-8 bg-edu-red"></span>
                            <span className='text-[11px] font-bold uppercase tracking-[0.3em] text-edu-red'>
                                Expert Guidance Available
                            </span>
                        </div>

                        <h1 className='text-5xl md:text-7xl lg:text-8xl font-extrabold text-edu-navy leading-[1.05] tracking-[-0.04em] font-heading'>
                            Study Abroad <br />
                            <span className='relative inline-block'>
                                MBBS | France
                                <span className='absolute bottom-2 left-0 w-full h-3 bg-edu-red/10 -z-10'></span>
                            </span>
                        </h1>

                        <p className='max-w-xl text-lg md:text-xl text-slate-500 font-light leading-relaxed'>
                            Empowering students with seamless international and local admission pathways.
                            Your global medical career begins with <span className='text-edu-navy font-semibold underline decoration-edu-red/30'>trusted expertise.</span>
                        </p>
                    </div>

                    {/* CTA BLOCK: Clean Alignment */}
                    <div className='flex flex-wrap gap-6'>
                        <a
                            href='https://docs.google.com/forms/d/e/1FAIpQLSfkglHXnqOnh4rqlrBwgBmWAe2wZy6nAiYhJ3x8rscI_XCfmw/viewform'
                            target="_blank"
                            className='inline-flex items-center gap-3 bg-edu-navy text-white px-10 py-5 rounded-full font-bold text-sm tracking-wide transition-all hover:bg-edu-red hover:-translate-y-1 shadow-lg shadow-edu-navy/20'
                        >
                            REGISTER NOW
                            <ArrowRightIcon className='size-4' />
                        </a>

                        <a
                            href='https://wa.me/918015359971'
                            target="_blank"
                            className='inline-flex items-center gap-3 bg-white border border-slate-200 px-10 py-5 rounded-full font-bold text-sm text-edu-navy hover:border-edu-navy transition-colors'
                        >
                            <MessageSquare className='size-4 text-green-500' />
                            CONSULT ON WHATSAPP
                        </a>
                    </div>

                    {/* FEATURE ROW */}
                    <div className='flex flex-wrap gap-8 pt-6'>
                        {features.map((feature, i) => (
                            <div key={i} className='flex items-center gap-2'>
                                <CheckCircle2 className='size-5 text-edu-red' />
                                <span className='text-xs font-semibold text-slate-700 uppercase tracking-wider'>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT VISUAL: (Occupies 5 columns) */}
                <div className='lg:col-span-5 relative'>
                    <div className='relative group'>
                        {/* The "Floating" Card effect for Premium feel */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-edu-navy to-edu-red opacity-5 rounded-[3rem] blur-2xl group-hover:opacity-10 transition-opacity" />

                        <div className='relative rounded-[2.5rem] border-[1px] border-slate-200 p-4 bg-white shadow-2xl'>
                            <div className='overflow-hidden rounded-[1.8rem] aspect-[4/5]'>
                                <img
                                    src="https://images.unsplash.com/photo-1546237769-db6351c228d0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    className='w-full h-full object-cover  transition-all duration-700'
                                    alt="Professional Consultancy"
                                />
                            </div>

                            {/* Floating Professional Badge */}
                            <div className='absolute -bottom-6 -left-10 bg-edu-navy p-6 rounded-3xl shadow-2xl text-white w-64 border-t border-white/10'>
                                <p className='text-[10px] font-bold opacity-60 uppercase tracking-tighter'>Certified Excellence</p>
                                <div className='flex items-end gap-2 mt-1'>
                                    <span className='text-4xl font-bold leading-none'>98%</span>
                                    <span className='text-[10px] font-medium leading-none mb-1'>Success Rate</span>
                                </div>
                                <div className='mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden'>
                                    <div className='h-full w-[98%] bg-edu-red'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
