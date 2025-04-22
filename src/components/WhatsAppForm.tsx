
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "./ui/button";
import { X, Send } from "lucide-react";

const formSchema = z.object({
  purpose: z.enum(["booking", "event"], {
    required_error: "Please select a purpose",
  }),
});

export function WhatsAppForm({ 
  open, 
  onOpenChange 
}: { 
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      purpose: "booking",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const text = values.purpose === "booking" 
      ? "Hello, I'd like to book a room at Kolol Riverside Resort."
      : "Hello, I'd like to book an event at Kolol Riverside Resort.";

    const encodedText = encodeURIComponent(text);
    const phone = "254712840300";

    const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);

    const whatsappUrl = isMobile
      ? `https://wa.me/${phone}?text=${encodedText}`
      : `https://web.whatsapp.com/send?phone=${phone}&text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-white border-[#25D366]/30">
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 disabled:pointer-events-none">
          <X className="h-4 w-4 text-[#25D366]" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <DialogHeader>
          <DialogTitle className="text-[#25D366] font-serif text-2xl text-center">Connect with Kolol</DialogTitle>
          <p className="text-resort-brown text-center mb-4">Choose how you'd like to get in touch</p>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="purpose"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#25D366]">Purpose of Contact</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid grid-cols-2 gap-4"
                    >
                      <FormItem className="flex items-center space-x-2 space-y-0 bg-white border border-[#25D366]/20 rounded-lg p-3 hover:bg-[#25D366]/10 transition-colors">
                        <FormControl>
                          <RadioGroupItem 
                            value="booking" 
                            className="border-[#25D366] text-[#25D366] focus:ring-[#25D366]" 
                          />
                        </FormControl>
                        <FormLabel className="font-normal text-resort-brown cursor-pointer">
                          Book a Room
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2 space-y-0 bg-white border border-[#25D366]/20 rounded-lg p-3 hover:bg-[#25D366]/10 transition-colors">
                        <FormControl>
                          <RadioGroupItem 
                            value="event" 
                            className="border-[#25D366] text-[#25D366] focus:ring-[#25D366]" 
                          />
                        </FormControl>
                        <FormLabel className="font-normal text-resort-brown cursor-pointer">
                          Book an Event
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Continue to WhatsApp
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default WhatsAppForm;
