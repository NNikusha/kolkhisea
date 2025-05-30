"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DraggableModal from '../../molecules/DraggableModal/DraggableModal';
import { fetchFlats } from '@/app/hooks/axios';
import { useTranslations } from 'next-intl';

const FLOORS: number[] = [3, 4, 5, 6, 7, 8, 9, 10];

interface FlatsAvailable {
  [key: number]: number;
}

interface MobileChooseProps {
  isOpen?: boolean;
  onClose?: () => void;
  showButton?: boolean;
}

const MobileChoose: React.FC<MobileChooseProps> = ({
  isOpen: propIsOpen,
  onClose: propOnClose,
  showButton = true
}) => {
  const t = useTranslations('Language');
  const [localIsOpen, setLocalIsOpen] = useState<boolean>(false);
  const [selectedFloor, setSelectedFloor] = useState<number | null>(null);
  const [flatsAvailable, setFlatsAvailable] = useState<FlatsAvailable>({});
  const [loading, setLoading] = useState<boolean>(true);

  const isOpen = propIsOpen !== undefined ? propIsOpen : localIsOpen;
  const handleClose = propOnClose || (() => setLocalIsOpen(false));

  const router = useRouter();

  useEffect(() => {
    const loadFloorData = async () => {
      setLoading(true);
      try {
        const promises = FLOORS.map(floor =>
          fetchFlats({ floor: floor.toString() })
            .then(flatsData => {
              if (Array.isArray(flatsData)) {
                const availableFlats = flatsData.filter(flat =>
                  flat.status.en === 'Available'
                ).length;

                if (availableFlats > 0) {
                  setFlatsAvailable(prev => ({
                    ...prev,
                    [floor]: availableFlats
                  }));
                }
              }
              return null;
            })
            .catch(error => {
              console.error(`Error fetching flats for floor ${floor}:`, error);
              return null;
            })
        );

        await Promise.all(promises);
      } catch (error) {
        console.error("Error loading floor data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (isOpen) {
      loadFloorData();
    }
  }, [isOpen]);

  const handleSelectFloor = (floor: number): void => {
    setSelectedFloor(floor);
  };

  const handleSelect = (): void => {
    if (selectedFloor) {
      handleClose();
      router.push(`/apartment-choose?floor=${selectedFloor}`);
    }
  };

  return (
    <>
      <div className='top-0 left-0 w-full h-full flex items-center justify-center'>
        {showButton && (
          <div className="relative flex inline-flex xl:hidden z-50">
            <button
              className="relative w-[102px] h-[102px] rounded-full flex flex-col items-center justify-center cursor-pointer overflow-hidden group"
              onClick={() => setLocalIsOpen(true)}
            >
              <div
                className="absolute inset-0 bg-white/30 backdrop-blur-[4px] z-0"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
              />
              <div
                className="absolute inset-0 rounded-full border border-dashed border-white/80 z-10"
                style={{ borderWidth: '1px' }}
              />
              <div className="z-20 text-white text-center text-[14px]">
                <div>{t('SelectFlat')}</div>
              </div>
            </button>
          </div>
        )}
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-[60] flex items-center justify-center pointer-events-auto">
          <div className="absolute inset-0 pointer-events-none" />
            <div className="z-10 pointer-events-auto w-full">
              <DraggableModal isOpen={isOpen} onClose={handleClose}>
                <div className="p-6">
                  <h2 className="text-2xl text-black font-semibold mb-6">
                    {t('SelectTheFloor')}
                  </h2>

                  {loading ? (
                    <div className="flex justify-center items-center h-[179px]">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#CB684D]"></div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-4 gap-3 mb-6">
                      {FLOORS.map((floor) => (
                        <button
                          key={floor}
                          className={`w-[72px] h-[72px] rounded-2xl flex items-center justify-center text-xl ${
                            selectedFloor === floor
                              ? 'bg-[#CB684D] text-white'
                              : 'bg-[#F3F6FB] text-[#1C1C1E]'
                          }`}
                          onClick={() => handleSelectFloor(floor)}
                        >
                          {floor}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="border-t border-gray-200 py-4 flex justify-between items-center">
                    <div>
                      {selectedFloor ? (
                        <span className="text-xl text-black font-medium uppercase">
                          {t('FloorWithNumber', { floor: selectedFloor })}
                        </span>
                      ) : (
                        <span className="text-gray-500 uppercase">
                          {t('NoFloorChosen')}
                        </span>
                      )}
                    </div>
                    {selectedFloor && flatsAvailable[selectedFloor] && (
                      <div className="text-green-500 font-medium">
                        {t('FlatsAvailable', { count: flatsAvailable[selectedFloor] })}
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <button
                      className={`h-[56px] rounded-lg font-medium ${
                        selectedFloor
                          ? 'bg-[#CB684D] text-white'
                          : 'bg-[#F8EDE8] text-[#CB684D]'
                      }`}
                      onClick={handleSelect}
                      disabled={!selectedFloor}
                    >
                      {t('SelectButton')}
                    </button>
                    <button
                      className="h-[56px] rounded-lg bg-[#E8E8E8] text-[#1C1C1E] font-medium"
                      onClick={handleClose}
                    >
                      {t('CloseButton')}
                    </button>
                  </div>
                </div>
              </DraggableModal>
            </div>
        </div>
      )}
    </>
  );
};

export default MobileChoose;