import React from 'react';
import "./loader.scss";

const Loader = () => {
    return(
        <div class="cmp-loader-container">
            <div class="cmp-loader">
                <div class="cmp-loader-image">
                    <svg id="Synchronize" xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 145.744 123.516">
                        <g id="Synchronize_plain" transform="translate(0 0)">
                            <path id="Path_2105" data-name="Path 2105" d="M138.823,78.653A61.844,61.844,0,0,0,27.32,46.98l5.531,10.3a51.521,51.521,0,0,1,95.612,21.377H115.974l10.536,19.541,6.343,11.957h0v.175l17.121-31.673Z" transform="translate(-4.229 -21.745)" fill="#08107b"/>
                            <path id="Path_2106" data-name="Path 2106" d="M89.672,116A51.521,51.521,0,0,1,38.31,69.4H50.8L33.921,37.9h0l-.11-.175L16.8,69.4H27.95a61.844,61.844,0,0,0,111.942,31.061l-5.575-10.383A51.553,51.553,0,0,1,89.672,116Z" transform="translate(-16.8 -2.79)" fill="#08107b"/>
                        </g>
                    </svg>
                </div>
                <div class="cmp-loader-text">Loading
                    <div class="cmp-loader-text-dots">
                        <div class="cmp-loader-text__dot1"></div>
                        <div class="cmp-loader-text__dot2"></div>
                        <div class="cmp-loader-text__dot3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loader;