// src/data/data.js

export const categories = [
  { name: 'Fiction', icon: '📖', count: 2341 },
  { name: 'Science', icon: '🔬', count: 892 },
  { name: 'Self-Help', icon: '🌱', count: 1567 },
  { name: 'Mystery', icon: '🔍', count: 743 },
  { name: 'Romance', icon: '💕', count: 1892 },
  { name: 'Biography', icon: '👤', count: 521 }
];

export const books = [
  { id: 1, title: 'The Midnight Library', author: 'Matt Haig', price: 14.99, condition: 'New', genre: 'Fiction', rating: 4.8, exchange: true, cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop', description: 'Between life and death there is a library...' },
  { id: 2, title: 'Atomic Habits', author: 'James Clear', price: 16.99, condition: 'Like New', genre: 'Self-Help', rating: 4.9, exchange: false, cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop', description: 'An easy and proven way to build good habits...' },
  { id: 3, title: 'Project Hail Mary', author: 'Andy Weir', price: 18.99, condition: 'New', genre: 'Science', rating: 4.7, exchange: true, cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop', description: 'A lone astronaut must save the earth...' },
  { id: 4, title: 'The Silent Patient', author: 'Alex Michaelides', price: 12.99, condition: 'Good', genre: 'Mystery', rating: 4.5, exchange: true, cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=450&fit=crop', description: 'A shocking psychological thriller.' },
  { id: 5, title: 'Where the Crawdads Sing', author: 'Delia Owens', price: 15.99, condition: 'New', genre: 'Fiction', rating: 4.6, exchange: false, cover: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=300&h=450&fit=crop', description: 'A painfully beautiful debut novel.' },
  { id: 6, title: 'Sapiens', author: 'Yuval Noah Harari', price: 19.99, condition: 'Like New', genre: 'Science', rating: 4.8, exchange: true, cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=450&fit=crop', description: 'A brief history of humankind.' },
  { id: 7, title: 'The Psychology of Money', author: 'Morgan Housel', price: 13.99, condition: 'New', genre: 'Self-Help', rating: 4.7, exchange: true, cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop&sat=-100', description: 'Timeless lessons on wealth.' },
  { id: 8, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 9.99, condition: 'Used', genre: 'Fiction', rating: 4.4, exchange: true, cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop&sat=-100', description: 'A masterpiece of American fiction.' },
  { id: 9, title: 'Educated', author: 'Tara Westover', price: 14.99, condition: 'Like New', genre: 'Biography', rating: 4.6, exchange: false, cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop&sat=-100', description: 'A memoir about a young girl.' },
  { id: 10, title: 'The Alchemist', author: 'Paulo Coelho', price: 11.99, condition: 'New', genre: 'Fiction', rating: 4.5, exchange: true, cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=450&fit=crop&sat=-100', description: 'A magical story about dreams.' }
];

export const genres = ['Fiction', 'Science', 'Self-Help', 'Mystery', 'Romance', 'Biography'];