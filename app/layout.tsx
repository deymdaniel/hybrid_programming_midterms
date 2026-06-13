import Navbar from './components/nav'; // Import the Navbar component
import './globals.css';

export const metadata = {
  title: 'E-commerce Prototype Dashboard',
  description: 'Midterm Laboratory Exam Submission',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ 
      }}>
        <Navbar /> 
        
        <main style={{ marginTop: '20px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}