import { Button } from "../../components/ui/button";
import { TypographyH1 } from "../../typography/Typography";
import ProgressiveBar from "../../components/progressiveBar";
import { Link } from "react-router-dom";
import BackIcon from "../../assets/icons/Back.svg";
import successIcon from "../../assets/icons/success.svg";
function UpdatedPassword() {
  return (
    <div className="flex justify-center mx-auto align-center h-full border border-b-4 border-x-2 border-auth_border w-[410px] mt-10 rounded-3xl">
      <form
        // onSubmit={}
        className="bg-no-repeat bg-cover p-16 py-16 px-5 md:p-16 md:px-32 space-y-10 flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/images/scratchesBack.webp')" }}
      >
        <ProgressiveBar step={4} />
        <div className="flex flex-col gap-3 justify-center">
          <TypographyH1 className="text-dark_primary text-center">
            Success
          </TypographyH1>
          <img src={successIcon} alt="success logo" />
          <div className="flex flex-col gap-3 text-center">
            <span>Congratulations! You have been</span>
            <span>Successfully verified.</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Link to="/updatedPassword" className=" cursor-pointer">
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

export default UpdatedPassword;
