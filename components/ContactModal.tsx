import React from 'react';

interface Props {
  closeModal: () => void;
}

const ContactModal: React.FC<Props> = ({ closeModal }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Gather form data and send it to the backend or EmailJS or similar service

    closeModal();
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-md w-full max-w-md">
        <h2 className="text-2xl mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3" required />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3" required />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} className="shadow appearance-none border rounded w-full py-2 px-3" required></textarea>
          </div>

          <div className="flex justify-between">
            <button type="button" onClick={closeModal} className="text-gray-500">Close</button>
            <button type="submit" className="bg-teal-600 text-white px-6 py-3 rounded">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactModal;
