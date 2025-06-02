"use client";
import React from 'react';
import TheJourney from '../../atoms/TheJourney/TheJourney';
// import LineSvg from '@/app/assets/LineSvg';
import { Locale, LocalizedContent } from '@/app/types/type';
import { useTranslations } from 'next-intl';

interface TheJourneyMergProps {
  journeyOfCreationBefore?: LocalizedContent;
  journeyOfCreationImageBefore?: string;
  journeyOfCreationAfter?: LocalizedContent;
  journeyOfCreationImageAfter?: string;
  lang?: Locale;
}

const TheJourneyMerg: React.FC<TheJourneyMergProps> = ({
  journeyOfCreationBefore,
  journeyOfCreationImageBefore,
  journeyOfCreationAfter,
  journeyOfCreationImageAfter,
  lang = 'en'
}) => {

  const t = useTranslations('Language');

  return (
    <div className='relative container lg:px-[108px] mx-auto w-full  z-[2]'>
      <div>
        <h1 className='flex flex-col gap-4 lg:gap-0 lg:flex-row uppercase justify-between items-center lg:text-4xl text-[24px] text-[#B4B4B4]'>
          <span>{t('TheJourney')}</span>
          {/* <span className='pt-[15px] pb-[15px] lg:pt-[0] lg:pb-[0]'>
            <LineSvg />
          </span> */}
          <div className="bg-[#B4D7D8]/50 h-[24px] lg:h-[40px] w-[167px] lg:w-[200px] xl:w-[312px] 2x:w-[424px] z-[-1]"></div>
          <span className='text-[#1C1C1E]'>{t('ThroughTime')}</span>
        </h1>
      </div>
      <div className='flex flex-col gap-[24px] lg:flex-row justify-between items-center pt-[56px]'>
        {journeyOfCreationImageBefore && journeyOfCreationBefore && (
          <TheJourney
            imageBg={journeyOfCreationImageBefore}
            about={t('Before')}
            title={t('What')}
            titleSpan={t('WeStartedWith')}
            text={journeyOfCreationBefore[lang]}
          />
        )}
        {journeyOfCreationImageAfter && journeyOfCreationAfter && (
          <TheJourney
            imageBg={journeyOfCreationImageAfter}
            about={t('After')}
            title={t('What')}
            titleSpan={t('WeCreated')}
            text={journeyOfCreationAfter[lang]}
          />
        )}
      </div>
    </div>
  );
};

export default TheJourneyMerg;