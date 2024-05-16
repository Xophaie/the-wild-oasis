import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSettings as updateSettingsApi } from "../../services/apiSettings";

export function useUpdateSettings() {
	const queryClient = useQueryClient();

	const { mutate: updateSettings, isLoading: isEditing } = useMutation({
		mutationFn: updateSettingsApi,
		onSuccess: () => {
			toast.success("Settings successfully edited");
			queryClient.invalidateQueries({
				queryKey: ["settings"],
			});
		},
		onError: () => {
			toast.error("Settings could not be updated");
		},
	});

	return { isEditing, updateSettings };
}
