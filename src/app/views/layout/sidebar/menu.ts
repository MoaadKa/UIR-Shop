import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true
  },
  {
    label: 'Dashboard',
    icon: 'home',
    link: '/dashboard'
  },
 
 
  

  {
    label: 'Components',
    isTitle: true
  },
  {
    label: 'Products',
    icon: 'box',
    link: 'products'
    
  },
  {
    label: 'Category',
    icon: 'grid',
    link: 'category'
    
  },
  {
    label: 'Orders',
    icon: 'shopping-cart',
   
  },
  {
    label: 'Variety',
    icon: 'sliders',
    link: 'variety'
    
  },
  {
    label: 'Transactions',
    icon: 'credit-card',
  },
  {
    label: 'Icons',
    icon: 'smile',
    subItems: [
      {
        label: 'Feather icons',
        link: '/icons/feather-icons',
      },
      {
        label: 'Mdi icons',
        link: '/icons/mdi-icons',
      }
    ]
  },
  
];
