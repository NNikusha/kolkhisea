import React, { useState, useRef, useEffect, useCallback } from 'react';

interface DraggableModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  height?: string;
}

const DraggableModal: React.FC<DraggableModalProps> = ({ 
  isOpen, 
  onClose, 
  children,
  height = "466px" 
}) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startY, setStartY] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setOffsetY(0);
      setIsClosing(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = useCallback((): void => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  const handleDragStart = (e: React.TouchEvent | React.MouseEvent): void => {
    setIsDragging(true);
    
    if ('touches' in e) {
      setStartY(e.touches[0].clientY);
    } else {
      setStartY(e.clientY);
    }
  };

  const handleDrag = useCallback((e: TouchEvent | MouseEvent): void => {
    if (!isDragging) return;
    
    let currentY: number;
    if ('touches' in e) {
      currentY = e.touches[0].clientY;
    } else {
      currentY = e.clientY;
    }
    
    const diff = currentY - startY;
    
    if (diff > 0) {
      setOffsetY(diff);
    }
  }, [isDragging, startY]);

  const handleDragEnd = useCallback((): void => {
    setIsDragging(false);
    
    if (offsetY > 150) {
      handleClose();
    } else {
      setOffsetY(0);
    }
  }, [offsetY, handleClose]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleDrag);
      window.addEventListener('touchmove', handleDrag);
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('touchend', handleDragEnd);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleDrag);
      window.removeEventListener('touchmove', handleDrag);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging, handleDrag, handleDragEnd]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div 
        className="absolute inset-0 bg-black/50 transition-opacity duration-300"
        style={{ opacity: isClosing ? 0 : 1 }}
        onClick={handleClose}
      />
      
      <div 
        ref={sheetRef}
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl transition-all duration-300 ease-out"
        style={{ 
          boxShadow: '0px -4px 25px rgba(0, 0, 0, 0.1)',
          transform: isClosing 
            ? 'translateY(100%)' 
            : `translateY(${offsetY}px)`,
          transition: isDragging ? 'none' : 'transform 0.3s ease-out',
          height
        }}
      >
        <div 
          className="w-full h-8 flex items-center justify-center cursor-grab"
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
        >
          <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
        </div>
        
        {children}
      </div>
    </div>
  );
};

export default DraggableModal;