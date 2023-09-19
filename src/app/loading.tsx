export default function Loading() {
    return (
        <div className="absolute right-0 top-0 flex h-screen w-screen flex-col items-center justify-center gap-2">
            <span className="loading loading-spinner loading-lg text-info"></span>
            <p className="text-center">🎗🎁 Please wait a moment~ 🍕</p>
        </div>
    );
}
