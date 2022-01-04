import React from 'react';
export declare const useContentCache: () => {
    setContentCache: (id: string, content: React.ReactNode) => void;
    getContentCache: (id: string) => React.ReactNode;
};
