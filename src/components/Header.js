import { Cart } from './icons';

const Header = () => (
  <div className="w-full bg-primary text-white shadow-lg">
    <div className="container mx-auto flex items-center py-2">
      <Cart className="inline-block mr-2 w-6 h-6" />
      <h1 className="text-2xl font-display uppercase inline">Shopping list</h1>
    </div>
  </div>
);

export default Header;
