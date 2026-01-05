import TextShimmer from "@/app/components/text-shimmer";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <TextShimmer className="text-4xl" duration={1.5} repeatDelay={0.5}>
        cooking..
      </TextShimmer>
    </div>
  );
}
