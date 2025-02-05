import React from 'react'
import { useModal } from '@hooks/useModal'
import { PrivacyModal } from '@pages/modal/PrivacyModal'

const Footer: React.FC = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <footer className="portal-footer">
        <span className="contact">Help Desk<em>032-741-6320, 6321</em></span>
        <button type="button" className="link" onClick={openModal}>개인정보처리방침</button>
      </footer>

      <PrivacyModal
        isOpen={isOpen}
        onClose={closeModal}
      />
    </>
  )
}

export {Footer};