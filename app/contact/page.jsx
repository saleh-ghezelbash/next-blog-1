export default function Contact() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div
        style={{ direction: "rtl" }}
        className="bg-blue-600 px-4 lg:px-16 shadow-lg h-40 flex items-center justify-center"
      >
        <p className="text-center font-bold text-lg">با ما در تماس باشید</p>
      </div>
      <div style={{ direction: "rtl" }}>
        <form class="lg:max-w-3xl mx-auto border rounded-xl px-8 pt-6 pb-8 my-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              نام <span className="text-red-500">*</span>
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
            />
            <p class="text-red-500 text-xs italic mt-2">
              نام نمی تواند خالی باشد
            </p>
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              ایمیل <span className="text-red-500">*</span>
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
            />
            <p class="text-red-500 text-xs italic mt-2">
              ایمیل نمی تواند خالی باشد
            </p>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="topic"
            >
              موضوع <span className="text-red-500">*</span>
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="topic"
              type="text"
            />
            <p class="text-red-500 text-xs italic mt-2">
              موضوع نمی تواند خالی باشد
            </p>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="message"
            >
              متن پیام <span className="text-red-500">*</span>
            </label>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="6"
              placeholder="لطفا متن پیام خود را وارد کنید"
            />
            <p class="text-red-500 text-xs italic mt-2">
              متن پیام نمی تواند خالی باشد
            </p>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              ارسال
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
