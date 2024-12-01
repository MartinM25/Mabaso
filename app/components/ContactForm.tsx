"use client"

import * as z from "zod";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import GradientButton from "./GradientButton";
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod";
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
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
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

const ContactForm = () => {
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
      fullName: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const handleSubmit = async (FormData: z.infer<typeof formSchema>) => {

    try {
      setLoading(true);
      setError(false);
      setAlertMessage("");

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_CONTACT_TEMPLATE_ID!,
        {
          fullName: FormData.fullName,
          email: FormData.email,
          subject: FormData.subject,
          message: FormData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
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
    <div className="w-full font-sans">
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
            name="subject"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Subject"
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

export default ContactForm;