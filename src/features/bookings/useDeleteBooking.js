// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
// import toast from "react-hot-toast";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

// export function useDeleteCabin() {
//   const queryClient = useQueryClient();
//   const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
//     mutationFn: (id) => deleteCabinApi(id),
//     onSuccess: () => {
//       toast.success("Cabin Successfully deleted");
//       queryClient.invalidateQueries({
//         queryKey: ["cabins"],
//       });
//     },
//     onError: (err) => toast.error(err.message),
//   });
//   return { isDeleting, deleteCabin };
// }

export function useDeleteBooking() {
  const quereyClient = useQueryClient();
  const { isLoading: isDeletingBooking, mutate: deleteBooking } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),
    onSuccess: () => {
      toast.success("Booking Successfully deleted");
      quereyClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeletingBooking, deleteBooking };
}
