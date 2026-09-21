import React, { useState } from 'react';
import { Shield, Menu, X, Compass, CheckSquare } from 'lucide-react';

interface NavbarProps {
  completedCount: number;
  totalCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ completedCount, totalCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: '首頁', href: '#hero' },
    { name: '本章核心', href: '#chapter-core' },
    { name: '三層穿衣', href: '#three-layers' },
    { name: '背包配置', href: '#backpack-packing' },
    { name: '六大系統', href: '#six-systems' },
    { name: '裝備資料庫', href: '#equipment-database' },
    { name: '十個單元', href: '#teaching-units' },
    { name: '失效管理', href: '#failure-check' },
    { name: '行前檢核', href: '#preflight-checklist' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0b0e11]/90 backdrop-blur-md border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Association Info */}
          <a
            href="https://amazon-hike.com/"
            className="flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-amber-500 rounded p-1"
            aria-label="亞馬遜國家山岳協會"
          >
            <div className="w-9 h-9 rounded-sm bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-amber-500 shadow-inner">
              <Shield className="w-5 h-5" />
            </div>
            <div className="text-sm font-semibold tracking-wide text-zinc-100">
              亞馬遜國家山岳協會
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-medium text-zinc-400" aria-label="章節主要導覽">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 py-1.5 rounded text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-colors whitespace-nowrap min-h-[44px] flex items-center"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Checklist Pill & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#preflight-checklist"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/40 bg-amber-950/20 text-amber-400 hover:bg-amber-950/40 text-xs font-mono transition-all min-h-[44px]"
              aria-label={`檢核清單已確認 ${completedCount} 項，共 ${totalCount} 項`}
            >
              <CheckSquare className="w-3.5 h-3.5 text-amber-400" />
              <span>
                CHECK: <strong className="text-zinc-100">{completedCount}</strong>/{totalCount}
              </span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label={mobileMenuOpen ? '關閉選單' : '開啟章節選單'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-800 bg-[#0d1216] px-4 pt-3 pb-6 space-y-1 shadow-2xl">
          <div className="text-[11px] font-mono uppercase text-zinc-400 px-3 py-1 mb-2">
            章節導覽清單
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="block px-3 py-2.5 rounded-md text-sm font-medium text-zinc-300 hover:text-amber-400 hover:bg-zinc-800/80 min-h-[44px] flex items-center"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 mt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400 px-3">
            <span>登山安全教育知識平台</span>
            <span className="font-mono text-amber-500">REV. 2026</span>
          </div>
        </div>
      )}
    </header>
  );
};
