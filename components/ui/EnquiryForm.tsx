'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = 'Name is required';
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email';
  }

  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required';
  }

  return errors;
}

export default function EnquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus(null);

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/enquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ type: 'success', message: result.message });
        setFormData({ name: '', email: '', phone: '' });
      } else {
        setStatus({ type: 'error', message: result.message || 'Something went wrong' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Failed to submit. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 border rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1.5";
  const errorClasses = "text-sm text-red-500 mt-1";

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Enquire Now</h2>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={isLoading}
            className={`${inputClasses} ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="John Doe"
          />
          {errors.name && <p className={errorClasses}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading}
            className={`${inputClasses} ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="john@example.com"
          />
          {errors.email && <p className={errorClasses}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={isLoading}
            className={`${inputClasses} ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="+1 234 567 8900"
          />
          {errors.phone && <p className={errorClasses}>{errors.phone}</p>}
        </div>

        {status && (
          <div
            className={`p-4 rounded-lg ${
              status.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {status.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {isLoading ? 'Submitting...' : 'Submit Enquiry'}
        </button>
      </form>
    </div>
  );
}