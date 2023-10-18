import React from "react";

import * as S from "./styles";
import * as PopoverPrimitive from "@radix-ui/react-popover";
export type PopoverProps = Pick<
  PopoverPrimitive.PopoverContentTypeProps,
  | "align"
  | "alignOffset"
  | "sideOffset"
  | "onEscapeKeyDown"
  | "onCloseAutoFocus"
  | "onFocusOutside"
  | "avoidCollisions"
  | "collisionPadding"
  | "side"
> & {
  trigger: React.ReactNode;
  content: React.ReactNode;
  title?: React.ReactNode;
  hasButtonClose?: boolean;
  asChild?: boolean;
  hasArrow?: boolean;
  open?: boolean;
};

const Language: React.FC<PopoverProps> = ({
  content,
  trigger,
  align,
  alignOffset,
  avoidCollisions,
  collisionPadding,
  onCloseAutoFocus,
  onEscapeKeyDown,
  onFocusOutside,
  side = "bottom",
  sideOffset,
  open,
}) => {
  return (
    <S.PopoverContainer open={open}>
      <PopoverPrimitive.Anchor>
        <S.PopoverTrigger>{trigger}</S.PopoverTrigger>
      </PopoverPrimitive.Anchor>
      <PopoverPrimitive.Portal>
        <S.PopoverContent
          align={align}
          side={side}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
          onFocusOutside={onFocusOutside}
          onEscapeKeyDown={onEscapeKeyDown}
          avoidCollisions={avoidCollisions}
          onCloseAutoFocus={onCloseAutoFocus}
          collisionPadding={collisionPadding}
        >
          <S.PopoverHeader></S.PopoverHeader>
          <S.PopoverArrow />
          {content}
        </S.PopoverContent>
      </PopoverPrimitive.Portal>
    </S.PopoverContainer>
  );
};

export default Language;
