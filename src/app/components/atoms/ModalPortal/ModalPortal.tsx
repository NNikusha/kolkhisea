// components/ModalPortal.tsx
'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ModalPortalProps {
  children: React.ReactNode;
}

const ModalPortal = ({ children }: ModalPortalProps) => {
  const [mounted, setMounted] = useState(false);
  const [modalContainer, setModalContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let container = document.getElementById('modal-root');

    if (!container) {
      container = document.createElement('div');
      container.id = 'modal-root';
      document.body.appendChild(container);
    }

    setModalContainer(container);
    setMounted(true);
  }, []);

  if (!mounted || !modalContainer) return null;

  return createPortal(children, modalContainer);
};

export default ModalPortal;