import { Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { items, total, itemCount, updateQuantity, removeFromCart, clearCart } = useCart();

  const subtotal = total;
  const discount = subtotal * 0.1; // 10% discount
  const finalTotal = subtotal - discount;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground mb-6" />
          <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link to="/">
            <Button className="bg-brand-primary hover:bg-brand-primary-light text-white">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <Button 
          variant="outline" 
          onClick={clearCart}
          className="text-destructive hover:text-destructive"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Clear Cart
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-24 w-24 object-cover rounded-md"
                    />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-brand-primary">
                        ${item.price.toFixed(2)}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Category: {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end space-y-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      
                      <span className="font-medium w-8 text-center">
                        {item.quantity}
                      </span>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Total</p>
                      <p className="text-lg font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Items ({itemCount}):</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between text-success">
                <span>Discount (10%):</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
              
              <Separator />
              
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span className="text-brand-primary">${finalTotal.toFixed(2)}</span>
              </div>
              
              <Button className="w-full bg-brand-primary hover:bg-brand-primary-light text-white text-lg py-6">
                Proceed to Checkout
              </Button>
              
              <Link to="/">
                <Button variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;