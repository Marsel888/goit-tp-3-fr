import EmptyModalText from 'components/emtpyModalText/EmptyModalText';
import Header from 'components/header/Header';
import LibraryForm from 'components/LibraryForm/LibraryForm'
import Modal from 'components/Modal/Modal';
import { useState } from 'react';

const LibraryPage = () => {
   const [showModal, setShowModal] = useState(true);
  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };
  return <>
    <LibraryForm />
    {showModal && (
        <>
          <Modal onClose={toggleModal}>
            <Header />
            <EmptyModalText />
          </Modal>
        </>
      )}
  </>;
};

// При отсутвии библиотеки рендерить модальное окно с шагами, по сути это не модальное окно
// а обычный компонент внутри страницы. Мы его условно называем модальным окном, по макету это не так.

// Т.е. при рендериге Страницы мы делаем запрос на бек - если он не возвращает библиотеку, то показываем
// модалку

// Если есть Библиотека - рендерим её (по категориям в зависимости от статуса книги)
// Кнопка + открывает форму добавления книги
// кнопку "моє тренування" дисейблим или вообще не показываем, если нет ниодной книги.
// 3.1 и 3.2 обьединяем

export default LibraryPage;
