"use client"

import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import GradientButton from "./GradientButton";


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
  // const [loading, setLoading] = useState(false);
  // const [submitted, setSubmitted] = useState(false);

  const router = useRouter();

  const {
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  })

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   fullName: "",
    //   email: "",
    //   subject: "",
    //   message: "",
    // }
  })

  const handleSubmit = async (FormData: z.infer<typeof formSchema>) => {
    console.log(FormData);

    // try {
    //   setLoading(true);
    //   const res = await fetch("/api/sendEmail", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(FormData),
    //   });

    //   if (!res.ok) {
    //     throw new Error("Something went wrong");
    //   }
    //   setSubmitted(true);
    //   router.push('/confirmation')
    // } catch (err) {
    //   console.error(err);
    // }
    // finally {
    //   setLoading(false);   
    // }
  }

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
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <GradientButton text="Submit" type="submit" />

          {/* <GradientButton text="Submit" type="submit" loading={loading} /> */}
        </form>
      </Form>
    </div>
  )
}

export default BookingForm;