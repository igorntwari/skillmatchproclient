import { Button } from "../../components/ui/button";
import { TypographyH2 } from "../../typography/Typography";
import { Input } from "../../components/ui/input";
// import { Link } from "react-router-dom";
import ProgressiveBar from "../../components/progressiveBar";
import { Link } from "react-router-dom";
import BackIcon from "../../assets/icons/Back.svg";

function SetNewPassword() {
  return (
    <div className="flex justify-center mx-auto align-center h-full border border-b-4 border-x-2 border-auth_border w-[410px] mt-10 rounded-3xl">
      <form
        // onSubmit={}
        className="bg-no-repeat bg-cover p-16 py-16 px-5 md:p-16 md:px-32 space-y-10 flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/images/scratchesBack.webp')" }}
      >
        <ProgressiveBar step={3} />
        <div className="flex flex-col gap-3">
          <TypographyH2>Set new password</TypographyH2>
          <span className="text-sm">password must be at least 6 letters </span>
        </div>
        <div className="flex flex-col  gap-5">
          <div className="flex flex-col items-start gap-2">
            <span className="text-sm">Password</span>
            <Input
              type="text"
              placeholder="Create Password"
              className="w-[360px] text-start"
              // onChange={handleInputChange}
              // value={email}
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <span className="text-sm">Confirm Password</span>
            <Input
              type="text"
              placeholder="Confirm Password"
              className="w-[360px] text-start"
              // onChange={handleInputChange}
              // value={email}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Link to="/UpdatedPassword" className=" cursor-pointer">
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

export default SetNewPassword;
