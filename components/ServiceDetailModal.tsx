'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { getIcon } from '@/lib/icon-map';
import { FormattedServiceDescription } from '@/lib/format-service-description';
import type { ServiceData } from '@/sanity/types';

type ServiceDetailModalProps = {
  service: ServiceData | null;
  onClose: () => void;
};

export function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!service) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    panelRef.current?.focus();

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const Icon = getIcon(service.icon);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title">
      <button
        type="button"
        className="absolute inset-0 bg-teal-900/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Fermer la fenêtre"
      />
      <div
        ref={panelRef}
        tabIndex={-1}
        className="relative z-10 flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-cream shadow-2xl outline-none">
        <div className="flex items-start justify-between gap-4 border-b border-teal-900/10 px-6 py-5">
          <div className="flex items-start gap-4">
            <span className="font-sans text-3xl font-bold text-gold">{service.num}</span>
            <div className="space-y-1">
              <h3
                id="service-modal-title"
                className="font-sans text-2xl font-semibold leading-tight text-teal-900">
                {service.title}
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-teal-900/10 p-3 text-teal-900">
              <Icon size={24} />
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-2 text-teal-900 transition-colors hover:bg-teal-900/10"
              aria-label="Fermer">
              <X size={22} />
            </button>
          </div>
        </div>
        <div className="overflow-y-auto px-6 py-5">
          <FormattedServiceDescription description={service.description} />
        </div>
      </div>
    </div>
  );
}
