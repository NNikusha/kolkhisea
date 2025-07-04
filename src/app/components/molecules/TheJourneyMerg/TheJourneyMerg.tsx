'use client';

import React from 'react';
import TheJourney from '../../atoms/TheJourney/TheJourney';
import { Locale, LocalizedContent } from '@/app/types/type';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

interface TheJourneyMergProps {
  journeyOfCreationBefore?: LocalizedContent;
  journeyOfCreationImageBefore?: string;
  journeyOfCreationAfter?: LocalizedContent;
  journeyOfCreationImageAfter?: string;
  lang?: Locale;
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: -40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

const TheJourneyMerg: React.FC<TheJourneyMergProps> = ({
  journeyOfCreationBefore,
  journeyOfCreationImageBefore,
  journeyOfCreationAfter,
  journeyOfCreationImageAfter,
  lang = 'en',
}) => {
  const t = useTranslations('Language');

  return (
    <motion.div
      className="relative container lg:px-[108px] px-4 mx-auto w-full z-[2] pt-[168px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={headingVariants}>
        <h1 className="flex flex-col gap-4 lg:gap-0 lg:flex-row uppercase justify-between items-center lg:text-4xl text-[24px] text-[#B4B4B4]">
          <span>{t('TheJourney')}</span>
          {/* <span className='pt-[15px] pb-[15px] lg:pt-[0] lg:pb-[0]'>
            <LineSvg />
          </span> */}
          <div className="bg-[#B4D7D8]/50 h-[24px] lg:h-[40px] w-[167px] lg:w-[200px] xl:w-[312px] 2x:w-[424px] z-[-1]" />
          <span className="text-[#1C1C1E]">{t('ThroughTime')}</span>
        </h1>
      </motion.div>

      <motion.div
        className="flex flex-col gap-[24px] lg:flex-row justify-between items-center pt-[56px]"
        variants={containerVariants}
      >
        {journeyOfCreationImageBefore && journeyOfCreationBefore && (
          <motion.div variants={cardVariants} className='mx-auto lg:w-1/2'>
            <TheJourney
              imageBg={journeyOfCreationImageBefore}
              about={t('Before')}
              title={t('What')}
              titleSpan={t('WeStartedWith')}
              text={journeyOfCreationBefore[lang]}
            />
          </motion.div>
        )}

        {journeyOfCreationImageAfter && journeyOfCreationAfter && (
          <motion.div variants={cardVariants} className='mx-auto lg:w-1/2'>
            <TheJourney
              imageBg={journeyOfCreationImageAfter}
              about={t('After')}
              title={t('What')}
              titleSpan={t('WeCreated')}
              text={journeyOfCreationAfter[lang]}
            />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default TheJourneyMerg;