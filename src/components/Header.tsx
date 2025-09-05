interface HeaderProps {
  // now ut taking two child nodes -> make it array of ReactElement
  children: React.ReactElement[];
}

export default function Header(props: HeaderProps) {
  return <header className="px-24 pt-8 pb-23">{props.children}</header>;
}
