import MainHeader from '@/components/main-header/main-header';
import './globals.css';

export const metadata = {
  title: 'ADVENLOG | Travel ',
  description: 'Amazing trips, shared by a travel-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
