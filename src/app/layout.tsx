import './globals.css';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import {Lora, Poppins} from 'next/font/google'

const lora = Lora({subsets:["latin"], weight: ['400', '700']});
const poppins = Poppins({subsets:["latin"], weight: ['400', '700']});

export default function RootLayout({children}:{children: React.ReactNode;}) {
    return (
        <html lang='en'>
            <body className={`${lora.className}${poppins.className}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
