import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertVolunteer } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateVolunteer() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertVolunteer) => {
      // Validate data against schema before sending
      const validated = api.volunteers.create.input.parse(data);
      
      const res = await fetch(api.volunteers.create.path, {
        method: api.volunteers.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = await res.json();
          throw new Error(error.message || "Validation failed");
        }
        throw new Error("Failed to submit volunteer form");
      }

      return api.volunteers.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "You're in!",
        description: "Thanks for volunteering. We'll be in touch soon.",
      });
    },
    onError: (error) => {
      toast({
        title: "Submission failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
