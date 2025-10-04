const {z, email} = require('zod');

const signupSchema = z.object({
    username: z
    .string({require_error:"Name is required"})
    .trim()
    .min(3, {message:"Name must be at least of 3 character"}),

    email: z
    .string({require_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"}),
    
    phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least of 10 characters" })
    .max(20, { message: "Phone must not be more than 20 characters" }),
    
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be at least of 6 characters" })
    .max(1024, "Password can't be greater than 1024 characters"),
});

module.exports = signupSchema; 