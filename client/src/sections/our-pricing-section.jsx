import { ClockIcon, ArrowUpRightIcon, TagIcon } from 'lucide-react';

export default function TrendingContentSection() {
  const APPLY_LINK =
    "https://docs.google.com/forms/d/e/1FAIpQLSfkglHXnqOnh4rqlrBwgBmWAe2wZy6nAiYhJ3x8rscI_XCfmw/viewform";

  const trendingPosts = [
    {
      title: 'Top MBBS Colleges in Georgia: 2025 Rankings',
      excerpt: 'Exploring the best medical universities in Georgia with English-taught programs and global recognition.',
      category: 'MBBS Abroad',
      date: '2 Days Ago',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600',
      link: '#'
    },
    {
      title: 'Scholarships for France: How to Apply',
      excerpt: 'A complete guide to Eiffel Excellence and other scholarships for international students in 2025.',
      category: 'Scholarships',
      date: '5 Days Ago',
      image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600',
      link: '#'
    },
    {
      title: 'Local vs Abroad: Medical Education Reality',
      excerpt: 'Comparing the ROI, clinical exposure, and licensing requirements for India vs. foreign universities.',
      category: 'Expert Guide',
      date: 'Trending',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600',
      link: '#'
    }
  ];

  return (
    <section className='relative py-24 bg-[#FDFDFD] font-["Plus_Jakarta_Sans"] overflow-hidden'>
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#00E0FF]/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-16 lg:px-24">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className='flex items-center gap-3 mb-6'>
              <span className="h-[3px] w-12 bg-[#CE2029]"></span>
              <span className='text-[11px] font-[900] uppercase tracking-[0.3em] text-[#CE2029]'>
                Editorial Insights
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-[900] text-[#001F3F] tracking-tighter leading-none">
              Trending <span className="text-slate-400">Content</span>
            </h2>
          </div>

          {/* DESKTOP APPLY BUTTON */}
          <a
            href={APPLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className='hidden lg:flex items-center gap-3 text-sm font-black text-[#001F3F] hover:text-[#CE2029] transition-colors group'
          >
            GET BROCHURE / APPLY
            <div className='p-2 rounded-full border border-slate-200 group-hover:border-[#CE2029]'>
              <ArrowUpRightIcon className='size-4' />
            </div>
          </a>
        </div>

        {/* Editorial Grid */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
          {trendingPosts.map((post, index) => (
            <div
              key={index}
              className='group flex flex-col overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,31,63,0.15)]'
            >
              {/* Image Header */}
              <div className='relative h-64 w-full overflow-hidden'>
                <img
                  src={post.image}
                  alt={post.title}
                  className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                  onError={(e) => {
                    e.target.src =
                      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/40 to-transparent" />

                <div className='absolute top-6 left-6 flex items-center gap-2 rounded-xl bg-white/95 backdrop-blur-md px-4 py-2 text-[10px] font-black uppercase tracking-widest text-[#001F3F] shadow-sm'>
                  <TagIcon className='size-3 text-[#00E0FF]' />
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className='flex flex-1 flex-col p-8'>
                <div className='flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#CE2029] mb-4'>
                  <ClockIcon className='size-3' />
                  <span>{post.date}</span>
                </div>

                <h3 className='text-2xl font-bold text-[#001F3F] leading-snug group-hover:text-[#CE2029] transition-colors'>
                  {post.title}
                </h3>

                <p className='mt-4 text-[15px] leading-relaxed text-slate-500 font-medium line-clamp-2'>
                  {post.excerpt}
                </p>

                <div className='mt-auto pt-8 border-t border-slate-50'>
                  <a
                    href={APPLY_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='relative inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#001F3F] group/link'
                  >
                    Get Brochure / Apply
                    <ArrowUpRightIcon className='size-4 text-[#00E0FF] transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1' />
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00E0FF] transition-all group-hover/link:w-full" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE APPLY BUTTON */}
        <div className='mt-16 flex justify-center lg:hidden'>
          <a
            href={APPLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className='w-full rounded-2xl bg-[#001F3F] py-5 text-sm font-black text-white shadow-xl shadow-[#001F3F]/20 text-center'
          >
            GET BROCHURE / APPLY
          </a>
        </div>
      </div>
    </section>
  );
}
