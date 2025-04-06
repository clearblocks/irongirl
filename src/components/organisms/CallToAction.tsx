import React, {ForwardedRef, forwardRef} from 'react';
import classNames from "classnames";

interface CallToActionProps {
  imgSrc: string
  imgAlt: string
  className?: string
  children: JSX.Element[] | JSX.Element;
}

export const CallToAction = forwardRef(({imgSrc, imgAlt, className, children}: CallToActionProps, ref: ForwardedRef<HTMLDivElement>) => (
  <div className={classNames("cta", {[`${className}`]: !!className})} ref={ref}>
    <img src={imgSrc} alt={imgAlt}/>
    <div className={"action"}>
      <>{children}</>
    </div>
  </div>
));
