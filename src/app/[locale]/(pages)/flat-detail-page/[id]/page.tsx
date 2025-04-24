import React from 'react';
import FlatDetailPage from '@/app/components/organisms/FlatDetailPage/FlatDetailPage';
import { Metadata } from 'next';
import { PageProps } from '../../../../../../.next/types/app/[locale]/page';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = params instanceof Promise ? await params : params;
  return {
    title: `Flat Detail - ${resolvedParams.id}`,
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = params instanceof Promise ? await params : params;
  return <FlatDetailPage params={resolvedParams} />;
}
