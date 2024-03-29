import React from "react";
import { useTheme } from "next-themes";

interface Props {
  closeModal: () => void;
}

const ContactModal: React.FC<Props> = ({ closeModal }) => {
  const [phone, setPhone] = React.useState<string>("");

  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const isDark = currentTheme === "dark";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    // Gather form data
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value, // Add this line
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };
    // Send data to Vercel serverless function
    try {
      const response = await fetch("/api/sendToDiscord", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        if (form) {
          form.reset(); // Check if form is not null before resetting
        }
      } else {
        const errorData = await response.json();
        alert(
          `Failed to send message: ${
            errorData.error || "Unknown error occurred"
          }`
        );
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(`Error: ${error.message}`);
      } else {
        alert(`An unknown error occurred.`);
      }
    }

    closeModal(); // Close the modal once, after all operations are done.
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full ${
        isDark ? "bg-gray-900" : "bg-gray-100"
      } bg-opacity-50 flex justify-center items-center z-50`}
    >
      <div
        className={`p-8 rounded-md w-full max-w-md ${
          isDark ? "bg-sky-950" : "bg-white"
        }`}
      >
        <h2
          className={`text-2xl mb-4 ${
            isDark ? "text-neutral-100" : "text-gray-900"
          }`}
        >
          Contact Me
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className={`block text-sm font-bold mb-2 ${
                isDark ? "text-neutral-100" : "text-gray-900"
              }`}
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`shadow appearance-none border rounded w-full py-2 px-3 ${
                isDark
                  ? "text-neutral-100 bg-sky-850"
                  : "text-gray-900 bg-white"
              }`}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className={`block text-sm font-bold mb-2 ${
                isDark ? "text-neutral-100" : "text-gray-900"
              }`}
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`shadow appearance-none border rounded w-full py-2 px-3 ${
                isDark
                  ? "text-neutral-100 bg-sky-850"
                  : "text-gray-900 bg-white"
              }`}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className={`block text-sm font-bold mb-2 ${
                isDark ? "text-neutral-100" : "text-gray-900"
              }`}
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => {
                const value = e.target.value;
                const onlyNums = value.replace(/[^\d]/g, "");

                if (onlyNums.length < 4) {
                  setPhone(onlyNums);
                } else if (onlyNums.length < 7) {
                  setPhone(`(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3)}`);
                } else {
                  setPhone(
                    `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(
                      3,
                      6
                    )}-${onlyNums.slice(6, 10)}`
                  );
                }
              }}
              pattern="\(\d{3}\) \d{3}-\d{4}"
              required
              onInput={(e) => {
                const target = e.target as HTMLInputElement;
                target.setCustomValidity('');
                if (!target.validity.valid) {
                  target.setCustomValidity('Please use the format (123) 456-7890.');
                }
              }}
              className={`shadow appearance-none border rounded w-full py-2 px-3 ${
                isDark
                  ? "text-neutral-100 bg-sky-850"
                  : "text-gray-900 bg-white"
              }`}
            />
            <small className="text-xs text-gray-500">
              Format: (123) 456-7890
            </small>
          </div>

          <div className="mb-4">
            <label
              className={`block text-sm font-bold mb-2 ${
                isDark ? "text-neutral-100" : "text-gray-900"
              }`}
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className={`shadow appearance-none border rounded w-full py-2 px-3 ${
                isDark
                  ? "text-neutral-100 bg-sky-850"
                  : "text-gray-900 bg-white"
              }`}
              required
            ></textarea>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={closeModal}
              className={`text-gray-500 ${
                isDark ? "hover:text-neutral-400" : "hover:text-gray-600"
              }`}
            >
              Close
            </button>
            <button
              type="submit"
              className={`bg-teal-600 text-white px-6 py-3 rounded ${
                isDark ? "hover:bg-teal-700" : "hover:bg-teal-500"
              }`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
