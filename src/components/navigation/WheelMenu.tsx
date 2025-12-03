/**
 * WheelMenu - Menu circolare innovativo per la Home
 * 
 * Design UX:
 * - Centro: Logo/brand focus
 * - Cerchio: 4-6 voci principali disposte radialmente
 * - Golden ratio nelle proporzioni
 * - Mobile: fallback a lista verticale
 * - Accessibilità: keyboard nav + aria
 */
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export interface WheelMenuItem {
  id: string;
  labelKey: string;
  icon: string;
  path: string;
  emphasized?: boolean;
}

interface WheelMenuProps {
  onClose?: () => void;
}

const WheelMenu: React.FC<WheelMenuProps> = ({ onClose }) => {
  const { t } = useTranslation('landing');
  const navigate = useNavigate();
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  // Menu items - 7 voci per golden ratio layout
  // Path corretti per le route definite nel router
  const items: WheelMenuItem[] = [
    { id: 'egi', labelKey: 'wheel.egi', icon: '📜', path: '/info/egi' },
    { id: 'artists', labelKey: 'wheel.artists', icon: '🎨', path: '/archetypes/artist', emphasized: true },
    { id: 'epp', labelKey: 'wheel.epp', icon: '🌱', path: '/info/epp' },
    { id: 'entrepreneurs', labelKey: 'wheel.entrepreneurs', icon: '💼', path: '/archetypes/entrepreneur' },
    { id: 'collectors', labelKey: 'wheel.collectors', icon: '🖼️', path: '/archetypes/collector' },
    { id: 'mattoncini', labelKey: 'wheel.mattoncini', icon: '🧱', path: '/info/florence' },
    { id: 'explore', labelKey: 'wheel.explore', icon: '🔍', path: '/info' },
  ];

  // Responsive check
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Entry animation
  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev => (prev + 1) % items.length);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => (prev - 1 + items.length) % items.length);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        handleSelect(items[focusedIndex]);
        break;
      case 'Escape':
        onClose?.();
        break;
    }
  }, [items, focusedIndex, onClose]);

  const handleSelect = (item: WheelMenuItem) => {
    navigate(item.path);
    onClose?.();
  };

  // Calculate radial position with CSS variables for animations
  const getItemStyle = (index: number, total: number): React.CSSProperties => {
    const angle = (360 / total) * index - 90; // Start from top
    const radius = isMobile ? 100 : 160;
    const radian = (angle * Math.PI) / 180;
    const x = Math.cos(radian) * radius;
    const y = Math.sin(radian) * radius;

    return {
      '--item-x': `${x}px`,
      '--item-y': `${y}px`,
      transform: isAnimating ? 'translate(0, 0) scale(0.3)' : `translate(${x}px, ${y}px) scale(1)`,
      opacity: isAnimating ? 0 : 1,
      transition: `transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 100}ms, opacity 0.4s ease ${index * 100}ms`,
    } as React.CSSProperties;
  };

  // Mobile: lista verticale elegante
  if (isMobile) {
    return (
      <nav 
        className="wheel-mobile"
        role="navigation"
        aria-label={t('wheel.ariaLabel')}
        onKeyDown={handleKeyDown}
      >
        {/* Logo center */}
        <div className="wheel-mobile__header">
          <div className="wheel-mobile__logo">
            <span className="wheel-mobile__logo-text">Florence</span>
            <span className="wheel-mobile__logo-egi">EGI</span>
          </div>
          <p className="wheel-mobile__subtitle">{t('wheel.subtitle')}</p>
        </div>

        {/* Menu items */}
        <ul className="wheel-mobile__list" role="menu">
          {items.map((item, index) => (
            <li key={item.id} role="none">
              <button
                className={`wheel-mobile__item ${item.emphasized ? 'wheel-mobile__item--primary' : ''}`}
                onClick={() => handleSelect(item)}
                role="menuitem"
                tabIndex={focusedIndex === index ? 0 : -1}
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <span className="wheel-mobile__icon">{item.icon}</span>
                <span className="wheel-mobile__label">{t(item.labelKey)}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  // Desktop: circular wheel
  return (
    <nav 
      className="wheel"
      role="navigation"
      aria-label={t('wheel.ariaLabel')}
      onKeyDown={handleKeyDown}
    >
      {/* Center hub */}
      <div className="wheel__center">
        <div className="wheel__logo">
          <span className="wheel__logo-florence">Florence</span>
          <span className="wheel__logo-egi">EGI</span>
        </div>
        <p className="wheel__hint">{t('wheel.subtitle')}</p>
      </div>

      {/* Decorative ring */}
      <div className="wheel__ring" aria-hidden="true" />
      <div className="wheel__ring wheel__ring--outer" aria-hidden="true" />

      {/* Menu items */}
      <ul className="wheel__items" role="menu">
        {items.map((item, index) => (
          <li
            key={item.id}
            className={`wheel__item ${focusedIndex === index ? 'wheel__item--focused' : ''} ${item.emphasized ? 'wheel__item--emphasized' : ''}`}
            style={getItemStyle(index, items.length)}
            role="none"
          >
            <button
              className="wheel__item-btn"
              onClick={() => handleSelect(item)}
              role="menuitem"
              tabIndex={focusedIndex === index ? 0 : -1}
              aria-label={t(item.labelKey)}
            >
              <span className="wheel__item-icon">{item.icon}</span>
              <span className="wheel__item-label">{t(item.labelKey)}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default WheelMenu;
