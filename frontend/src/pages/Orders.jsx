import { useContext, useEffect, useState } from "react";
import { PageHeader } from "../components";
import { NavigationContext } from "../context/NavigationContext";
import { toast } from "react-toastify";
import axios from "axios";
import { apiUrls } from "../apiurls";

const Orders = () => {
  const { currentUser } = useContext(NavigationContext);
  const [userOrders, setUserOrders] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "text-yellow-500";
      case "Delivered":
        return "text-green-500";
      case "Canceled":
        return "text-red-500";
      default:
        return "text-primary-text";
    }
  };

  const fetchUserOrders = async () => {
    try {
      const userId = currentUser?.id;

      const response = await axios.get(
        `${apiUrls.fetchUserOrdersAPI}/${userId}`
      );

      setUserOrders(response.data.data.userOrders);
    } catch (error) {
      console.log("Error: ", error);
      toast.error("Server Error");
    }
  };

  useEffect(() => {
    if (!currentUser?.id) return;

    fetchUserOrders();
  }, []);

  /* Here is the implementation of the Single Order Detail Model */
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModelOpen, setModelOpen] = useState(false);

  const handleOpenModel = (order) => {
    setSelectedOrder(order);
    setModelOpen(true);
  };

  const handleCloseModel = () => {
    setSelectedOrder(null);
    setModelOpen(false);
  };

  return (
    <>
      <PageHeader heading="Orders" targetLink="Orders" />

      <section className="global-padding global-section overflow-x-auto">
        <table className="min-w-full text-sm text-white table-scrollbar bg-primary-text/10 rounded-lg p-4 mt-6">
          <thead>
            <tr className="text-left border-b border-captions text-captions">
              <th className="py-4 px-4">S. No</th>
              <th className="py-4 px-4">Order ID</th>
              <th className="py-5 px-4">No. of Items</th>
              <th className="py-5 px-4">Bill</th>
              <th className="py-4 px-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {userOrders?.length > 0 &&
              userOrders.map((order, index) => (
                <tr
                  key={order._id}
                  onClick={() => handleOpenModel(order)}
                  className="border-b border-captions duration-200 hover:bg-primary-text/40 cursor-pointer"
                >
                  <td className="py-4 px-4">{index + 1}</td>
                  <td className="py-4 px-4 whitespace-nowrap">{order._id}</td>
                  <td className="py-4 px-4">{order?.items.length}</td>
                  <td className="py-4 px-4">{order?.totalBill}</td>
                  <td className={`py-4 px-4 ${getStatusColor(order?.status)}`}>
                    {order?.status}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>

      {/* Single Selected Order Model */}
      {isModelOpen && selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/80">
          <div className="bg-captions/80 text-primary w-full max-w-3xl p-6 rounded-xl shadow-lg relative">
            <button
              className="absolute top-2 right-3 text-2xl cursor-pointer text-gray-600 hover:text-red-500"
              onClick={handleCloseModel}
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4">Order Details</h2>

            <div className="mb-4">
              <p>
                <strong>Order ID:</strong> {selectedOrder._id}
              </p>
              <p>
                <strong>Total Items:</strong> {selectedOrder.items.length}
              </p>
              <p>
                <strong>Total Bill:</strong> ${selectedOrder.totalBill}
              </p>
              <p className={`${getStatusColor(selectedOrder.status)}`}>
                <strong className="text-primary">Status:</strong>{" "}
                {selectedOrder.status}
              </p>
            </div>

            <div className="border-t pt-4 mt-4">
              <h3 className="text-xl font-semibold mb-2">Items</h3>
              <div className="overflow-y-auto max-h-[300px]">
                <table className="w-full text-sm text-left border">
                  <thead className="bg-gray-100 text-gray-700">
                    <tr>
                      <th className="py-2 px-3">Image</th>
                      <th className="py-2 px-3">Item Name</th>
                      <th className="py-2 px-3">Quantity</th>
                      <th className="py-2 px-3">Price</th>
                    </tr>
                  </thead>

                  <tbody>
                    {selectedOrder.items.map((item, idx) => (
                      <tr key={idx} className="border-t">
                        <td className="py-2 px-3">
                          <img
                            src={`http://localhost:2632/${item.image}`}
                            alt={item.name}
                            className="w-16"
                          />
                        </td>
                        <td className="py-2 px-3">{item.name}</td>
                        <td className="py-2 px-3">{item.quantity}</td>
                        <td className="py-2 px-3">
                          ${item.discountPrice.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;
