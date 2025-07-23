import  { RainbowButton } from "../components/magicui/rainbow-button";

export function RainbowButtonDemo(props: { children: React.ReactNode }) {
  return( <RainbowButton>{props.children}</RainbowButton>);
}
