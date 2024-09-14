import React, { useState } from 'react';
import styles from '@/app/styles/headerWithInfo.module.css';

const HeaderWithInfo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const companyName = 'Codex Caffe'; // Hardcoded company name
  const companyInfo = 'Here is some additional information about Codex Caffe. Customize this message as needed.';

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.header}>
      <h2 className={styles.companyName}>{companyName}</h2>
      <button onClick={handleOpenModal} className={styles.infoButton}>
        Info
      </button>
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h3 className={styles.modalTitle}>Company Information</h3>
            <p>{companyInfo}</p>
            <button onClick={handleCloseModal} className={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderWithInfo;
