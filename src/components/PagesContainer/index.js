import React, { useState } from 'react';


function PagesContainer({ renderPage }) {


    return (
        <div>

            <div>
                {renderPage()}
            </div>
        </div>
    )
}

export default PagesContainer;