import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertVolunteerSchema } from "@shared/schema";
import { useCreateVolunteer } from "@/hooks/use-volunteers";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { z } from "zod";

// Frontend validation schema matching backend
const formSchema = insertVolunteerSchema.extend({
  email: z.string().email("Please enter a valid email address"),
});

type FormValues = z.infer<typeof formSchema>;

export function VolunteerForm() {
  const { mutate, isPending } = useCreateVolunteer();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      interests: "",
    },
  });

  function onSubmit(data: FormValues) {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <div className="w-full max-w-md mx-auto bg-card rounded-2xl p-8 shadow-xl border border-border/50">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold font-display uppercase">Join the Movement</h3>
        <p className="text-muted-foreground mt-2">Help us secure the future of student life.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Jane Doe" {...field} className="bg-background" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="jane@sfu.ca" type="email" {...field} className="bg-background" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="interests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>I'm interested in...</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value || undefined}>
                  <FormControl>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Tabling">Tabling & Outreach</SelectItem>
                    <SelectItem value="Social Media">Social Media</SelectItem>
                    <SelectItem value="Event Planning">Event Planning</SelectItem>
                    <SelectItem value="General Support">General Support</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full font-bold uppercase tracking-wider h-12 text-base shadow-lg shadow-primary/20"
            disabled={isPending}
          >
            {isPending ? "Submitting..." : "Sign Me Up"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
