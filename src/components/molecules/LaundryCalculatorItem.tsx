import React from "react";

import {CalculatorItem, CalculatorItemProps} from "./CalculatorItem";
import {calcLaundryPrice} from "../../helpers/calculator-helper";

export function LaundryCalculatorItem(props: CalculatorItemProps) {
    return <CalculatorItem {...props} calculatePrice={calcLaundryPrice}/>
}