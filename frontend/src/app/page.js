import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CallToAction from '@/components/CallToAction';
import TransparencySection from '@/components/TransparencySection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CallToAction />
      <TransparencySection />
      <Footer />
    </main>
  );
}
