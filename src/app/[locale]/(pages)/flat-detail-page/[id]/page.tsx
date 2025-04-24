import React from 'react'
import FlatDetailPage from '@/app/components/organisms/FlatDetailPage/FlatDetailPage'
import { Metadata } from 'next'

type ImportedPageProps = import("/Users/nikushatavartkiladze/Desktop/kolkhisea/.next/types/app/[locale]/(pages)/flat-detail-page/[id]/page").PageProps;

export async function generateMetadata({ params }: ImportedPageProps): Promise<Metadata> {
  const resolvedParams = params instanceof Promise ? await params : params;
  return {
    title: `Flat Detail - ${resolvedParams.id}`,
  }
}

export default async function Page({ params }: ImportedPageProps) {

  const resolvedParams = params instanceof Promise ? await params : params;
  return <FlatDetailPage params={resolvedParams} />
}