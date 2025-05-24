import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useCart } from "../CartContext";

const ShoppingCart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  console.log(cartItems);
  return (
    <Box
      sx={{
        color: "#555",
        border: "none",
        borderRadius: 2,
        p: 3,
      }}
    >
      <Typography
        variant="h4"
        justifyContent={"space-around"}
        sx={{ color: "#555" }}
      >
        Shopping Cart
      </Typography>
      <Box>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <Box
                display="flex"
                flexWrap={"wrap"}
                height={"inherit"}
                justifyContent={"space-around"}
                sx={{
                  border: "none",
                  backgroundColor: "#eaf3d6",
                  color: "#555",
                  borderRadius: 1,
                  mb: 2,
                  p: 2,
                  alignItems: "center",
                }}
                key={item.id}
              >
                <Typography sx={{ flex: 1 }}>
                  {item.name} - ${item.price}
                </Typography>
                <Typography sx={{ mx: 2 }}>
                  Quantity: {item.quantity}
                </Typography>
                <Box>
                  <RemoveIcon
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    sx={{
                      color: "#555",
                      cursor: item.quantity > 1 ? "pointer" : "not-allowed",
                      opacity: item.quantity > 1 ? 1 : 0.5,
                      mx: 0.5,
                    }}
                  />
                  <AddIcon
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    sx={{ color: "#555", cursor: "pointer", mx: 0.5 }}
                  />
                  <ClearIcon
                    onClick={() => removeFromCart(item.id)}
                    sx={{ color: "#555", cursor: "pointer", mx: 0.5 }}
                  />
                </Box>
              </Box>
            ))}
            <Box
              sx={{
                border: "none",
                backgroundColor: "#eaf3d6",
                color: "#555",
                borderRadius: 1,
                p: 2,
                mt: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" sx={{ color: "#555" }}>
                Total: ${calculateTotal().toFixed(2)}
              </Typography>
              <RemoveShoppingCartIcon
                onClick={clearCart}
                sx={{ color: "#555", cursor: "pointer", ml: 2 }}
              />
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default ShoppingCart;
