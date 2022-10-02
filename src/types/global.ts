import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout = {
    getLayout?: (page: ReactElement) => ReactNode;
    protected?: boolean;
};