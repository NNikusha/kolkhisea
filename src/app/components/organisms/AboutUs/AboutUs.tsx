import { fetchAboutUs } from '@/app/hooks/axios';
import { getLocale } from 'next-intl/server';
import { Locale } from '@/app/types/type';
import ClientAboutUs from '../../organisms/ClientAboutUs/ClientAboutUs';

const AboutUs = async () => {
  const locale = await getLocale() as Locale;
  const data = await fetchAboutUs();

  return <ClientAboutUs data={data} locale={locale} />;
};

export default AboutUs;