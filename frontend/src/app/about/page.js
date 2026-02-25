import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function About() {
    return (
        <main>
            <Header />
            {/* Spacer for fixed header if needed, or rely on section padding */}
            <div style={{ paddingTop: '80px', backgroundColor: '#000' }}>
                <AboutSection />
            </div>
            <Footer />
        </main>
    );
}
