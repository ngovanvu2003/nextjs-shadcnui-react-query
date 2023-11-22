import Joi from "joi";
export const formAddSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Không được bỏ trống",
    "any.required": "Tên là trường bắt buộc",
  }),
  price: Joi.number().integer().positive().required().messages({
    "number.base": "Giá bán phải là một số",
    "number.integer": "Giá bán phải là một số nguyên",
    "number.positive": "Giá bán phải là một số lớn hơn 0",
    "any.required": "Giá bán là trường bắt buộc",
  }),
});
