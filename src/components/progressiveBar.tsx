import { cn } from "../lib/utils";
import { useNavigate } from "react-router-dom";

interface ProgressiveBarProps {
  step: number;
  routes?: string[];
  maxSteps?: number;
}

const DEFAULT_ROUTES = [
  "/signup",
  "/createPassword",
  "/step3", // Replace with your actual route
  "/step4", // Replace with your actual route
];

export default function ProgressiveBar({
  step,
  routes = DEFAULT_ROUTES,
  maxSteps = 4,
}: ProgressiveBarProps) {
  const navigate = useNavigate();

  const handleStepClick = (clickedStep: number): void => {
    // Only allow navigation to completed steps or current step
    if (clickedStep <= step && routes[clickedStep - 1]) {
      navigate(routes[clickedStep - 1]);
    }
  };

  return (
    <div className="flex gap-2">
      {Array.from({ length: maxSteps }, (_, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber <= step;
        const hasRoute = Boolean(routes[index]);
        const isClickable = isCompleted && hasRoute;

        return (
          <div
            key={`step-${stepNumber}`}
            className={cn(
              "h-1 w-20 rounded-[32px] transition-colors duration-200",
              isClickable
                ? "cursor-pointer hover:opacity-80"
                : "cursor-not-allowed",
              isCompleted ? "bg-primary" : "bg-second_primary"
            )}
            onClick={() => handleStepClick(stepNumber)}
            role="button"
            tabIndex={isClickable ? 0 : -1}
            onKeyDown={(e) => {
              if (isClickable && (e.key === "Enter" || e.key === " ")) {
                e.preventDefault();
                handleStepClick(stepNumber);
              }
            }}
            aria-label={`Step ${stepNumber}${
              isCompleted ? " (completed)" : ""
            }`}
          />
        );
      })}
    </div>
  );
}
