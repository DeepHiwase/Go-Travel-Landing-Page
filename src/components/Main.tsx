import type React from "react";

interface MainProps {
  children: React.ReactElement[];
}

export default function Main(props: MainProps) {
  return <main>{props.children}</main>;
}
