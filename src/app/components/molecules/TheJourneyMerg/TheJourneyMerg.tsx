"use client";
import React from 'react';
import TheJourney from '../../atoms/TheJourney/TheJourney';
import LineSvg from '@/app/assets/LineSvg';
import { Locale, LocalizedContent } from '@/app/types/type';

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
  return (
    <div className='relative container lg:px-[108px] mx-auto w-full mb-[50px] md:mb-[200px] z-[2]'>
      <div>
        <h1 className='flex flex-col lg:flex-row uppercase justify-between items-center lg:text-4xl text-[24px] text-[#B4B4B4]'>
          <span>The Journey</span>
          <span className='pt-[15px] pb-[15px] lg:pt-[0] lg:pb-[0]'>
            <LineSvg />
          </span>
          <span className='text-[#1C1C1E]'>of Creation</span>
        </h1>
      </div>
      <div className='flex flex-col gap-[24px] lg:flex-row justify-between items-center pt-[56px]'>
        {journeyOfCreationImageBefore && journeyOfCreationBefore && (
          <TheJourney
            imageBg={journeyOfCreationImageBefore}
            about='Before'
            title='What '
            titleSpan='we started with'
            text={journeyOfCreationBefore[lang]}
          />
        )}
        {journeyOfCreationImageAfter && journeyOfCreationAfter && (
          <TheJourney
            imageBg={journeyOfCreationImageAfter}
            about='After'
            title='What '
            titleSpan='we created'
            text={journeyOfCreationAfter[lang]}
          />
        )}
      </div>
    </div>
  );
};

export default TheJourneyMerg;