# ShopRoute - E-commerce Shopping Cart

A modern, responsive e-commerce shopping cart application built with React, TypeScript, and Tailwind CSS. The app fetches products from the Fake Store API and provides a seamless shopping experience with cart management functionality.

## 🚀 Features

- **Product Listing**: Browse products fetched from the Fake Store API
- **Search & Filter**: Search products by name/description and filter by category
- **Shopping Cart**: Add, remove, and update product quantities
- **Responsive Design**: Mobile-first design that works on all devices
- **Real-time Updates**: Cart badge shows current item count
- **Price Calculation**: Automatic price calculation with 10% discount
- **State Management**: Context API for efficient state management
- **Routing**: React Router for navigation between pages

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Beautiful UI components
- **Lucide React** - Modern icon library
- **Fake Store API** - Product data source

- ## 📱 Pages

### Products Page (`/`)
- Displays all products in a responsive grid
- Search functionality to find products
- Category filter dropdown
- Add to cart functionality
- Product ratings and reviews
- Responsive product cards

### Cart Page (`/cart`)
- View all added products
- Increase/decrease product quantities
- Remove items from cart
- Real-time total calculation
- 10% discount application
- Empty cart state with call-to-action

## 🎨 Design Features

- **Modern UI**: Clean, professional design with subtle animations
- **Brand Colors**: Consistent color scheme throughout the app
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Loading States**: Smooth loading spinners and skeleton screens
- **Error Handling**: User-friendly error messages
- **Accessibility**: Semantic HTML and keyboard navigation




## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn UI components
│   ├── Header.tsx      # Navigation header
│   ├── ProductCard.tsx # Product display component
│   └── LoadingSpinner.tsx
├── contexts/           # React Context providers
│   └── CartContext.tsx # Shopping cart state management
├── pages/             # Page components
│   ├── Products.tsx   # Product listing page
│   ├── Cart.tsx       # Shopping cart page
│   └── NotFound.tsx   # 404 error page
├── types/             # TypeScript type definitions
│   └── Product.ts     # Product and CartItem interfaces
└── lib/               # Utility functions
    └── utils.ts
```
