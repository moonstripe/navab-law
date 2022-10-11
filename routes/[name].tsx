/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import { PageProps } from "fresh/server.ts";

export default function Greet(props: PageProps) {
  return <div>you're in the wrong place. go <a class={tw`text-blue-medium`} href="/">back</a>?</div>;
}
