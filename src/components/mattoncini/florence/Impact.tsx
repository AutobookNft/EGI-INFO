/**
 * Mattoncino: Impatto Ambientale
 * 
 * 20% di ogni transazione va a EPP
 * 
 * Chiave JSON: florence.impact
 * Rotta test: /info/florence/impact
 */

import React from 'react';
import { useTranslation } from 'react-i18next';

const GREEN = '#4ade80';
const BLUE = '#60a5fa';
const YELLOW = '#fbbf24';
const RED = '#f87171';

interface Project {
  icon: string;
  title: string;
  description: string;
  partner: string;
}

interface Highlight {
  icon: string;
  text: string;
}

const Impact: React.FC = () => {
  const { t } = useTranslation('florence');
  const projects = t('impact.projects', { returnObjects: true }) as Project[];
  const greenwashing = t('impact.greenwashing', { returnObjects: true }) as string[];
  const ourApproach = t('impact.ourApproach', { returnObjects: true }) as string[];
  const highlights = t('impact.highlights', { returnObjects: true }) as Highlight[];

  const projectColors = [GREEN, BLUE, YELLOW];

  return (
    <section 
      style={{
        minHeight: '100vh',
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #0a0a0a 0%, rgba(34, 197, 94, 0.08) 50%, #0a0a0a 100%)'
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{
            display: 'inline-block',
            padding: '10px 20px',
            background: 'rgba(74, 222, 128, 0.15)',
            border: '1px solid rgba(74, 222, 128, 0.35)',
            borderRadius: '50px',
            color: GREEN,
            fontSize: '14px',
            fontWeight: 600,
            marginBottom: '24px'
          }}>
            {t('impact.badge')}
          </span>
          
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '16px',
            lineHeight: 1.2
          }}>
            {t('impact.title')}
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.6)'
          }}>
            {t('impact.subtitle')}
          </p>
        </div>

        {/* Il numero grande */}
        <div style={{
          background: 'rgba(74, 222, 128, 0.08)',
          border: '2px solid rgba(74, 222, 128, 0.35)',
          borderRadius: '30px',
          padding: '60px 40px',
          textAlign: 'center',
          marginBottom: '50px'
        }}>
          <div style={{
            fontSize: 'clamp(5rem, 15vw, 9rem)',
            fontWeight: 800,
            color: GREEN,
            marginBottom: '16px',
            lineHeight: 1
          }}>
            20%
          </div>
          <p style={{
            fontSize: '1.5rem',
            color: '#ffffff',
            fontWeight: 500,
            marginBottom: '12px'
          }}>
            {t('impact.ui.examplePrefix')} → <strong style={{ color: GREEN }}>{t('impact.ui.exampleAmount')}</strong> {t('impact.ui.exampleSuffix')}
          </p>
          <p style={{
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.6)'
          }}>
            {t('impact.ui.trackingNote')}
          </p>
        </div>

        {/* Progetti EPP */}
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 700, 
          color: '#fff', 
          textAlign: 'center',
          marginBottom: '30px' 
        }}>
          {t('impact.ui.projectsTitle')}
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '50px'
        }}>
          {projects.map((project, i) => (
            <div key={i} style={{
              background: 'rgba(30, 30, 40, 0.6)',
              border: `1px solid ${projectColors[i]}40`,
              borderRadius: '16px',
              padding: '30px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '16px' }}>{project.icon}</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: projectColors[i], marginBottom: '12px' }}>
                {project.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6, marginBottom: '12px' }}>
                {project.description}
              </p>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)' }}>
                {project.partner}
              </p>
            </div>
          ))}
        </div>

        {/* Greenwashing vs FlorenceEGI */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(248, 113, 113, 0.08) 0%, rgba(74, 222, 128, 0.08) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          padding: '50px',
          marginBottom: '50px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            <div>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 700, 
                color: RED, 
                marginBottom: '20px'
              }}>
                {t('impact.ui.greenwashingTitle')}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {greenwashing.map((item, i) => (
                  <li key={i} style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: '10px',
                    marginBottom: '12px',
                    color: 'rgba(255, 255, 255, 0.6)'
                  }}>
                    <span style={{ color: RED }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 700, 
                color: GREEN, 
                marginBottom: '20px'
              }}>
                {t('impact.ui.ourApproachTitle')}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {ourApproach.map((item, i) => (
                  <li key={i} style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: '10px',
                    marginBottom: '12px',
                    color: 'rgba(255, 255, 255, 0.85)'
                  }}>
                    <span style={{ color: GREEN }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '50px' }}>
          {highlights.map((item, i) => (
            <div key={i} style={{ background: 'rgba(212, 175, 55, 0.08)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{item.icon}</div>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5 }}>{item.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="/info/epp"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '18px 40px',
              background: `linear-gradient(90deg, ${GREEN}, #22c55e)`,
              color: '#0a0a0a',
              fontWeight: 700,
              fontSize: '1.125rem',
              borderRadius: '50px',
              textDecoration: 'none',
              boxShadow: '0 10px 40px rgba(74, 222, 128, 0.3)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
          >
            {t('impact.ctaLabel')}
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Impact;
