import Image from "next/image";

export default function TrendList(params) {
    return (
        <div className="border overflow-hidden rounded-md p-4 text-right">
          <h1 className="font-bold text-xl mb-4 pb-4 border-b">تازه ها</h1>
          <div className="my-2">
            <div className="flex justify-between items-center">
              <Image className="rounded-md w-20 h-20" src={"/images/blog.png"} width={75} height={75}/>
              <h2 className="font-bold text-lg">عنوان پست</h2>
            </div>
          </div>
          <div className="my-2">
            <div className="flex justify-between items-center">
              <Image className="rounded-md w-20 h-20" src={"/images/blog.png"} width={75} height={75}/>
              <h2 className="font-bold text-lg">عنوان پست</h2>
            </div>
          </div>
          <div className="my-2">
            <div className="flex justify-between items-center">
              <Image className="rounded-md w-20 h-20" src={"/images/blog.png"} width={75} height={75}/>
              <h2 className="font-bold text-lg">عنوان پست</h2>
            </div>
          </div>
          <div className="my-2">
            <div className="flex justify-between items-center">
              <Image className="rounded-md w-20 h-20" src={"/images/blog.png"} width={75} height={75}/>
              <h2 className="font-bold text-lg">عنوان پست</h2>
            </div>
          </div>
          <div className="my-2">
            <div className="flex justify-between items-center">
              <Image className="rounded-md w-20 h-20" src={"/images/blog.png"} width={75} height={75}/>
              <h2 className="font-bold text-lg">عنوان پست</h2>
            </div>
          </div>
        </div>
    )
}