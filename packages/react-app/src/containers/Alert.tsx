import React from "react";

export const Alert = () => {
  return (
    <div data-animate-modal-backdrop="true" className="overlay _3QE0O lLc_C _1mHgA copyable-area">
      <div className="sWE2H">
        <div className="_1HX2v" data-animate-modal-popup="true">
          <div className="_3e9k9" data-animate-modal-body="true">
            <div className="_2fuxX">
              WhatsApp est ouvert sur un autre ordinateur ou navigateur. Cliquez sur "Utiliser ici" pour utiliser
              WhatsApp dans cette fenêtre.
            </div>
            <div className="_2SGGH">
              <div role="button" tabIndex={0} className="_30EVj IqPek">
                <div className="_2jX3t _2rbZG dWI29 _1GbxC">
                  <div className="_2xUEC _2XHG4">Déconnexion</div>
                </div>
              </div>
              <div role="button" tabIndex={0} className="_30EVj gMRg5">
                <div className="_2jX3t _2rbZG dWI29 _1GbxC">
                  <div className="_2xUEC _2XHG4">Utiliser ici</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
