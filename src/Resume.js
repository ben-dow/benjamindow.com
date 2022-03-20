export default function Resume() {
  return (
    <div className={"w-full h-full"}>
      <embed
        src="https://resume.benjamin-dow.com/BenjaminDowResume.pdf"
        className={"w-full h-full hidden sm:flex"}
        type="application/pdf"
      />
      <div
        className={
          "sm:hidden w-full p-2 flex bg-slate-700 bg-opacity-75 text-white font-semibold mt-5 justify-center"
        }
      >
        <div className={"bg-blue-500 flex p-3 "}>
          <a href={"https://resume.benjamin-dow.com/BenjaminDowResume.pdf"}>
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
}
