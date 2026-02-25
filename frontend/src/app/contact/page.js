import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Contact() {
    return (
        <main>
            <Header />
            <div style={{ paddingTop: '80px', backgroundColor: '#000' }}>
                <ContactSection />
            </div>
            <Footer />
        </main>
    );
}
