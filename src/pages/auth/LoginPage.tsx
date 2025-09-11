import { Button } from "../../components/ui/button";
import { TypographyH2 } from "../../typography/Typography";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="flex justify-center align-center h-full">
      <form
        // onSubmit={}
        className="bg-no-repeat bg-cover p-16 py-16 px-5 md:p-16 md:px-32 space-y-10 flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/images/scratchesBack.webp')" }}
      >
        <div className="flex flex-col gap-3">
          <TypographyH2>Log in to your account</TypographyH2>
          <span className="text-base">
            Welcome back! Please enter your details.
          </span>
        </div>
        <div className="flex flex-col  gap-5">
          <div className="flex flex-col items-start gap-2">
            <span className="text-sm">Email</span>
            <Input
              type="email" // Changed to email type
              placeholder="Enter your email"
              className="w-[360px] text-start"
              // onChange={handleInputChange}
              // value={email}
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <span className="text-sm">Password</span>
            <Input
              type="password" // Changed to password type
              placeholder="Enter your Password"
              className="w-[360px] text-start"
              // onChange={handleInputChange}
              // value={password}
            />
          </div>
          <div className="flex flex-row justify-between text-xs">
            <div className="flex flex-row justify-start space-x-2">
              <Checkbox
              // checked={isChecked}
              // onCheckedChange={handleCheckboxChange}
              />
              <p className="">Remember for 30 days</p>
            </div>
            <span className="text-forget cursor-pointer">Forget password</span>
          </div>
        </div>
        <div>
          <Button size="lg">Sign in</Button>
        </div>
        <div className="space-x-1 text-xs">
          <span className="">Don't have an account?</span>
          <Link to="/signup" className="text-forget cursor-pointer">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
