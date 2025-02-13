import { Layout } from '@/components/layout/Layout';
import { Navigation } from '@/components/layout/Navigation';

import '@/global.css';

export const metadata = {
    title: 'Next.js + Three.js',
    description: 'A minimal starter for Nextjs + React-three-fiber and Threejs.',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className='antialiased'>
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body>
                <Navigation/>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
