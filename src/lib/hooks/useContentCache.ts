
import React from 'react'; 

interface ContentCache {
  [key: string]: React.ReactNode;
}

export const useContentCache = () => {
  
  const [ cache, setCache ] = React.useState<ContentCache>({}); 

  const setContentCache = (id: string, content: React.ReactNode): void => { 
    const newCache = { ...cache }; 
    newCache[id] = content; 
    setCache(newCache); 
  }

  const getContentCache = (id: string): React.ReactNode => { 
    return cache[id]; 
  }

  return { 
    setContentCache, 
    getContentCache
  }

}