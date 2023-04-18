import '@/app/styles/global.css';

export const metadata = {
  title: '29QUBE',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
