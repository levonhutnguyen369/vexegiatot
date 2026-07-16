import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card"
import { FieldDescription, } from "@/components/ui/field"
import { Button } from "./ui/button";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from "react-router";
import { z } from "zod";

const signUpSchema = z.object({
  fullname: z.string().min(1, 'Họ và tên bắt buộc phải có'),
  username: z.string().min(3, 'It nhất 3 kí tự'),
  email: z.email('Email không hợp lệ'),
  tel: z.number().max(11, 'Số điện thoại không hợp lệ'),
  password: z.string().min(1, 'Mật khẩu ít nhất 6 kí tự')
})

type SignUpFormValue = z.infer<typeof signUpSchema>

export function SignupForm({ className, ...props }: React.ComponentProps<"div">) {

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignUpFormValue>({
    resolver: zodResolver(signUpSchema) // quy dinh validate logic cho form
  });

  const onSubmit = async (data: SignUpFormValue) => {
    // call api from backend
    data
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-8 text-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="mx-auto mb-4 w-1/2 h-auto object-contain"
              />
              <h2 className="mb-2 text-2xl font-bold">Tạo tài khoản</h2>
              <p className="text-sm text-muted-foreground">
                Nhập thông tin của bạn để tạo tài khoản mới.
              </p>
            </div>
            {/* ho va ten */}
            <div className="">
              <div>
                <label
                  htmlFor="fristname"
                  className="mb-2 block text-sm font-medium"
                >
                  Họ và tên
                </label>
                <Input
                  type="text"
                  id="fristName"
                  placeholder="Nguyen Van A"
                  {...register("fullname")}
                />
                {errors.fullname && (
                  <p className="text-destructive text-sm mt-2">
                    {errors.fullname.message}
                  </p>
                )}
              </div>
              
            </div>

            {/* so dien thoai */}
            <div className="mt-4">
              <label
                htmlFor="tel"
                className="mb-2 block text-sm font-medium"
              >
                Số điện thoại
              </label>
              <Input type="tel"
                pattern="[0-9]{10}"
                placeholder="0987654321" id="phoneNumber" {...register("tel")} />

              {errors.tel && (
                <p className="text-destructive text-sm mt-2">
                  {errors.tel.message}
                </p>
              )}
            </div>

            {/* email */}
            <div className="mt-4">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Địa chỉ email
              </label>
              <Input type="email"
                placeholder="abc@domain.com" id="email" {...register("email")} />

              {errors.email && (
                <p className="text-destructive text-sm mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            
            {/* mat khau */}
            <div className="grid grid-cols-2 gap-2">
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium"
                >
                  Mật khẩu
                </label>
                <Input type="password"
                  placeholder="" id="text" {...register("password")} />

                {errors.password && (
                  <p className="text-destructive text-sm mt-2">
                    {errors.password.message}
                  </p>
                )}
              </div>
              {/* nhap lai mat khau */}
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium"
                >
                  Nhập lại mật khẩu
                </label>
                <Input type="password"
                  placeholder="" id="text" {...register("password")} />
                {errors.password && (
                  <p className="text-destructive text-sm mt-2">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            {/* nut dang ky */}
            <div className="mt-6">
              <Button className="w-full bg-blue-500 hover:bg-blue-600" type="submit" disabled={isSubmitting}>Tạo tài khoản</Button>
            </div>

            <div className="mt-4 flex text-sm justify-center opacity-75">
              Hoặc tiếp tục với
            </div>

            <div className="mt-4">
              <Button variant="outline" type="button" className="w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                    fill="currentColor"
                  />
                </svg>
                Đăng ký với Google
              </Button>
            </div>

            <div className="px-6 text-center mt-4 text-sm opacity-75">
              <span>Đã có tài khoản? </span>
              <Link to="/signin">
              Đăng nhập
              </Link>
              
            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="/signup-image.jpg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        Bằng cách nhấp vào tiếp tục, bạn đồng ý với <a href="#">Điều khoản dịch vụ</a>{" "}
        và <a href="#">Chính sách bảo mật</a> của chúng tôi.
      </FieldDescription>
    </div>
  )
}
