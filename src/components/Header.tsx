import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Store } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Badge } from '@/components/ui/badge';

const Header = () => {
  const { itemCount } = useCart();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Store className="h-6 w-6 text-brand-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              ShopRoute
            </span>
          </Link>

          <nav className="flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                location.pathname === '/' ? 'text-brand-primary' : 'text-foreground/60'
              }`}
            >
              Products
            </Link>
            
            <Link
              to="/cart"
              className={`relative flex items-center space-x-1 text-sm font-medium transition-colors hover:text-brand-primary ${
                location.pathname === '/cart' ? 'text-brand-primary' : 'text-foreground/60'
              }`}
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
              {itemCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-brand-accent text-white"
                >
                  {itemCount}
                </Badge>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;