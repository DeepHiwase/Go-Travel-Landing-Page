import { useMutation } from "@tanstack/react-query";
import type { Lead } from "../utils/contentTypes";
import { insertLead } from "../api/api";

interface UseInsertLeadProps {
  onSuccess: () => void;
  onError: (error: Error) => void;
}

export default function useInsertLead(props: UseInsertLeadProps) {
  const mutation = useMutation({
    mutationFn: async (lead: Lead) => insertLead(lead), // not calling insertLead directly like in queryFn
    onSuccess: props.onSuccess, // changing default onSuccess & onError
    onError: props.onError,
  });

  return mutation;
}
