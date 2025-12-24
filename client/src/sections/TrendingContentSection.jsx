import SectionTitle from '../components/section-title';
import { ClockIcon, ArrowUpRightIcon, TagIcon, SparklesIcon } from 'lucide-react';

export default function TrendingContentSection() {
    // This array can be replaced with a useEffect fetch call to your CMS/API
    const trendingPosts = [
        {
            title: 'Top MBBS Colleges in Georgia: 2025 Rankings',
            excerpt: 'Exploring the best medical universities in Georgia with English-taught programs and global recognition.',
            category: 'MBBS Abroad',
            date: 'Updated 2 days ago',
            image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=400',
            link: '#'
        },
        {
            title: 'Scholarships for France: How to Apply',
            excerpt: 'A complete guide to Eiffel Excellence and other scholarships for international students in 2025.',
            category: 'Scholarships',
            date: 'Updated 5 days ago',
            image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=400',
            link: '#'
        },
        {
            title: 'Local vs Abroad: The Reality of Medical Education',
            excerpt: 'Comparing the ROI, clinical exposure, and licensing requirements for India vs. foreign universities.',
            category: 'Expert Guide',
            date: 'Trending Now',
            image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400',
            link: '#'
        }
    ];

    return (
        <section className='flex flex-col items-center justify-center py-24 bg-white px-4'>
            <SectionTitle
                title='Trending Resources'
                description='Stay ahead with the latest news on international admissions, scholarship deadlines, and local college updates.'
            />

            <div className='mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl'>
                {trendingPosts.map((post, index) => (
                    <article
                        key={index}
                        className='group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:shadow-2xl hover:border-gray-200'
                    >
                        {/* Image Wrapper */}
                        <div className='relative h-52 w-full overflow-hidden'>
                            <img
                                src={post.image}
                                alt={post.title}
                                className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
                            />
                            <div className='absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-900 backdrop-blur-md shadow-sm'>
                                <SparklesIcon className='size-3 text-blue-600' />
                                {post.category}
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className='flex flex-1 flex-col p-6'>
                            <div className='flex items-center gap-2 text-xs font-medium text-gray-400 mb-3'>
                                <ClockIcon className='size-3' />
                                <span>{post.date}</span>
                            </div>

                            <h3 className='text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2'>
                                {post.title}
                            </h3>

                            <p className='mt-3 text-sm leading-relaxed text-gray-500 line-clamp-3'>
                                {post.excerpt}
                            </p>

                            <div className='mt-auto pt-6'>
                                <a
                                    href={post.link}
                                    className='inline-flex items-center gap-2 text-sm font-bold text-gray-900 transition-all hover:gap-3 hover:text-blue-600'
                                >
                                    Read Insights
                                    <ArrowUpRightIcon className='size-4' />
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Newsletter / CTA Section */}
            <div className='mt-16 w-full max-w-4xl rounded-3xl bg-gray-50 p-8 md:p-12 text-center border border-gray-100'>
                <h4 className='text-2xl font-bold text-gray-900'>Want the latest updates in your inbox?</h4>
                <p className='mt-2 text-gray-600'>Get notified about direct admission openings and new scholarship opportunities.</p>
                <form className='mt-6 flex flex-col sm:flex-row gap-3 justify-center'>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className='px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-80'
                    />
                    <button className='bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-all active:scale-95'>
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
}
