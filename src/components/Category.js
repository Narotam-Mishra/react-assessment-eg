import React from "react";
import "../styles/Category.css";

const Category = () => {
  return (
    <>
      <div className="cat-container">
        <div className="cat-con cat-f">
          <div className="bgRedContent">
            <div className="content-cat">
              <p>Category</p>
              <div className="expBtn-con">
                <p>Export</p>
                <span>
                  <svg
                    width="8"
                    height="5"
                    viewBox="0 0 8 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L4.5 4L7.5 1"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <span className="bg-design-cross">
                <svg
                  width="628"
                  height="70"
                  viewBox="0 0 628 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-7.5 25.5001C44.3989 0.184442 72.1663 0.0489518 119.472 25.5001L154.327 46.5001C204.23 75.6568 230.364 73.5491 274.66 46.5001L328.603 14.0001C356.946 -1.4673 373.884 -1.87389 405.782 14.0001L468.023 51.5001C501.313 69.374 518.887 69.6275 548.522 51.5001L591.676 25.5001C607.304 16.1804 616.503 15.4595 634 25.5001"
                    stroke="#952B37"
                    stroke-opacity="0.1"
                    stroke-width="4"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="cat-con cat-s">
          <div className="top-con">
            <p>Sales Progress</p>
            <span>
              <svg
                width="18"
                height="6"
                viewBox="0 0 18 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="11.6152" width="6" height="6" rx="2" fill="#B5B5C3" />
                <rect
                  x="0.615234"
                  width="6"
                  height="6"
                  rx="2"
                  fill="#B5B5C3"
                  fill-opacity="0.7"
                />
              </svg>
            </span>
          </div>
          <div className="salesItems">
            <div className="iconCon">
              <svg
                id="pIcon"
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.61499"
                  width="40"
                  height="40"
                  rx="12"
                  fill="#EEE5FF"
                />
                <svg
                  id="innerIcon"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.94824 2.5C4.39596 2.5 3.94824 2.94772 3.94824 3.5V16.5C3.94824 17.0523 4.39596 17.5 4.94824 17.5H5.44824C6.00053 17.5 6.44824 17.0523 6.44824 16.5V3.5C6.44824 2.94772 6.00053 2.5 5.44824 2.5H4.94824ZM9.11491 2.5C8.56262 2.5 8.11491 2.94772 8.11491 3.5V16.5C8.11491 17.0523 8.56262 17.5 9.11491 17.5H9.61491C10.1672 17.5 10.6149 17.0523 10.6149 16.5V3.5C10.6149 2.94772 10.1672 2.5 9.61491 2.5H9.11491Z"
                    fill="#8950FC"
                  />
                  <rect
                    opacity="0.3"
                    x="11.8459"
                    y="3.27017"
                    width="2.5"
                    height="15"
                    rx="1"
                    transform="rotate(-19 11.8459 3.27017)"
                    fill="#8950FC"
                  />
                </svg>
              </svg>
              <div className="salesHead">
                <p>Briviba SaaS</p>
                <p>PHP, SQLite, Artisan CLIмм</p>
              </div>
            </div>
            {/* part-2 */}
            <div className="iconCon">
              <svg
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.61499"
                  width="40"
                  height="40"
                  rx="12"
                  fill="#FFF4DE"
                />
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Mic">
                    <path
                      id="Combined Shape"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.6151 13.3333C8.31389 13.3333 6.44841 11.4678 6.44841 9.16666H4.78174C4.78174 12.1061 6.95587 14.5377 9.78378 14.9412C9.78243 14.9606 9.78174 14.9802 9.78174 15V17.5C9.78174 17.9602 10.1548 18.3333 10.6151 18.3333C11.0753 18.3333 11.4484 17.9602 11.4484 17.5V15C11.4484 14.9802 11.4477 14.9606 11.4464 14.9412C14.2743 14.5377 16.4484 12.1061 16.4484 9.16666H14.7817C14.7817 11.4678 12.9163 13.3333 10.6151 13.3333Z"
                      fill="#FFA800"
                    />
                    <rect
                      id="Rectangle"
                      opacity="0.3"
                      x="8.11499"
                      y="1.66666"
                      width="5"
                      height="10"
                      rx="2.5"
                      fill="#FFA800"
                    />
                  </g>
                </svg>
              </svg>
              <div className="salesHead">
                <p>Briviba SaaS</p>
                <p>PHP, SQLite, Artisan CLIмм</p>
              </div>
            </div>
            {/* part-3 */}
            <div className="iconCon">
              <svg
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.61499"
                  width="40"
                  height="40"
                  rx="12"
                  fill="#C9F7F5"
                />
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Group-chat">
                    <path
                      id="Combined Shape"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.9445 14.9755C19.2601 15.2911 19.7996 15.0664 19.798 14.6201L19.7848 10.9211V4.60526C19.7848 3.44256 18.8423 2.5 17.6796 2.5H7.85502C6.69231 2.5 5.74976 3.44256 5.74976 4.60526V7.5H10.9482C12.6051 7.5 13.9482 8.84315 13.9482 10.5V13.0263H16.9953L18.9445 14.9755Z"
                      fill="#1BC5BD"
                    />
                    <path
                      id="Combined Shape_2"
                      opacity="0.3"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.26929 15V10.8334C2.26929 9.91288 3.01548 9.16669 3.93595 9.16669H10.6026C11.5231 9.16669 12.2693 9.91288 12.2693 10.8334V15C12.2693 15.9205 11.5231 16.6667 10.6026 16.6667H4.0324L3.13681 17.5239C2.8188 17.8283 2.29108 17.6029 2.29108 17.1627V15.2702C2.27674 15.1823 2.26929 15.092 2.26929 15ZM5.61507 12.0834C5.61507 11.8532 5.80162 11.6667 6.03174 11.6667H10.1984C10.4285 11.6667 10.6151 11.8532 10.6151 12.0834C10.6151 12.3135 10.4285 12.5 10.1984 12.5H6.03174C5.80162 12.5 5.61507 12.3135 5.61507 12.0834ZM8.53174 13.3334C8.30162 13.3334 8.11507 13.5199 8.11507 13.75C8.11507 13.9801 8.30162 14.1667 8.53174 14.1667H10.1984C10.4285 14.1667 10.6151 13.9801 10.6151 13.75C10.6151 13.5199 10.4285 13.3334 10.1984 13.3334H8.53174Z"
                      fill="#1BC5BD"
                    />
                  </g>
                </svg>
              </svg>
              <div className="salesHead">
                <p>Briviba SaaS</p>
                <p>PHP, SQLite, Artisan CLIмм</p>
              </div>
            </div>
            {/* 4th part */}
            <div className="iconCon">
              <svg
                width="41"
                height="40"
                viewBox="0 0 41 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.61499"
                  width="40"
                  height="40"
                  rx="12"
                  fill="#FFE2E5"
                />
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Attachment#2">
                    <path
                      id="Combined Shape"
                      opacity="0.3"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.84729 10.5892L7.07952 12.357C6.75409 12.6824 6.75409 13.2101 7.07952 13.5355C7.40496 13.861 7.9326 13.861 8.25804 13.5355L10.0258 11.7678L10.6151 12.357C11.2659 13.0079 11.2659 14.0632 10.6151 14.714L8.25804 17.0711C7.60716 17.7219 6.55189 17.7219 5.90101 17.0711L3.54399 14.714C2.89312 14.0632 2.89312 13.0079 3.54399 12.357L5.90101 9.99999C6.55189 9.34911 7.60716 9.34911 8.25804 9.99999L8.84729 10.5892Z"
                      fill="#F64E60"
                    />
                    <path
                      id="Combined Shape Copy"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.3828 9.41076L14.1506 7.64299C14.476 7.31755 14.476 6.78991 14.1506 6.46448C13.8251 6.13904 13.2975 6.13904 12.9721 6.46448L11.2043 8.23224L10.615 7.64299C9.96416 6.99212 9.96416 5.93684 10.615 5.28597L12.9721 2.92894C13.6229 2.27807 14.6782 2.27807 15.3291 2.92894L17.6861 5.28597C18.337 5.93684 18.337 6.99211 17.6861 7.64299L15.3291 10C14.6782 10.6509 13.6229 10.6509 12.9721 10L12.3828 9.41076Z"
                      fill="#F64E60"
                    />
                    <path
                      id="Combined Shape_2"
                      opacity="0.3"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.13325 4.69669C3.80781 4.37125 3.80782 3.84361 4.13325 3.51818C4.45869 3.19274 4.98633 3.19274 5.31176 3.51818L6.49027 4.69669C6.81571 5.02212 6.81571 5.54976 6.49027 5.8752C6.16484 6.20063 5.6372 6.20063 5.31176 5.8752L4.13325 4.69669ZM7.56769 2.09559C7.56768 1.63535 7.94078 1.26225 8.40102 1.26225C8.86126 1.26225 9.23435 1.63535 9.23435 2.09559L9.23435 3.76225C9.23435 4.22249 8.86126 4.59559 8.40102 4.59559C7.94078 4.59559 7.56769 4.22249 7.56769 3.76225V2.09559ZM2.02031 7.64296C2.02031 7.18273 2.3934 6.80963 2.85364 6.80963L4.52031 6.80963C4.98054 6.80963 5.35364 7.18273 5.35364 7.64296C5.35364 8.1032 4.98055 8.4763 4.52031 8.4763L2.85364 8.4763C2.3934 8.4763 2.02031 8.1032 2.02031 7.64296Z"
                      fill="#F64E60"
                    />
                    <path
                      id="Combined Shape Copy 2"
                      opacity="0.3"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.8173 16.3807C16.1427 16.7062 16.6704 16.7062 16.9958 16.3807C17.3212 16.0553 17.3212 15.5277 16.9958 15.2022L15.8173 14.0237C15.4919 13.6983 14.9642 13.6983 14.6388 14.0237C14.3133 14.3491 14.3133 14.8768 14.6388 15.2022L15.8173 16.3807ZM18.4184 12.9463C18.8786 12.9463 19.2517 12.5732 19.2517 12.113C19.2517 11.6527 18.8786 11.2796 18.4184 11.2796L16.7517 11.2796C16.2915 11.2796 15.9184 11.6527 15.9184 12.113C15.9184 12.5732 16.2915 12.9463 16.7517 12.9463L18.4184 12.9463ZM12.871 18.4937C13.3313 18.4937 13.7043 18.1206 13.7043 17.6603V15.9937C13.7043 15.5334 13.3313 15.1603 12.871 15.1603C12.4108 15.1603 12.0377 15.5334 12.0377 15.9937L12.0377 17.6603C12.0377 18.1206 12.4108 18.4937 12.871 18.4937Z"
                      fill="#F64E60"
                    />
                  </g>
                </svg>
              </svg>
              <div className="salesHead">
                <p>Briviba SaaS</p>
                <p>PHP, SQLite, Artisan CLIмм</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
