import React, {useState, useEffect} from 'react';
import "./detailModal.css";
const DetailModal = ({isOpen}) => {

    return(
        <div class={ isOpen ? "modal" : "modal hidden"}>
            <div class="modal-content">
                <p>Example text</p>
            </div>
        </div>
    )
}

export default DetailModal;