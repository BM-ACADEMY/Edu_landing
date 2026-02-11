import {
  MailIcon,
  PhoneIcon,
  MessageCircleIcon,
  ArrowRightIcon,
  GlobeIcon,
  CheckCircle2
} from 'lucide-react';

export default function AboutContactSection() {
  const GOOGLE_FORM_LINK =
    "https://docs.google.com/forms/d/e/1FAIpQLSfkglHXnqOnh4rqlrBwgBmWAe2wZy6nAiYhJ3x8rscI_XCfmw/viewform";
  const WHATSAPP_LINK = "https://wa.me/918015359971";

  return (
    <section
      id="contact"
      className='scroll-mt-28 relative pt-32 pb-20 bg-[#001F3F] font-["Plus_Jakarta_Sans"] overflow-hidden text-white'
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#CE2029]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00E0FF]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-20 items-start'>

          {/* LEFT COLUMN */}
          <div className='lg:col-span-7 flex flex-col space-y-12'>
            <div>
              <div className='flex items-center gap-3 mb-6'>
                <span className="h-[3px] w-12 bg-[#CE2029]"></span>
                <span className='text-[10px] font-black uppercase tracking-[0.4em] text-[#CE2029]'>
                  Established 2025
                </span>
              </div>

              <h2 className='text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8'>
                Empowering Students to <br />
                <span className='text-[#00E0FF]'>Reach Further.</span>
              </h2>

              <p className='text-white/60 text-xl leading-relaxed font-medium max-w-2xl'>
                At EduConsultants, we believe every student deserves clear, honest, and professional guidance. We specialize in end-to-end support for{" "}
                <span className="text-white font-bold underline decoration-[#CE2029] underline-offset-4">
                  MBBS Abroad
                </span>
                , leading European universities, and premium local admissions.
              </p>
            </div>

            {/* VALUE PILLARS */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='group p-8 rounded-3xl bg-white/5 border border-white/10 transition-all hover:bg-white/10'>
                <CheckCircle2 className='size-8 text-[#CE2029] mb-4' />
                <h4 className='font-black text-xl tracking-tight mb-2'>
                  Student-First
                </h4>
                <p className='text-white/40 text-sm font-medium'>
                  Every plan is thoughtfully tailored to your academic goals and budget.
                </p>
              </div>

              <div className='group p-8 rounded-3xl bg-white/5 border border-white/10 transition-all hover:bg-white/10'>
                <GlobeIcon className='size-8 text-[#00E0FF] mb-4' />
                <h4 className='font-black text-xl tracking-tight mb-2'>
                  Direct Access
                </h4>
                <p className='text-white/40 text-sm font-medium'>
                  No middlemen. Direct university communication and transparent fee structures.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className='lg:col-span-5 lg:mt-16'>
            <div className='bg-white rounded-[3rem] p-10 md:p-12 text-[#001F3F] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden'>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E0FF]/10 rounded-full blur-3xl" />

              <h3 className='text-3xl font-black tracking-tight mb-10'>
                Get in Touch
              </h3>

              <div className='space-y-8 relative z-10'>

                {/* WHATSAPP */}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className='flex items-center gap-6 group'
                >
                  <div className='bg-[#001F3F] p-4 rounded-2xl text-white transition-transform group-hover:scale-110 group-hover:bg-[#CE2029]'>
                    <MessageCircleIcon className='size-6' />
                  </div>
                  <div>
                    <p className='text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1'>
                      Immediate Help
                    </p>
                    <p className='text-xl font-bold tracking-tight'>
                      Chat on WhatsApp
                    </p>
                  </div>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:admin@abmgroups.org"
                  className='flex items-center gap-6 group'
                >
                  <div className='bg-slate-100 p-4 rounded-2xl text-[#001F3F] transition-transform group-hover:scale-110'>
                    <MailIcon className='size-6' />
                  </div>
                  <div>
                    <p className='text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1'>
                      Email Support
                    </p>
                    <p className='text-xl font-bold tracking-tight group-hover:text-[#CE2029] transition-colors'>
                      admin@abmgroups.org
                    </p>
                  </div>
                </a>

                {/* PHONE */}
                <a
                  href="tel:+918015359971"
                  className='flex items-center gap-6 group'
                >
                  <div className='bg-slate-100 p-4 rounded-2xl text-[#001F3F] transition-transform group-hover:scale-110'>
                    <PhoneIcon className='size-6' />
                  </div>
                  <div>
                    <p className='text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1'>
                      Direct Line
                    </p>
                    <p className='text-xl font-bold tracking-tight group-hover:text-[#CE2029] transition-colors'>
                      +91 80153 59971
                    </p>
                  </div>
                </a>
              </div>

              {/* CTA */}
              <a
                href={GOOGLE_FORM_LINK}
                target="_blank"
                rel="noreferrer"
                className='mt-12 flex items-center justify-between bg-[#CE2029] text-white p-6 rounded-2xl font-black text-sm tracking-widest transition-all hover:bg-[#001F3F] group'
              >
                START APPLICATION
                <ArrowRightIcon className='size-5 transition-transform group-hover:translate-x-2' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
