import Joi from "joi"

export const registerSchema=joi.object({
    name:Joi.string()
        .min(3)
        .max(30)
        .trim()
        .required()
        .message({
            "String.empty":"Name is required",
            "String.min":"Name must be at least 3 characters",

        }),

        email:Joi.string()
            .email()
            .lowercase()
            .required()
            .messages({
                "string.email": "Invalid email format"
            }),
        password:Joi.string()
                .min(6)
                .required()
                .message({
                    "string.pattern.base":"Password must contain letters and numbers"
                }),
        mobile:Joi.string()
                .pattern(/^[0-9]{10}$/)
                .optional()
                .message({
                    "string.pattern.base":"mobile must be 10 digits",
                })

});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),

  password: Joi.string().required(),
});