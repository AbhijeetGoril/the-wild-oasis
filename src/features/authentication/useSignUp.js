import { useMutation } from "@tanstack/react-query";
import { signup as signupapi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupapi,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address"
      );
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return { signup, isLoading };
}
