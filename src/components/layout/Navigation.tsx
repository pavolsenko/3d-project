import Link from 'next/link';

import './styles.css';

export function Navigation() {
    return (
        <div className='mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5'>
            <nav className='flex w-full items-start justify-center p-12 text-center md:w-2/5 md:text-left'>
                <Link href="/">Homepage</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </div>
    );
}
