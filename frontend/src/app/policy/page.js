import Header from '@/components/Header';
import PolicySection from '@/components/PolicySection';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Privacy & Policy | ZAM MISSION TRUST',
    description: 'Privacy Policy, Refund Policy, and Terms & Conditions of ZAM Mission Charitable Trust.',
};

export default function Policy() {
    return (
        <main>
            <Header />
            <PolicySection />
            <Footer />
        </main>
    );
}
