import {
  InstagramIcon,
  YoutubeIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon
} from "lucide-react";

export default function Footer() {
  const scrollTo = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className='relative bg-white pt-24 font-["Plus_Jakarta_Sans"] border-t border-slate-100'>
      <div className="container mx-auto px-6 md:px-16 lg:px-24">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 pb-20">

          {/* BRAND */}
          <div>
            <button onClick={() => scrollTo("top")} className="mb-6">
              <img src="/assets/edu.png" alt="EDU Consultants" className="h-12" />
            </button>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              We guide students toward their dream education with expert counseling
              and personalized university selection.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-6 text-sm font-black uppercase tracking-widest text-[#CE2029]">
              Quick Links
            </h4>
            <ul className="space-y-4 text-[#001F3F] font-bold">
              <li>
                <button onClick={() => scrollTo("top")} className="hover:text-[#CE2029]">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("webinars")} className="hover:text-[#CE2029]">
                  Webinar
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("contact")} className="hover:text-[#CE2029]">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <h4 className="mb-6 text-sm font-black uppercase tracking-widest text-[#CE2029]">
              Social Media
            </h4>
            <ul className="space-y-4 text-slate-500 font-semibold">

              <li>
                <a
                  href="https://www.instagram.com/edu_consultants/?igsh=MTRnMzJzeHJhenB4aA%3D%3D#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#001F3F] transition-colors"
                >
                  <InstagramIcon size={18} />
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/@educonsultants6746"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#001F3F] transition-colors"
                >
                  <YoutubeIcon size={18} />
                  YouTube
                </a>
              </li>

            </ul>
          </div>

          {/* CONTACT US */}
          <div>
            <h4 className="mb-6 text-sm font-black uppercase tracking-widest text-[#CE2029]">
              Contact Us
            </h4>

            <div className="space-y-5 text-slate-500 text-sm font-medium leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPinIcon className="size-5 text-[#CE2029]" />
                <p>
                  252, 2nd Floor, M G Road, Kottakuppam,<br />
                  Vanur, Tamil Nadu 605104
                </p>
              </div>

              <div className="flex items-center gap-3">
                <PhoneIcon className="size-5 text-[#00E0FF]" />
                <a href="tel:+918015359971" className="hover:text-[#CE2029]">
                  +91 80153 59971
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MailIcon className="size-5 text-[#001F3F]" />
                <a href="mailto:admin@abmgroups.org" className="hover:text-[#CE2029]">
                  admin@abmgroups.org
                </a>
              </div>
            </div>
          </div>

          {/* MAP */}
          <div className="w-full h-[220px] rounded-xl overflow-hidden border border-slate-200">
            <iframe
              title="BM Academy Location"
              src="https://www.google.com/maps?q=BM%20Academy%20Puducherry&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-100 py-10 text-center text-xs font-black uppercase tracking-widest text-slate-400">
          © 2025{" "}
          <a
            href="https://bmtechx.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#001F3F] hover:text-[#CE2029] transition-colors"
          >
            BMTechx.in
          </a>{" "}
          — All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
