import React, { ReactNode, useState } from "react"
import type { ComponentProps } from "react"
// ComponentProps is a utility type that extracts the props of a component its used to define the type of the props of a component in a more concise way than using the type of the props directly

type PrimaryButtonType = {
    bg: string
    borderColor?: '#845EC2' | '#D65DB1' | '#FF6F61' 
    fontSize?: number
    border?: boolean
    padding: [number]
    children?: ReactNode 
    setCount: React.Dispatch<React.SetStateAction<number>>
    addOne?: () => void
} & ComponentProps<"button">

const PrimaryButton = ({bg, fontSize, border, borderColor,padding, addOne, setCount, children, ...props   } : PrimaryButtonType) => {
  return (
    <button className={`p-[${padding[0]}px] bg-[${bg}] text-[${fontSize}px] ${border ? `border-2 border-[${borderColor}]` : "border-none"}`} {...props} onClick={addOne} >{children}</button>
  )
}

export default PrimaryButton
