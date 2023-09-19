'use client';

// https://codevoweb.com/setup-react-context-api-in-nextjs-13-app-directory/
import { memo } from 'react';
import { usePathname } from 'next/navigation';

function NavigationEvents() {
    const pathname = usePathname();
    console.log(pathname);
    return null;
}

export default memo(NavigationEvents);
