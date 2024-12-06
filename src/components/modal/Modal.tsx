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

    // Obtener el elemento padre del modal
    const modalRoot = document.getElementById("modal")

    // Sirve para prevenir cerrar el modal cuando se hace click sobre él
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
            // Esta linea sirve para desbilitar el scroll al abrir el modal
            document.body.style.overflow = "hidden";
            document.addEventListener(eventListener, handleEsc)
        }

        return () => {
            document.body.style.overflow = "";
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