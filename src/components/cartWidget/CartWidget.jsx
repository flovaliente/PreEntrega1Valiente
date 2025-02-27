import * as React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <Badge badgeContent={4} color="primary" sx={{marginRight: '18px'}}>
        <ShoppingCartIcon color="action" />
    </Badge>
  )
};

export default CartWidget;