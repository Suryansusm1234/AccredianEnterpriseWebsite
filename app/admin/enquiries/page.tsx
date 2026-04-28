'use client';

import { useEffect, useState } from 'react';

interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  timestamp: string;
}

export default function EnquiriesPage() {
  const [data, setData] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/getenquire')
      .then((res) => res.json())
      .then((result) => {
        setData(result.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-surface-container-low py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-headline-lg text-on-surface">Enquiries</h1>
            <p className="mt-1 text-body-md text-on-surface-variant">
              {data.length} total submission{data.length !== 1 ? "s" : ""}
            </p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
          >
            Refresh
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant animate-spin">
              sync
            </span>
          </div>
        ) : data.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-outline-variant bg-white py-16 text-center">
            <span className="material-symbols-outlined text-6xl text-on-surface-variant">
              inbox
            </span>
            <h2 className="mt-4 text-xl font-semibold text-on-surface">
              No enquiries yet
            </h2>
            <p className="mt-2 text-body-md text-on-surface-variant">
              When someone fills out the enquiry form, it will appear here.
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-3xl border border-outline-variant bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-surface-container-low">
                  <tr>
                    <th className="px-6 py-4 text-left text-label-sm font-semibold text-on-surface">
                      ID
                    </th>
                    <th className="px-6 py-4 text-left text-label-sm font-semibold text-on-surface">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-label-sm font-semibold text-on-surface">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-label-sm font-semibold text-on-surface">
                      Phone
                    </th>
                    <th className="px-6 py-4 text-left text-label-sm font-semibold text-on-surface">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {[...data].reverse().map((enquiry) => (
                    <tr
                      key={enquiry.id}
                      className="hover:bg-surface-container-low/50 transition-colors"
                    >
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-on-surface-variant">
                        {enquiry.id}
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-body-md font-medium text-on-surface">
                          {enquiry.name}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={`mailto:${enquiry.email}`}
                          className="text-body-md text-primary hover:underline"
                        >
                          {enquiry.email}
                        </a>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={`tel:${enquiry.phone}`}
                          className="text-body-md text-on-surface-variant hover:text-primary"
                        >
                          {enquiry.phone}
                        </a>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-body-md text-on-surface-variant">
                        {new Date(enquiry.timestamp).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}