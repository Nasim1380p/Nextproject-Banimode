'use clinet'
import * as React from 'react';
import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';
import useCart from '../store/store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function MyBadge() {
  const cart = useCart((state) => state.cart)
  return (
    <Badge  badgeContent={cart.length} color="success">
      <ShoppingCartIcon className='md:text-2xl text-xl' color="" />
    </Badge>
  );
}