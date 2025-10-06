import React from 'react';
import { PortfolioItem } from '../types';

type Props = {
  items: PortfolioItem[];
  page: number;
  onPrev: () => void;
  onNext: () => void;
  onSetPage: (i: number) => void;
};

const PortfolioSlider: React.FC<Props> = ({ items, page, onPrev, onNext, onSetPage }) => {
  const perPage = 3;
  const totalPages = Math.ceil(items.length / perPage);

  return (
    <div className="relative max-w-3xl mx-auto">
      <button onClick={onPrev} className="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-white/20 grid place-items-center text-white hover:bg-white/100 shadow-lg hover:shadow-xl transition-all">‹</button>
      <button onClick={onNext} className="absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-white/20 grid place-items-center text-white hover:bg-white/100 shadow-lg hover:shadow-xl transition-all">›</button>

      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300" style={{ 
          width: `${totalPages * 100}%`,
          transform: `translateX(-${page * (100 / totalPages)}%)`
        }}>
          {Array.from({ length: totalPages }, (_, p) => (
            <div key={p} className="grid grid-cols-3 gap-6 px-5" style={{ width: `${100 / totalPages}%` }}>
              {items.slice(p * perPage, p * perPage + perPage).map((item, i) => (
                <div key={i} className="group relative aspect-[3/4] rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  {/* Background Image */}
                  {item.image && (
                    <div className="absolute inset-0 transition-all duration-500 group-hover:scale-110">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                    <p className="text-white text-xs opacity-90">{item.desc}</p>
                  </div>
                  
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-1.5 mt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => onSetPage(i)} className={`w-3 h-3 rounded-full transition-all ${i === page ? 'bg-white shadow-lg' : 'bg-white/40 hover:bg-white/60'}`} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSlider; 