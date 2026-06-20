export default function LoadingScreen() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-surface text-on-surface">
      <div className="flex w-full max-w-80 flex-col gap-5 px-6 font-space">
        <div className="flex items-end justify-between">
          <p className="text-sm uppercase">Loading</p>
          <p className="text-5xl leading-none">Hiro</p>
        </div>

        <div className="h-px w-full overflow-hidden bg-on-surface/20">
          <div className="h-full w-1/2 animate-[loading-bar_1.1s_ease-in-out_infinite] bg-on-surface" />
        </div>
      </div>
    </div>
  );
}
