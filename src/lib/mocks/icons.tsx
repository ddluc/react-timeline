import React from 'react'; 

// Import Event Icons 
import Icon1 from '../../assets/svg/icon-1.svg';
import Icon2 from '../../assets/svg/icon-2.svg';
import Icon3 from '../../assets/svg/icon-3.svg';
import Icon4 from '../../assets/svg/icon-4.svg';
import Icon5 from '../../assets/svg/icon-5.svg';
import Icon6 from '../../assets/svg/icon-6.svg';
import Icon7 from '../../assets/svg/icon-7.svg';
import Icon8 from '../../assets/svg/icon-8.svg';
import Icon9 from '../../assets/svg/icon-9.svg';
import Icon10 from '../../assets/svg/icon-10.svg';

export const getCustomIcon = (): JSX.Element => {
  const icons = [
    <Icon1 />,
    <Icon2 />,
    <Icon3 />,
    <Icon4 />,
    <Icon5 />,
    <Icon6 />, 
    <Icon7 />,
    <Icon8 />,
    <Icon9 />,
    <Icon10 />,
  ]; 
  const index = Math.floor(Math.random() * 10); 
  return icons[index] || null; 
}
