import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

const MyCart = () => {
  const { cart } = useContext(CartContext);

 const total = cart.reduce((acc, item) => acc + item.price, 0);


  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">My Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className="text-xl font-bold mt-4">
            Total: Rs {total}
          </div>
        </>
      )}
    </div>
  );
};

export default MyCart;