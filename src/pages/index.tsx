import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Index1 from './index-1'
import FilterTab from '@/component/Element/FilterTab'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Index1/>
    {/* <FilterTab/> */}
     </>
  )
}
