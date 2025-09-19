import { Button } from "../../components/ui/button";
import { TypographyH2 } from "../../typography/Typography";
import { Input } from "../../components/ui/input";
import { Link } from "react-router-dom";
import ProgressiveBar from "../../components/progressiveBar";
import BackIcon from "../../assets/icons/Back.svg";

function ForgotPassword() {
  return (
    <div className="flex justify-center mx-auto align-center h-full border border-b-4 border-auth_border w-[410px] mt-10 rounded-3xl">
      <form
        // onSubmit={}
        className="bg-no-repeat bg-cover p-16 py-16 px-5 md:p-16 md:px-32 space-y-10 flex flex-col items-start justify-center"
        style={{ backgroundImage: "url('/images/scratchesBack.webp')" }}
      >
        <ProgressiveBar step={2} />
        <div className="flex flex-col items-center gap-3">
          <TypographyH2>Forgot your password?</TypographyH2>
          <span className="text-base text-center">
            A code will be sent to your email to help reset <br /> password
          </span>
        </div>
        <div className="flex flex-col  gap-5">
          <div className="flex flex-col items-start gap-2">
            <span className="text-sm">Email</span>
            <Input
              type="text"
              placeholder="Enter your Email"
              className="w-[360px] text-start"
              // onChange={handleInputChange}
              // value={email}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Link to="/" className=" cursor-pointer">
            <Button size="lg">Reset password</Button>
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

export default ForgotPassword;
