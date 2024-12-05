import { useModalContext } from "@context";
import "@styles/Modal.css";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface Props {
    children: React.ReactNode
}

const eventListener = "keydown";

export const Modal = ({ children }: Props) => {
    const modalRef = useRef<HTMLDivElement>(null)
    const { showModal, setShowModal } = useModalContext();

    const closeModal = () => { setShowModal(false) }

    // Get the parent element for the modal
    const modalRoot = document.getElementById("modal")

    // This is to prevent to close the modal when the user make a click on the overlay
    const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    useEffect(() => {
        // Shortcut to close the modal 
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setShowModal(false)
            }
        }
        if (showModal) {
            document.addEventListener(eventListener, handleEsc)
        }

        return () => {
            document.removeEventListener(eventListener, handleEsc)
        }
    }, [setShowModal, showModal])

    if (!showModal || !modalRoot) {
        return null;
    }

    return createPortal(
        <div className="overlay" onClick={closeModal}>
            <div className="modal" onClick={handleContentClick} ref={modalRef}>
                {children}
            </div>
        </div>,
        modalRoot
    );
}