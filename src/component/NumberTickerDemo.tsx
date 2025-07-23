import { NumberTicker } from "@/components/magicui/number-ticker";

export function NumberTickerDemo() {
  return (
    <NumberTicker
        value={1000}
      className="whitespace-pre-wrap text-7xl font-medium tracking-tighter text-black dark:text-white"
    />
  );
}
