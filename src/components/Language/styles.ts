import styled, { keyframes } from "styled-components";
import * as Popover from "@radix-ui/react-popover";

export const slideUpAndFade = keyframes`
  0% { opacity: 0; transform: translateY(2px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export const slideRightAndFade = keyframes`
  0% { opacity: 0; transform: translateX(-2px); }
  100% { opacity: 1; transform: translateX(0); }
`;

export const slideDownAndFade = keyframes`
  0% { opacity: 0; transform: translateY(-2px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export const slideLeftAndFade = keyframes`
  0% { opacity: 0; transform: translateX(2px); }
  100% { opacity: 1; transform: translateX(0); }
`;

export const PopoverContainer = styled(Popover.Root)`
  /* Your styles here */
`;

export const PopoverTrigger = styled(Popover.Trigger)`
  border: none;
`;

export const PopoverContent = styled(Popover.Content)`
  border-radius: 4px;
  z-index: 30;
  padding: 8px;
  background-color: #ffffff;

  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-state="open"] {
    &[data-side="top"] {
      animation-name: ${slideDownAndFade};
    }
    &[data-side="right"] {
      animation-name: ${slideLeftAndFade};
    }
    &[data-side="bottom"] {
      animation-name: ${slideUpAndFade};
    }
    &[data-side="left"] {
      animation-name: ${slideRightAndFade};
    }
  }
`;

export const PopoverArrow = styled(Popover.Arrow)`
  fill: #ffffff;
`;

export const PopoverHeader = styled("header")`
  display: flex;
`;

export const PopoverClose = styled(Popover.Close)`
  margin-left: auto;
`;
