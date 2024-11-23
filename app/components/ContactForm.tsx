"use client"

import * as z from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import GradientButton from "./GradientButton";
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
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
  // const [loading, setLoading] = useState(false);
  // const [submitted, setSubmitted] = useState(false);

  const {
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  })

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
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
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <GradientButton text="Send" type="submit" />

          {/* <GradientButton text="Submit" type="submit" loading={loading} /> */}
        </form>
      </Form>
    </div>
  )
}

export default ContactForm;