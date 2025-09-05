interface PageProps {
  children: React.ReactElement[];
}

export default function Page(props: PageProps) {
  return <div>{props.children}</div>;
}
