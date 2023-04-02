import Image from 'next/image';
import Hero from '../components/Hero';
import RootLayout from './layout';
import Nav from '../components/Nav';
import Card from '../components/Card';
import Backgrounds from '../components/Backgrounds';



export default function Home() {
  return (
    <div>
      <RootLayout />
      <Nav />
      <Hero heading= 'web3* education* brand*'
            message= 'PASSIVE INCOME'
      />
      <Card />
      <Backgrounds />
    </div>
    
  )
  
}
