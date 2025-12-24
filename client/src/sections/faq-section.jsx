import { MinusIcon, PlusIcon, MessageCircleIcon } from 'lucide-react';
import { useState } from 'react';

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const data = [
        {
            question: 'Is NEET mandatory for MBBS abroad?',
            answer: 'Yes. Per NMC guidelines, qualifying NEET is essential for Indian students intending to practice in India post-graduation.',
        },
        {
            question: 'How do you assist with the student visa process?',
            answer: 'We offer full-spectrum support: document drafting, appointment strategy, and personalized mock interviews to ensure success.',
        },
        {
            question: 'Are there scholarships for France & MBBS?',
            answer: 'We specialize in Eiffel and Charpak grants for France, and merit-based tuition waivers for specific medical universities.',
        },
        {
            question: 'Which program fits my budget?',
            answer: 'Our 1-to-1 sessions align your academic profile with global options ranging from ₹10L to ₹30L+ packages.',
        }
    ];

    return (
        <section className='relative py-24 bg-white font-["Plus_Jakarta_Sans"] overflow-hidden'>
            <div className="container mx-auto px-6 md:px-16 lg:px-24">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <div className='flex items-center gap-3 mb-6'>
                            <span className="h-[3px] w-12 bg-[#CE2029]"></span>
                            <span className='text-[11px] font-[900] uppercase tracking-[0.3em] text-[#CE2029]'>
                                Knowledge Base
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-[900] text-[#001F3F] tracking-tighter leading-none">
                            Expert <span className="text-slate-400">Insights</span>
                        </h2>
                    </div>
                    <div className='hidden lg:block'>
                        <a href="https://wa.me/918015359971" className='flex items-center gap-4 text-sm font-black text-[#001F3F] group'>
                            GET DIRECT SUPPORT
                            <div className='p-3 rounded-full bg-slate-50 group-hover:bg-[#00E0FF] group-hover:text-white transition-all'>
                                <MessageCircleIcon className='size-5' />
                            </div>
                        </a>
                    </div>
                </div>

                {/* Minimalist List */}
                <div className='mx-auto w-full max-w-5xl'>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className={`group border-b border-slate-100 transition-all duration-500 ${openIndex === index ? 'py-10' : 'py-8'}`}
                        >
                            <div
                                className='flex items-start gap-8 cursor-pointer'
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                {/* Numbering System */}
                                <span className={`text-sm font-black tracking-widest transition-colors duration-500 ${openIndex === index ? 'text-[#CE2029]' : 'text-slate-300'}`}>
                                    0{index + 1}
                                </span>

                                <div className='flex-1'>
                                    <div className='flex items-center justify-between gap-6'>
                                        <h3 className={`text-xl md:text-3xl font-bold tracking-tight transition-all duration-500 ${openIndex === index ? 'text-[#001F3F] translate-x-2' : 'text-slate-500 group-hover:text-slate-800'}`}>
                                            {item.question}
                                        </h3>
                                        <div className={`p-2 rounded-full transition-all duration-500 ${openIndex === index ? 'bg-[#CE2029] text-white rotate-180' : 'bg-slate-50 text-slate-300'}`}>
                                            {openIndex === index ? <MinusIcon className='size-5' /> : <PlusIcon className='size-5' />}
                                        </div>
                                    </div>

                                    <div className={`overflow-hidden transition-all duration-700 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
                                        <p className='text-lg leading-relaxed text-slate-500 font-medium max-w-3xl italic'>
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Support CTA */}
                <div className='mt-16 lg:hidden'>
                    <a href="https://wa.me/918015359971" className='flex w-full items-center justify-center gap-4 rounded-2xl bg-[#001F3F] py-5 text-white font-black text-xs tracking-widest'>
                        WHATSAPP SUPPORT
                        <MessageCircleIcon className='size-4' />
                    </a>
                </div>
            </div>
        </section>
    );
}
