import './globals.css';
import BackgroundMusic from '@/components/BackgroundMusic';

export const metadata = {
  title: 'ZAM MISSION TRUST',
  description: 'Join our blessed community in supporting religious activities and charitable works',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <BackgroundMusic />
      </body>
    </html>
  );
}
