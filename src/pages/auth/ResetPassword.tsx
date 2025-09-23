import { Button } from "../../components/ui/button";
import { TypographyH2 } from "../../typography/Typography";
import { Link } from "react-router-dom";
import ProgressiveBar from "../../components/progressiveBar";
import BackIcon from "../../assets/icons/Back.svg";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../../components/ui/input-otp";

function ResetPassword() {
  return (
    <div className="flex justify-center mx-auto align-center h-full border border-b-4 border-x-2 border-auth_border w-[410px] mt-10 rounded-3xl">
      <form
        // onSubmit={}
        className="bg-no-repeat bg-cover p-16 py-16 px-5 md:p-16 md:px-32 space-y-10 flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/images/scratchesBack.webp')" }}
      >
        <ProgressiveBar step={2} />
        <div className="flex flex-col text-center gap-3">
          <TypographyH2>Password Reset</TypographyH2>
          <span className="text-base text-center">
            We sent code to <span className="font-bold">example@gmail.com</span>
          </span>
        </div>
        <div className="flex flex-col  gap-5">
          <div className="flex flex-col items-start gap-2">
            <span className="text-sm">Secure code</span>
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <span className="text-base text-center">
            Didn’t receive the code?{" "}
            <span className="text-primary underline text-sm">click here</span>
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <Link to="/setnewpassword" className=" cursor-pointer">
            <Button size="lg">Continue</Button>
          </Link>
          <Button asChild size="lg" variant="secondary">
            <Link to="/login">
              <img src={BackIcon} alt="Back" className="size-4" />
              Back to login
            </Link>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ResetPassword;
