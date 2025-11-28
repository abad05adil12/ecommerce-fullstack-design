import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg mb-2">
      <div>
        <h3 className="font-semibold">{item.name}</h3>
        <p>Qty: {item.qty}</p>
      </div>

      <button
  onClick={() => removeFromCart(item.id, item.color, item.size)}
  className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
>
  Remove
</button>


    </div>
  );
};

export default CartItem;
