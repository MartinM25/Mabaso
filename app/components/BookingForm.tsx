"use client"

// 

import * as z from "zod";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import GradientButton from "./GradientButton";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";


const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  type: z.enum(["collab", "talk", "management"], {
    required_error: "You need to select a notification type.",
  }),
  message: z.string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
})

type FormValues = z.infer<typeof formSchema>;

const BookingForm = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const {
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  })

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      type: "talk",
      message: "",
    }
  })

  const handleSubmit = async (FormData: z.infer<typeof formSchema>) => {

    try {
      setLoading(true);
      setError(false);
      setAlertMessage("");

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_BOOKING_TEMPLATE_ID!,
        {
          fullName: FormData.fullName,
          email: FormData.email,
          type: FormData.type,
          message: FormData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
      );

      if (result.status === 200) {
        setAlertMessage("Email sent successfully!");

        form.reset();
      } else {
        throw new Error("Failed to send email");
      }
    } catch (err) {
      console.error(err);
      setError(true);
      setAlertMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = () => {
    if (alertMessage) {
      setAlertMessage("");
    }
  };

  return (
    <div className="w-full font-sans p-6 md:px-56 lg:px-96">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className=" w-full flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Full Name"
                      type="text"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        handleInputChange();
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email Address"
                      type="email"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        handleInputChange();
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Book Ayanda for the following?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="collab" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Content Collab
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="talk" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Public Speaking
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="management" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Media Management
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Leave us a message"
                      className="resize-none"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        handleInputChange();
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />

          {alertMessage && (
            <Alert
              className={error ? "" : "border-green-500 text-green-600"}
              variant={error ? "destructive" : "default"}
            >
              <AlertTitle>{error ? "Error" : "Success"}</AlertTitle>
              <AlertDescription>{alertMessage}</AlertDescription>
            </Alert>
          )}

          <GradientButton
            text="Send"
            type="submit"
            loading={loading}
            disabled={loading || !form.formState.isValid}
          />

        </form>
      </Form>
    </div>
  )
}

export default BookingForm;