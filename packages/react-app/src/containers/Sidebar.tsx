import React, { useContext } from "react";
import { RootContext } from "contexts/RootContext";

import { Avatar } from "stories/Avatar";
import { Dropdown } from "stories/Dropdown";

export const Sidebar = () => {
  const { user } = useContext(RootContext);

  return (
    <div id="side" className="_2ruyW">
      <header className="_2O84H">
        <div className="_3LtPa">
          <Avatar defaultUser={true} size={40} imgSrc={user?.img} />
        </div>
        <div className="_1eNef">
          <div className="chGSa LhZF7">
            <span>
              <div className="_2wfYK">
                <div aria-disabled="false" role="button" tabIndex={0} title="Statut">
                  <span data-testid="status-v3" data-icon="status-v3" className="">
                    <svg
                      id="ee51d023-7db6-4950-baf7-c34874b80976"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z"
                      />
                    </svg>
                  </span>
                </div>
                <span />
              </div>
              <div className="_2wfYK">
                <div aria-disabled="false" role="button" tabIndex={0} title="Nouvelle discussion">
                  <span data-testid="chat" data-icon="chat" className="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path
                        fill="currentColor"
                        d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"
                      />
                    </svg>
                  </span>
                </div>
                <span />
              </div>
              <Dropdown title="Menu" />
            </span>
          </div>
        </div>
      </header>
      <span className="_2rAWW" />
      <div tabIndex={-1} className="_1Ra05">
        <div className="_22PcK">
          <button className="_3Wrfs">
            <div className="_14VsQ _2fIjT">
              <span data-testid="back" data-icon="back" className="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z" />
                </svg>
              </span>
            </div>
            <div className="_14VsQ _23HdX">
              <span data-testid="search" data-icon="search" className="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path
                    fill="currentColor"
                    d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"
                  />
                </svg>
              </span>
            </div>
          </button>
          <span />
          <div className="_1MBn6">Rechercher ou démarrer une nouvelle discussion</div>
          <label className="_2Evw0">
            <div tabIndex={-1} className="_2HE1Z _1aIlm">
              <div className="Srlyw" style={{ visibility: "visible" }} />
              <div className="_1awRl copyable-text selectable-text" contentEditable={true} data-tab="3" dir="ltr" />
            </div>
          </label>
        </div>
      </div>
      <div className="_3Xjbn _3jNGW" id="pane-side">
        <div tabIndex={-1} data-tab="4">
          <div className="">
            <div
              aria-label="Liste des discussions. Appuyez sur la touche de flèche droite sur une discussion pour ouvrir son menu contextuel."
              className="_3soxC _2aY82"
              role="region"
              style={{ height: 1728 }}
            >
              <div
                className="_1MZWu"
                style={{ zIndex: 23, transition: "none 0s ease 0s", height: 72, transform: "translateY(0px)" }}
              >
                <div tabIndex={0} aria-selected="true" role="option">
                  <div className="_3Pwfx _1GGbM">
                    <div className="_22mTQ">
                      <div className="_1l12d" style={{ height: 49, width: 49 }}>
                        <img
                          src="https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F56449025_681115898970985_8332958417983373312_n.jpg%3Foh%3D33ec7c5be904e15ff48fd5082fbd188f%26oe%3D5FC742DC&amp;t=s&amp;u=212669038326%40c.us&amp;i=1505402456&amp;n=l8fahE%2FFpCIxoBuG0b3iYBZst19LU9ZcxvuOg8Th%2FBA%3D"
                          alt=""
                          draggable="false"
                          className="_3t3gU rlUm6 _1VzZY"
                          style={{ visibility: "visible" }}
                        />
                        <div className="_15OLJ">
                          <span data-testid="default-user" data-icon="default-user" className="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 212" width="212" height="212">
                              <path
                                fill="#DFE5E7"
                                className="background"
                                d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"
                              />
                              <path
                                fill="#FFF"
                                className="primary"
                                d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="_1C6Zl">
                      <div className="_1c_mC">
                        <div className="_3Tw1q">
                          <span className="_3es8f">
                            <span dir="auto" title="Zak Mnazah" className="_1hI5g _1XH7x _1VzZY">
                              Zak Mnazah
                            </span>
                            <div className="_3cD3_" />
                          </span>
                        </div>
                        <div className="_2gsiG">00:46</div>
                      </div>
                      <div className="_7W_3c">
                        <div className="fqPQb">
                          <span
                            className="_3MjzD"
                            title="‪Khssara kakan ghir React blasst Angular dakchi tayban b3a9lo‬"
                          >
                            <span dir="ltr" className="_1hI5g _1XH7x _1VzZY">
                              Khssara kakan ghir React blasst Angular dakchi tayban b3a9lo
                            </span>
                          </span>
                        </div>
                        <div className="_2gsiG">
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="_1MZWu"
                style={{ zIndex: 3, transition: "none 0s ease 0s", height: 72, transform: "translateY(288px)" }}
              >
                <div tabIndex={-1} aria-selected="false" role="option">
                  <div className="_3Pwfx">
                    <div className="_22mTQ">
                      <div className="_1l12d" style={{ height: 49, width: 49 }}>
                        <img
                          src="https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F55879609_1229997643835375_59563491224190976_n.jpg%3Foh%3Dd93bd108414d1a340238cf209e9980ff%26oe%3D5FC70FED&amp;t=s&amp;u=12038711511%40c.us&amp;i=1537435811&amp;n=t8LxcvlQAOCWaftFb84XXoeWw1Q9ziVsnrdLwalZQDc%3D"
                          alt=""
                          draggable="false"
                          className="_3t3gU rlUm6 _1VzZY"
                          style={{ visibility: "visible" }}
                        />
                        <div className="_15OLJ">
                          <span data-testid="default-user" data-icon="default-user" className="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 212" width="212" height="212">
                              <path
                                fill="#DFE5E7"
                                className="background"
                                d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"
                              />
                              <path
                                fill="#FFF"
                                className="primary"
                                d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="_1C6Zl">
                      <div className="_1c_mC">
                        <div className="_3Tw1q">
                          <span className="_3es8f">
                            <span dir="auto" title="Ayoub El Khattabi" className="_1hI5g _1XH7x _1VzZY">
                              Ayoub El Khattabi
                            </span>
                            <div className="_3cD3_" />
                          </span>
                        </div>
                        <div className="_2gsiG">17/07/2020</div>
                      </div>
                      <div className="_7W_3c">
                        <div className="fqPQb">
                          <span className="_3MjzD" title="‪Ta ana chal hadi mhdrt m3ah‬">
                            <span dir="ltr" className="_1hI5g _1XH7x _1VzZY">
                              Ta ana chal hadi mhdrt m3ah
                            </span>
                          </span>
                        </div>
                        <div className="_2gsiG">
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="_1MZWu"
                style={{ zIndex: 2, transition: "none 0s ease 0s", height: 72, transform: "translateY(216px)" }}
              >
                <div tabIndex={-1} aria-selected="false" role="option">
                  <div className="_3Pwfx">
                    <div className="_22mTQ">
                      <div className="_1l12d" style={{ height: 49, width: 49 }}>
                        <img
                          src="https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F127020197_307696870274245_5456470263536247944_n.jpg%3Foh%3D2123895589e26842a5417b5327144715%26oe%3D5FC75CB8&amp;t=s&amp;u=212688051226%40c.us&amp;i=1606108431&amp;n=rz%2FVMTRD4uXC%2FUnGHbFmcmERK5PTmCdr9g6lHrra%2BOU%3D"
                          alt=""
                          draggable="false"
                          className="_3t3gU rlUm6 _1VzZY"
                          style={{ visibility: "visible" }}
                        />
                        <div className="_15OLJ">
                          <span data-testid="default-user" data-icon="default-user" className="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 212" width="212" height="212">
                              <path
                                fill="#DFE5E7"
                                className="background"
                                d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"
                              />
                              <path
                                fill="#FFF"
                                className="primary"
                                d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="_1C6Zl">
                      <div className="_1c_mC">
                        <div className="_3Tw1q">
                          <span className="_3es8f">
                            <span dir="auto" title="+212 6XX-XXXX83" className="_1hI5g _1XH7x _1VzZY">
                              +212 6XX-XXXX83
                            </span>
                            <div className="_3cD3_" />
                          </span>
                        </div>
                        <div className="_2gsiG">07/09/2020</div>
                      </div>
                      <div className="_7W_3c">
                        <div className="fqPQb">
                          <span className="_3MjzD" title="‪Photo‬">
                            <div className="_3PHHe _-68As">
                              <span data-testid="status-dblcheck" data-icon="status-dblcheck" className="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                                  <path
                                    fill="currentColor"
                                    d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="_3sDwr status-image XHLX8">
                              <span data-testid="status-image" data-icon="status-image" className="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 20" width="16" height="20">
                                  <path
                                    fill="currentColor"
                                    d="M13.822 4.668H7.14l-1.068-1.09a1.068 1.068 0 0 0-.663-.278H3.531c-.214 0-.51.128-.656.285L1.276 5.296c-.146.157-.266.46-.266.675v1.06l-.001.003v6.983c0 .646.524 1.17 1.17 1.17h11.643a1.17 1.17 0 0 0 1.17-1.17v-8.18a1.17 1.17 0 0 0-1.17-1.169zm-5.982 8.63a3.395 3.395 0 1 1 0-6.79 3.395 3.395 0 0 1 0 6.79zm0-5.787a2.392 2.392 0 1 0 0 4.784 2.392 2.392 0 0 0 0-4.784z"
                                  />
                                </svg>
                              </span>
                            </div>
                            <span dir="auto" className="_1hI5g _1XH7x _1VzZY">
                              Photo
                            </span>
                          </span>
                        </div>
                        <div className="_2gsiG">
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="_1MZWu"
                style={{ zIndex: 1, transition: "none 0s ease 0s", height: 72, transform: "translateY(144px)" }}
              >
                <div tabIndex={-1} aria-selected="false" role="option">
                  <div className="_3Pwfx">
                    <div className="_22mTQ">
                      <div className="_1l12d" style={{ height: 49, width: 49 }}>
                        <img
                          src="https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F123022840_372572527223011_2507025432955361506_n.jpg%3Foh%3D6c964e7b861f0817c6553a01281b200d%26oe%3D5FC6BC97&amp;t=s&amp;u=212601943183%40c.us&amp;i=1604172433&amp;n=ywWrFjvxwKEectD6dZ7U12n6iiH7QysDrXpOqngToo8%3D"
                          alt=""
                          draggable="false"
                          className="_3t3gU rlUm6 _1VzZY"
                          style={{ visibility: "visible" }}
                        />
                        <div className="_15OLJ">
                          <span data-testid="default-user" data-icon="default-user" className="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 212" width="212" height="212">
                              <path
                                fill="#DFE5E7"
                                className="background"
                                d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"
                              />
                              <path
                                fill="#FFF"
                                className="primary"
                                d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="_1C6Zl">
                      <div className="_1c_mC">
                        <div className="_3Tw1q">
                          <span className="_3es8f">
                            <span dir="auto" title="+212 6XX-XXXX83" className="_1hI5g _1XH7x _1VzZY">
                              +212 6XX-XXXX83
                            </span>
                            <div className="_3cD3_" />
                          </span>
                        </div>
                        <div className="_2gsiG">16/09/2020</div>
                      </div>
                      <div className="_7W_3c">
                        <div className="fqPQb">
                          <span className="_3MjzD" title="‪Ok‬">
                            <span dir="ltr" className="_1hI5g _1XH7x _1VzZY">
                              Ok
                            </span>
                          </span>
                        </div>
                        <div className="_2gsiG">
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="_1MZWu"
                style={{ zIndex: 0, transition: "none 0s ease 0s", height: 72, transform: "translateY(72px)" }}
              >
                <div tabIndex={-1} aria-selected="false" role="option">
                  <div className="_3Pwfx">
                    <div className="_22mTQ">
                      <div className="_1l12d" style={{ height: 49, width: 49 }}>
                        <div className="_15OLJ">
                          <span data-testid="default-user" data-icon="default-user" className="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 212" width="212" height="212">
                              <path
                                fill="#DFE5E7"
                                className="background"
                                d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"
                              />
                              <path
                                fill="#FFF"
                                className="primary"
                                d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="_1C6Zl">
                      <div className="_1c_mC">
                        <div className="_3Tw1q">
                          <span className="_3es8f">
                            <span dir="auto" title="+212 6XX-XXXX83" className="_1hI5g _1XH7x _1VzZY">
                              +212 6XX-XXXX83
                            </span>
                            <div className="_3cD3_" />
                          </span>
                        </div>
                        <div className="_2gsiG">jeudi</div>
                      </div>
                      <div className="_7W_3c">
                        <div className="fqPQb">
                          <span className="_3MjzD" title="‪Photo‬">
                            <div className="_3PHHe _-68As">
                              <span data-testid="status-dblcheck" data-icon="status-dblcheck" className="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
                                  <path
                                    fill="currentColor"
                                    d="M17.394 5.035l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0l-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="_3sDwr status-image XHLX8">
                              <span data-testid="status-image" data-icon="status-image" className="">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 20" width="16" height="20">
                                  <path
                                    fill="currentColor"
                                    d="M13.822 4.668H7.14l-1.068-1.09a1.068 1.068 0 0 0-.663-.278H3.531c-.214 0-.51.128-.656.285L1.276 5.296c-.146.157-.266.46-.266.675v1.06l-.001.003v6.983c0 .646.524 1.17 1.17 1.17h11.643a1.17 1.17 0 0 0 1.17-1.17v-8.18a1.17 1.17 0 0 0-1.17-1.169zm-5.982 8.63a3.395 3.395 0 1 1 0-6.79 3.395 3.395 0 0 1 0 6.79zm0-5.787a2.392 2.392 0 1 0 0 4.784 2.392 2.392 0 0 0 0-4.784z"
                                  />
                                </svg>
                              </span>
                            </div>
                            <span dir="auto" className="_1hI5g _1XH7x _1VzZY">
                              Photo
                            </span>
                          </span>
                        </div>
                        <div className="_2gsiG">
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="_2g_Pt" />
      </div>
    </div>
  );
};
