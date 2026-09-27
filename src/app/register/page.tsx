'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';

import { z } from 'zod';

const registerSchema = z.object({
  persona: z.string().min(1, 'Persona is required'),
  track: z.string().min(1, 'Track is required'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
});

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    persona: '',
    track: '',
    name: '',
    email: '',
  });

  const updateForm = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <main className="min-h-screen pt-20 pb-20 flex items-center justify-center">
      <div className="max-w-xl w-full mx-auto px-6">
        <div className="bg-[var(--surface-2)] border border-[var(--border)] radius-global p-8">
          
          <div className="flex justify-between items-center mb-8">
            <h1 className="font-display text-h3">Registration</h1>
            <span className="text-small text-[var(--text-muted)] font-mono">Step {step} of 3</span>
          </div>

          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4">
              <h2 className="text-h4 font-bold mb-4">Who are you?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {['Developer', 'Investor', 'Founder', 'Media', 'Student', 'Other'].map(p => (
                  <button 
                    key={p}
                    onClick={() => updateForm('persona', p)}
                    className={`p-4 border text-left radius-global transition-colors ${formData.persona === p ? 'border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent-light)]' : 'border-[var(--border)] bg-[var(--surface)] hover:border-[var(--text-muted)]'}`}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <Button 
                variant="primary" 
                className="w-full" 
                disabled={!formData.persona}
                onClick={() => setStep(2)}
              >
                Next Step →
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4">
              <h2 className="text-h4 font-bold mb-4">Which track interests you most?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {['DeFi', 'Infrastructure', 'Gaming', 'Policy & Regs', 'AI & Data', 'General'].map(t => (
                  <button 
                    key={t}
                    onClick={() => updateForm('track', t)}
                    className={`p-4 border text-left radius-global transition-colors ${formData.track === t ? 'border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent-light)]' : 'border-[var(--border)] bg-[var(--surface)] hover:border-[var(--text-muted)]'}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setStep(1)}>← Back</Button>
                <Button 
                  variant="primary" 
                  className="flex-grow" 
                  disabled={!formData.track}
                  onClick={() => setStep(3)}
                >
                  Next Step →
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-4">
              <h2 className="text-h4 font-bold mb-4">Your Details</h2>
              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-small font-bold text-[var(--text-muted)] mb-2 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => updateForm('name', e.target.value)}
                    className="w-full bg-[var(--surface)] border border-[var(--border)] radius-global px-4 py-3 text-body text-[var(--text)] focus:outline-none focus:border-[var(--accent)]"
                    placeholder="Satoshi Nakamoto"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-small font-bold text-[var(--text-muted)] mb-2 uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => updateForm('email', e.target.value)}
                    className="w-full bg-[var(--surface)] border border-[var(--border)] radius-global px-4 py-3 text-body text-[var(--text)] focus:outline-none focus:border-[var(--accent)]"
                    placeholder="satoshi@bitcoin.org"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setStep(2)}>← Back</Button>
                <Button 
                  variant="primary" 
                  className="flex-grow"
                  onClick={async () => {
                    setErrors({});
                    try {
                      registerSchema.parse(formData);
                    } catch (error: any) {
                      const newErrors: Record<string, string> = {};
                      if (error.issues) {
                        error.issues.forEach((issue: any) => {
                          if (issue.path[0]) {
                            newErrors[issue.path[0] as string] = issue.message;
                          }
                        });
                      }
                      setErrors(newErrors);
                      return;
                    }

                    try {
                      const res = await fetch('/api/register', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(formData)
                      });
                      if (res.ok) {
                        setStep(4);
                      } else {
                        console.error('Registration failed');
                      }
                    } catch (error) {
                      console.error('Registration error:', error);
                    }
                  }}
                >
                  Complete Registration
                </Button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-in fade-in zoom-in text-center py-8">
              <div className="w-16 h-16 bg-[var(--accent)]/20 text-[var(--accent-light)] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h2 className="text-h3 font-display mb-2">Registration Complete!</h2>
              <p className="text-[var(--text-muted)] mb-8">We've received your application. Keep an eye on your inbox for the official ticket.</p>
              <Button variant="outline" onClick={() => window.location.href = '/'}>
                Return to Homepage
              </Button>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}

