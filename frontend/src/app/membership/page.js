import Header from '@/components/Header';
import MembershipPlans from '@/components/MembershipPlans';
import Footer from '@/components/Footer';

export default function Membership() {
    return (
        <main>
            <Header />
            <div style={{ paddingTop: '80px', backgroundColor: '#000' }}>
                <MembershipPlans />
            </div>
            <Footer />
        </main>
    );
}
