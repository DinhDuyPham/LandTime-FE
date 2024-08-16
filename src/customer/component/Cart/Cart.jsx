import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";

const Cart = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1, 1, 1, 1].map((item) => <CartItem key={item} />)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border rounded-lg shadow-lg p-6 bg-white">
            <p className="uppercase font-bold text-gray-700 pb-4">Đơn hàng</p>
            <hr className="border-gray-300 mb-4" />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between py-2 text-black">
                <span>Tạm Tính</span>
                <span>2000000</span>
              </div>
              <div className="flex justify-between py-2 text-black">
                <span>Giá đã giảm</span>
                <span className="text-green-600">1000000</span>
              </div>
              <div className="flex justify-between py-2 text-black">
                <span>Giao hàng</span>
                <span className="text-green-600">Miễn phí</span>
              </div>
              <div className="flex justify-between py-2 text-black font-bold">
                <span>Tổng</span>
                <span className="text-green-600">1000000</span>
              </div>
            </div>
            <Button
              variant="contained"
              className="w-full mt-5"
              sx={{ px: "2rem", py: ".7rem", bgcolor: "#9155fd" }}
            >
              Thanh Toán
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
