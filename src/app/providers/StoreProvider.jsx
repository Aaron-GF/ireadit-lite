'use client'
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/lib/store';

// create store only one time during the life of the component
export default function StoreProvider({ children }) {
    const storeRef = useRef(null);
    if (!storeRef.current) {
        storeRef.current = store();
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}