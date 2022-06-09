import EmptyModalText from 'components/emtpyModalText/EmptyModalText';
import Header from 'components/header/Header';
import Modal from 'components/Modal/Modal';
import RatingModal from 'components/RatingModal/RatingModal';
import LibraryPage from 'pages/LibraryPage';
import TrainingPage from 'pages/TrainingPage';
import { useState } from 'react';

const Main = () => {
   const [showModal, setShowModal] = useState(true);
  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
    };
  return (
    <main>
      <LibraryPage/>
      <TrainingPage />
      {showModal && (
        <>
          <Modal onClose={toggleModal}>
            <RatingModal/>
          </Modal>
        </>
      )}
    </main>
  );
};

export default Main;
