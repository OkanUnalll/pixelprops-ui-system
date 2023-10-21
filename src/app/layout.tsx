import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pixel Props',
  description: 'Pixel Props Official',
};

function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
