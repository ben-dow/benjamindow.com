export default function Nav() {

    return (
        <div className="bg-cyan-800 h-16 w-full flex justify-between p-5">
            <div className="text-cyan-50">Benjamin Dow</div>

            <div className="flex space-x-4 text-md font-semibold">
                <div className="cursor-pointer text-cyan-50">Home</div>
                <div className="cursor-pointer text-cyan-50">About Me</div>
                <div className="cursor-pointer text-cyan-50">Resume</div>
                <div className="cursor-pointer text-cyan-50">Projects</div>
                <div className="cursor-pointer text-cyan-50">Blog</div>
            </div>
        </div>
    )
}