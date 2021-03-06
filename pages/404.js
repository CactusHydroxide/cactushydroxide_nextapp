import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    }, [])

    return (
        <div className="not-found">
            <h1>Oooop...</h1>
            <h2>That page cannot be found.</h2>
            <p>Back to a <Link href="/">Home</Link></p>
        </div>
    );
}

export default NotFound;