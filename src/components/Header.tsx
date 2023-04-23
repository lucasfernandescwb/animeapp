import { useEffect, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter()
    const [show, setShow] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);

    const controlHeader = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setShow(true);
            } else {
                setShow(false);
            }

            setLastScrollY(window.scrollY);
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlHeader);

            return () => {
                window.removeEventListener('scroll', controlHeader);
            }
        }
    }, [lastScrollY]);

    return (
        <header className={`header ${show && 'top-[-80px]'}`}>
            <nav className='h-full flex items-center justify-between wrapper'>
                <Link href={'/'} className='text-3xl hover:text-amber-600 transition-colors'>AnimeApp</Link>

                <ul className='hidden sm:flex sm:items-center sm:gap-4'>
                    <li>
                        <Link href={'/about'} className='navlink'>About</Link>
                    </li>

                    <li>
                        <a
                            href="https://github.com/lucasfernandescwb"
                            className='btn'
                            target='_blank'
                        >Github😉</a>
                    </li>
                </ul>

                <Link className='navlink sm:hidden' href={'/about'}>About</Link>
            </nav>
        </header>
    )
}
