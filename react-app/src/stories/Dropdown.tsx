import React, { useRef } from "react";
import { useToggle } from "hooks/useToggle";
import { useOnClickOutside } from "hooks/useOnClickOutside";

export interface DropdownProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ title, className, ...props }) => {
  const ref = useRef<any>();
  const [isOpen, toggleOpen] = useToggle(false);
  useOnClickOutside([ref], () => toggleOpen(false));
  const onClick = () => toggleOpen();
  return (
    <div {...props} className={`_2wfYK ${isOpen ? "lpKIg" : undefined} ${className || ""}`} ref={ref}>
      <div aria-disabled="false" role="button" tabIndex={0} title={title} onClick={onClick}>
        <span data-testid="menu" data-icon="menu" className="">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path
              fill="currentColor"
              d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
            />
          </svg>
        </span>
      </div>
      <span>
        {isOpen && (
          <div
            tabIndex={-1}
            className="_3nLE_ _3aUCy"
            style={{ transformOrigin: "right top", transform: "scale(1)", opacity: 1 }}
          >
            <ul className="_1hhxx">
              <li
                tabIndex={-1}
                className="_1uAPO _2AkAt _14FXT"
                data-animate-dropdown-item="true"
                style={{ opacity: 1 }}
              >
                <div className="_1OwwW _3oTCZ" role="button" title="Nouveau groupe">
                  Nouveau groupe
                </div>
              </li>
              <li
                tabIndex={-1}
                className="_1uAPO _2AkAt _14FXT"
                data-animate-dropdown-item="true"
                style={{ opacity: 1 }}
              >
                <div className="_1OwwW _3oTCZ" role="button" title="Créer un salon">
                  Créer un salon
                </div>
              </li>
              <li
                tabIndex={-1}
                className="_1uAPO _2AkAt _14FXT"
                data-animate-dropdown-item="true"
                style={{ opacity: 1 }}
              >
                <div className="_1OwwW _3oTCZ" role="button" title="Profil">
                  Profil
                </div>
              </li>
              <li
                tabIndex={-1}
                className="_1uAPO _2AkAt _14FXT"
                data-animate-dropdown-item="true"
                style={{ opacity: 1 }}
              >
                <div className="_1OwwW _3oTCZ" role="button" title="Archivées">
                  Archivées
                </div>
              </li>
              <li
                tabIndex={-1}
                className="_1uAPO _2AkAt _14FXT"
                data-animate-dropdown-item="true"
                style={{ opacity: 1 }}
              >
                <div className="_1OwwW _3oTCZ" role="button" title="Messages importants">
                  Messages importants
                </div>
              </li>
              <li
                tabIndex={-1}
                className="_1uAPO _2AkAt _14FXT"
                data-animate-dropdown-item="true"
                style={{ opacity: 1 }}
              >
                <div className="_1OwwW _3oTCZ" role="button" title="Paramètres">
                  Paramètres
                </div>
              </li>
              <li
                tabIndex={-1}
                className="_1uAPO _2AkAt _14FXT"
                data-animate-dropdown-item="true"
                style={{ opacity: 1 }}
              >
                <div className="_1OwwW _3oTCZ" role="button" title="Déconnexion">
                  Déconnexion
                </div>
              </li>
            </ul>
          </div>
        )}{" "}
      </span>
    </div>
  );
};
