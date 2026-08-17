import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { BLOG_POSTS } from '../data/siteData';
import { BlogPost } from '../types';

interface Props {
  onSelectBlog: (post: BlogPost) => void;
}

export const BlogSection: React.FC<Props> = ({ onSelectBlog }) => {
  return (
    <section id="blog" className="py-20 sm:py-28 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Matching Video: Tag + Heading on left, CTA button on right) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF7FC] border border-[#BCE4F7] shadow-xs mb-3">
              <span className="w-2 h-2 rounded-full bg-[#29ABE2]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#29ABE2]">Blog &amp; Consejos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E293B] font-['Outfit'] tracking-tight max-w-2xl">
              Guías prácticas para el cuidado de sus tuberías y tanques
            </h2>
          </div>

          <button
            onClick={() => onSelectBlog(BLOG_POSTS[0])}
            className="group inline-flex items-center justify-between gap-4 pl-6 pr-2 py-2 rounded-full bg-[#29ABE2] hover:bg-[#1B8DBE] text-white text-xs sm:text-sm font-bold shadow-xs transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] w-fit flex-shrink-0"
          >
            <span>Ver todos los artículos</span>
            <div className="w-8 h-8 rounded-full bg-white text-[#29ABE2] flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </button>
        </div>

        {/* 4 Blog Cards Grid (2x2 matching video) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {BLOG_POSTS.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-5 shadow-xs hover:shadow-md hover:border-[#29ABE2]/40 hover:bg-white transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div 
                  className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-4 bg-neutral-100 cursor-pointer"
                  onClick={() => onSelectBlog(post)}
                >
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[11px] font-semibold">
                    {post.category}
                  </div>
                </div>

                {/* Date & Read Time */}
                <div className="text-[11px] text-[#64748B] font-medium mb-2 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#29ABE2]" />
                    <span>{post.date}</span>
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 
                  onClick={() => onSelectBlog(post)}
                  className="font-bold text-base sm:text-lg text-[#1E293B] font-['Outfit'] line-clamp-2 cursor-pointer hover:text-[#29ABE2] transition-colors leading-snug mb-2"
                >
                  {post.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] line-clamp-2 mb-5 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Read full blog pill button matching video */}
              <button
                onClick={() => onSelectBlog(post)}
                className="group/btn w-full py-2 pl-5 pr-2 rounded-full border border-[#E2E8F0] bg-white hover:border-[#29ABE2] text-xs sm:text-sm font-semibold text-[#1E293B] flex items-center justify-between transition-all"
              >
                <span>Leer artículo completo</span>
                <div className="w-7 h-7 rounded-full bg-[#F1F5F9] group-hover/btn:bg-[#29ABE2] group-hover/btn:text-white text-[#29ABE2] flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
