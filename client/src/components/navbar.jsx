import { MenuIcon } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const GOOGLE_FORM_LINK =
    "https://docs.google.com/forms/d/e/1FAIpQLSfkglHXnqOnh4rqlrBwgBmWAe2wZy6nAiYhJ3x8rscI_XCfmw/viewform";

  const links = [
    { name: 'Home', scrollId: 'top' },
    { name: 'Programs', scrollId: 'programs' },
    { name: 'Webinars', scrollId: 'webinars' },
    { name: 'About', scrollId: 'about' },
    { name: 'Contact Us', scrollId: 'contact' },
  ];

  return (
    <>
      <nav className='sticky top-0 z-50 flex w-full items-center justify-between border-b border-slate-100 bg-white/80 px-6 py-4 backdrop-blur-xl md:px-16 lg:px-24 font-heading'>

        {/* LEFT: LOGO */}
        <div className="flex-shrink-0">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
          >
            <img src='/assets/edu.png' alt='EDU Consultants' className='h-10 w-auto' />
          </button>
        </div>

        {/* CENTER: MENU */}
        <div className='hidden flex-grow items-center justify-center space-x-8 text-[13px] font-bold tracking-tight text-slate-600 md:flex'>
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                if (link.scrollId === 'top') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  document.getElementById(link.scrollId)?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }
              }}
              className='relative transition-colors hover:text-edu-navy group'
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-edu-red transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* RIGHT: ACTION BUTTONS */}
        <div className="hidden flex-shrink-0 items-center gap-4 md:flex">

          {/* FORM LINK */}
          <a
            href={GOOGLE_FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className='rounded-full bg-edu-navy px-8 py-3 text-[13px] font-bold text-white shadow-xl shadow-edu-navy/20 transition-all hover:bg-edu-red hover:shadow-edu-red/20 hover:-translate-y-0.5 active:scale-95'
          >
            Apply Now
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button onClick={() => setIsOpen(true)} className='p-2 text-edu-navy md:hidden'>
          <MenuIcon className='size-7' />
        </button>
      </nav>
    </>
  );
}
