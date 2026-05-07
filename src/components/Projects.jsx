import React, { useState, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { Maximize2, X } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ciphertype1 from '../assets/ciphertype/ciphertype1.png';
import ciphertype2 from '../assets/ciphertype/ciphertype2.png';
import ciphertype3 from '../assets/ciphertype/ciphertype3.png';
import ciphertypeVideo from '../assets/ciphertype/ciphertype.mp4';

import simbio1 from '../assets/simbio/simbio1.png';
import simbio2 from '../assets/simbio/simbio2.png';
import simbio3 from '../assets/simbio/simbio3.png';
import simbioVideo from '../assets/simbio/simbio.mp4';

import uxia1 from '../assets/uxia/uxia1.png';
import uxia2 from '../assets/uxia/uxia2.png';
import uxia3 from '../assets/uxia/uxia3.png';
import uxiaVideo from '../assets/uxia/uxia.mp4';

import moodify1 from '../assets/moodify/moodify1.jpg';
import moodify2 from '../assets/moodify/moodify2.jpg';
import moodify3 from '../assets/moodify/moodify3.jpg';
import moodify4 from '../assets/moodify/moodify4.jpg';
import moodifyVideo from '../assets/moodify/moodify.mp4';

export default function Projects() {
  const { t } = useTranslation();
  const [selectedMedia, setSelectedMedia] = useState(null);

  const proyectosData = useMemo(() => [
    {
      id: 'cipher',
      name: 'CipherType',
      title: 'CIPHERTYPE',
      description: t('homePage.ciphertype'),
      media: [ciphertype1, ciphertype2, ciphertype3, ciphertypeVideo]
    },
    {
      id: 'simbio',
      name: 'Simbio',
      title: 'SIMBIO',
      description: t('homePage.simbio'),
      media: [simbio1, simbio2, simbio3, simbioVideo]
    },
    {
      id: 'uxia',
      name: 'Uxia',
      title: 'UXIA',
      description: t('homePage.uxia'),
      media: [uxia1, uxia2, uxia3, uxiaVideo]
    },
    {
      id: 'moodify',
      name: 'Moodify',
      title: 'MOODIFY',
      description: t('homePage.moodify'),
      media: [moodify1, moodify2, moodify3, moodify4, moodifyVideo]
    }
  ], [t]);

  const [activeId, setActiveId] = useState(proyectosData[0].id);
  const activeTab = proyectosData.find(p => p.id === activeId) || proyectosData[0];

  const isVideo = (file) => {
    return typeof file === 'string' && (file.toLowerCase().match(/\.(mp4|webm|mov)$/) || file.includes('video'));
  };

  return (
    <div className="proyectos-wrapper">
      <div className="main-card">
        
        <nav className="tabs-header">
          {proyectosData.map((proy) => (
            <button
              key={proy.id}
              className={activeId === proy.id ? 'active' : ''}
              onClick={() => setActiveId(proy.id)}
            >
              {proy.name}
            </button>
          ))}
        </nav>

        <h2 className="project-title">{activeTab.title}</h2>
        
        <div className="grid-layout">
          <div className="carousel-side">
            <div className="hover-hint">
              <Maximize2 size={18} />
              <span>{t('homePage.ampliar')}</span>
            </div>

            <Swiper
              key={activeTab.id}
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              simulateTouch={false} 
              className="project-swiper"
            >
              {activeTab.media.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="media-container" onClick={() => setSelectedMedia(item)}>
                    {isVideo(item) ? (
                      <video 
                        src={item} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                      />
                    ) : (
                      <img src={item} alt="preview" />
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="text-side">
            <p>{activeTab.description}</p>
          </div>
        </div>
      </div>

      {selectedMedia && (
        <div className="modal-overlay" onClick={() => setSelectedMedia(null)}>
          <button className="close-modal" onClick={() => setSelectedMedia(null)}>
            <X size={32} />
          </button>
          
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {isVideo(selectedMedia) ? (
              <video src={selectedMedia} controls autoPlay loop playsInline />
            ) : (
              <img src={selectedMedia} alt="expanded visual" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}