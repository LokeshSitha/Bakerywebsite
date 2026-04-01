export interface Product {
  id: number;
  name: string;
  category: 'bread' | 'pastries' | 'cakes';
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Artisan Sourdough',
    category: 'bread',
    price: 8.50,
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&h=400&fit=crop',
    description: 'Traditional sourdough with a crispy crust and soft interior'
  },
  {
    id: 2,
    name: 'Rustic Baguette',
    category: 'bread',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=400&fit=crop',
    description: 'Classic French baguette with golden crust'
  },
  {
    id: 3,
    name: 'Whole Wheat Loaf',
    category: 'bread',
    price: 6.00,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop',
    description: 'Hearty whole grain bread perfect for sandwiches'
  },
  {
    id: 4,
    name: 'Butter Croissant',
    category: 'pastries',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop',
    description: 'Flaky, buttery layers of pure indulgence'
  },
  {
    id: 5,
    name: 'Almond Danish',
    category: 'pastries',
    price: 5.50,
    image: 'https://images.unsplash.com/photo-1509365390695-33aee754301f?w=400&h=400&fit=crop',
    description: 'Sweet pastry filled with almond cream'
  },
  {
    id: 6,
    name: 'Cinnamon Roll',
    category: 'pastries',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400&h=400&fit=crop',
    description: 'Warm cinnamon swirls with cream cheese frosting'
  },
  {
    id: 7,
    name: 'Chocolate Layer Cake',
    category: 'cakes',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop',
    description: 'Rich three-layer chocolate cake with ganache'
  },
  {
    id: 8,
    name: 'Carrot Cake',
    category: 'cakes',
    price: 42.00,
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=400&fit=crop',
    description: 'Moist spiced cake with walnuts and cream cheese frosting'
  },
  {
    id: 9,
    name: 'Lemon Drizzle Cake',
    category: 'cakes',
    price: 38.00,
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop',
    description: 'Light sponge cake with tangy lemon glaze'
  },
  {
    id: 10,
    name: 'French Brioche',
    category: 'bread',
    price: 5.50,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=400&fit=crop',
    description: 'Soft, buttery bread with a rich, tender crumb'
  },
  {
    id: 11,
    name: 'Rye Bread',
    category: 'bread',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop',
    description: 'Dense, flavorful bread with earthy rye flavor'
  },
  {
    id: 12,
    name: 'Olive Focaccia',
    category: 'bread',
    price: 8.00,
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&h=400&fit=crop',
    description: 'Italian flatbread studded with olives and rosemary'
  },
  {
    id: 13,
    name: 'Banana Bread',
    category: 'bread',
    price: 6.50,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop',
    description: 'Moist, sweet bread perfect for breakfast'
  },
  {
    id: 14,
    name: 'Red Velvet Cake',
    category: 'cakes',
    price: 48.00,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop',
    description: 'Classic red velvet with cream cheese frosting'
  },
  {
    id: 15,
    name: 'Black Forest Cake',
    category: 'cakes',
    price: 52.00,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop',
    description: 'Chocolate cake with cherries and whipped cream'
  },
  {
    id: 16,
    name: 'Cheesecake',
    category: 'cakes',
    price: 40.00,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=400&fit=crop',
    description: 'Creamy New York style cheesecake'
  },
  {
    id: 17,
    name: 'Vanilla Cupcake',
    category: 'cakes',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop',
    description: 'Fluffy vanilla cupcake with buttercream frosting'
  }
];
