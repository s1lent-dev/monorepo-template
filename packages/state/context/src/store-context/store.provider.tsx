import { store } from '@nexync/store';
import { Provider } from 'react-redux';
import type { FC, ReactNode } from 'react';

interface StoreProviderProps {
    children: ReactNode;
}

const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export { StoreProvider };
