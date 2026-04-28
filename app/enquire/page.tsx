import EnquiryForm from '@/components/ui/EnquiryForm';

export default function EnquirePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Get in Touch</h1>
          <p className="mt-2 text-gray-600">
            Fill out the form below and our team will reach out to you.
          </p>
        </div>
        <EnquiryForm />
      </div>
    </main>
  );
}