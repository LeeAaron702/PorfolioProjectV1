import React from 'react';
import { useTheme } from 'next-themes';

interface Props {
  closeModal: () => void;
}

const ContactModal: React.FC<Props> = ({ closeModal }) => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const isDark = currentTheme === 'dark';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const form = e.currentTarget;

    // Gather form data
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
  
    // Send data to Vercel serverless function
    try {
      const response = await fetch('/api/sendToDiscord', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Handle success - e.g., show a success message, reset the form, etc.
        alert("Message sent successfully!");
        e.currentTarget.reset();
      } else {
        // Handle error - e.g., show an error message to the user
        const errorData = await response.json();
        alert(`Failed to send message: ${errorData.error || "Unknown error occurred"}`);
      }
      try {
        // ... your async code here
    } catch (error) {
        if (error instanceof Error) {
            alert(`Error: ${error.message}`);
        } else {
            alert(`An unknown error occurred.`);
        }
    
    closeModal();
  }

    return (
    <div className={`fixed top-0 left-0 w-full h-full ${isDark ? "bg-gray-900" : "bg-gray-100"} bg-opacity-50 flex justify-center items-center`}>
      <div className={`p-8 rounded-md w-full max-w-md ${isDark ? "bg-sky-950" : "bg-white"}`}>
        <h2 className={`text-2xl mb-4 ${isDark ? "text-neutral-100" : "text-gray-900"}`}>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className={`block text-sm font-bold mb-2 ${isDark ? "text-neutral-100" : "text-gray-900"}`} htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className={`shadow appearance-none border rounded w-full py-2 px-3 ${isDark ? "text-neutral-100 bg-sky-850" : "text-gray-900 bg-white"}`} required />
          </div>

          <div className="mb-4">
            <label className={`block text-sm font-bold mb-2 ${isDark ? "text-neutral-100" : "text-gray-900"}`} htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className={`shadow appearance-none border rounded w-full py-2 px-3 ${isDark ? "text-neutral-100 bg-sky-850" : "text-gray-900 bg-white"}`} required />
          </div>

          <div className="mb-4">
            <label className={`block text-sm font-bold mb-2 ${isDark ? "text-neutral-100" : "text-gray-900"}`} htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} className={`shadow appearance-none border rounded w-full py-2 px-3 ${isDark ? "text-neutral-100 bg-sky-850" : "text-gray-900 bg-white"}`} required></textarea>
          </div>

          <div className="flex justify-between">
            <button type="button" onClick={closeModal} className={`text-gray-500 ${isDark ? "hover:text-neutral-400" : "hover:text-gray-600"}`}>Close</button>
            <button type="submit" className={`bg-teal-600 text-white px-6 py-3 rounded ${isDark ? "hover:bg-teal-700" : "hover:bg-teal-500"}`}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactModal;
