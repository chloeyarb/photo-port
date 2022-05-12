import React from 'react';

function Modal() {

    return (
        <div className="modaleBackDrop">
            <div className="modalContainer">
                <h3 className="modalTitle">Photo Name</h3>
                <img alt="current category" />
                <p>
                    Photo Description
                </p>
                <button type="button">
                    Cloe this modal
                </button>
            </div>
        </div>
    );
}

export default Modal;