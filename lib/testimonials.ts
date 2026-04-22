export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    text: 'The best bakery in town! Their sourdough has completely ruined me for any other bread. Absolute perfection.',
    rating: 5
  },
  {
    id: 2,
    name: 'James Rodriguez',
    text: 'We order cakes from Brothers Bakery for every family celebration. They never disappoint! The chocolate layer cake is incredible.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Chen',
    text: 'The almond danishes are to die for. I stop by every Saturday morning and the staff always remembers my name. Such a warm atmosphere!',
    rating: 5
  },
  {
    id: 4,
    name: 'Michael Thompson',
    text: 'Finally found a bakery that makes authentic French baguettes. The crust is perfect and the interior is so soft. Will be a customer for life!',
    rating: 5
  },
  {
    id: 5,
    name: 'Amanda Lee',
    text: 'Their cinnamon rolls are the ultimate comfort food. Warm, gooey, and absolutely delicious. Perfect with a cup of coffee.',
    rating: 5
  }
];
