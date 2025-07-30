import { Star, Plus, Minus } from 'lucide-react';
import { Product } from '@/types/Product';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, removeFromCart, updateQuantity, isInCart, getCartItem } = useCart();
  const cartItem = getCartItem(product.id);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(product.id, newQuantity);
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge 
            variant="secondary" 
            className="absolute top-2 right-2 bg-background/90 text-foreground"
          >
            {product.category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 flex-1">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          {truncateText(product.title, 60)}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
          {truncateText(product.description, 120)}
        </p>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-brand-primary">
            ${product.price.toFixed(2)}
          </span>
          
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-warning text-warning" />
            <span className="text-sm font-medium">{product.rating.rate}</span>
            <span className="text-xs text-muted-foreground">({product.rating.count})</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        {!isInCart(product.id) ? (
          <Button 
            onClick={handleAddToCart}
            className="w-full bg-brand-primary hover:bg-brand-primary-light text-white"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        ) : (
          <div className="w-full space-y-2">
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleQuantityChange((cartItem?.quantity || 1) - 1)}
                className="h-8 w-8 p-0"
              >
                <Minus className="h-4 w-4" />
              </Button>
              
              <span className="font-medium px-3">
                Quantity: {cartItem?.quantity || 0}
              </span>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleQuantityChange((cartItem?.quantity || 0) + 1)}
                className="h-8 w-8 p-0"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            
            <Button 
              variant="destructive"
              onClick={handleRemoveFromCart}
              className="w-full"
              size="sm"
            >
              Remove from Cart
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;