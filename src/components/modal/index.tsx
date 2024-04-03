import React from 'react';

type ModalProps = {
    imageSrc : string,
    altText : string,
}

export const Modal : React.FunctionComponent<ModalProps> = ({imageSrc, altText} : ModalProps) => {

    const handleCloseModal = () => {
        
    }
    
    return (
    <div className="modal-background">
        <div className="modal">
            <button onClick={handleCloseModal}>X</button>
            <img
                src={imageSrc} 
                alt={altText} 
                className="modal-image"
            />
        </div>
    </div>)
}