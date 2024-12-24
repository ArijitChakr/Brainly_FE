import { Tweet } from "react-tweet";

export function Tweetembed({ id }: { id: string }) {
  return (
    <div className="light">
      <Tweet id={id} />
    </div>
  );
}
