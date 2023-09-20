export default function Loading() {
  return (<>
    <div className="absolute top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
      <div className="animate-spin rounded-full h-60 w-48 border-y-8 border-green-300"></div>
    </div>
    <div className="absolute top-0 right-0 h-screen w-screen z-45 flex justify-center items-center">
      <p className="text-center text-xl">🌜 Please wait a moment~ 🌛</p>
    </div>
  </>);
}
