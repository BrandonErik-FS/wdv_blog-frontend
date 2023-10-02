import Link from 'next/link';
import Image from 'next/image';

import styles from './Header.module.css'

const Header = () => {
    return (
        <>
            <header className={styles.container}>
                <Link href='/'>
                    <Image
                        src='/ebdigital.svg'
                        width={72}
                        height={72}
                        alt='Logo'
                    />
                </Link>
            </header>
        </>
    );
};

export default Header
