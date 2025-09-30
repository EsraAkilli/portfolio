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
  const perPage = 4;

  return (
    <div className="relative max-w-3xl mx-auto">
      <button onClick={onPrev} className="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-100 border border-slate-200 grid place-items-center text-slate-500 hover:bg-slate-200">‹</button>
      <button onClick={onNext} className="absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-100 border border-slate-200 grid place-items-center text-slate-500 hover:bg-slate-200">›</button>

      <div className="overflow-hidden">
        <div className="flex w-[200%] transition-transform duration-300" style={{ transform: `translateX(-${page * 50}%)` }}>
          {[0, 1].map(p => (
            <div key={p} className="grid grid-cols-4 gap-4 px-5 w-1/2">
              {items.slice(p * perPage, p * perPage + perPage).map((item, i) => (
                <div key={i} className="aspect-[4/3] border-2 border-dashed border-slate-300 rounded-xl grid place-items-center text-center text-slate-500 hover:-translate-y-1 transition-all" style={{ backgroundColor: `${item.color}15` }}>
                  <div className="w-10 h-10 rounded-full grid place-items-center mb-2" style={{ backgroundColor: `${item.color}30` }}>
                    <span>{item.icon}</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-800">{item.title}</div>
                  <div className="text-xs text-slate-500">{item.desc}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-1.5 mt-4">
        {[0, 1].map(i => (
          <button key={i} onClick={() => onSetPage(i)} className={`w-2 h-2 rounded-full ${i === page ? 'bg-blue-600' : 'bg-slate-300'}`} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSlider; 