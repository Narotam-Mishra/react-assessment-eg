import React from 'react'
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <aside>
      <div className="sidebar">
        <div className="side-top">
          <h2 className="hName">Dashboard</h2>
          <span id="doubleArrow">
            <svg
              width="30"
              height="29"
              viewBox="0 0 30 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5158 8.13755C15.9863 7.66762 15.9863 6.90571 15.5158 6.43578C15.0454 5.96585 14.2826 5.96585 13.8122 6.43578L6.58416 13.6558C6.1281 14.1113 6.11214 14.8449 6.54796 15.3198L13.1736 22.5398C13.6232 23.0297 14.3852 23.0628 14.8757 22.6137C15.3661 22.1646 15.3992 21.4034 14.9497 20.9135L9.10341 14.5429L15.5158 8.13755Z"
                fill="#6993FF"
              />
              <path
                opacity="0.3"
                d="M23.9486 8.13755C24.419 7.66762 24.419 6.90571 23.9486 6.43578C23.4781 5.96585 22.7154 5.96585 22.2449 6.43578L15.0169 13.6558C14.5608 14.1113 14.5449 14.8449 14.9807 15.3198L21.6064 22.5398C22.0559 23.0297 22.818 23.0628 23.3084 22.6137C23.7989 22.1646 23.832 21.4034 23.3824 20.9135L17.5362 14.5429L23.9486 8.13755Z"
                fill="#6993FF"
              />
            </svg>
          </span>
        </div>
        <div className="secTop">
          <span id="dashboard-shape">
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3068 17.6777C10.855 18.1163 11.6339 18.116 12.1818 17.6771L20.4118 11.0836L20.9856 10.6264C21.7381 10.0267 21.7394 8.88349 20.9881 8.28219L12.1819 1.23389C11.6339 0.795335 10.8552 0.795335 10.3072 1.23389L1.49655 8.28577C0.746715 8.88593 0.746228 10.0264 1.49555 10.6271L2.0649 11.0836L10.3068 17.6777Z"
                fill="#6993FF"
              />
            </svg>
          </span>
          <p className="secTop-head">Dashboard</p>
        </div>
        <p id="side-customText">Custom</p>
        <div className="sidebar-items">
          <div className="l-item">
            <span className="leftIcon">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="5.1167"
                  y="5.71666"
                  width="8.43267"
                  height="8.42333"
                  rx="1.5"
                  fill="#6993FF"
                />
                <path
                  opacity="0.3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.9587 7.21666C15.9587 6.38823 16.6303 5.71666 17.4587 5.71666H22.8914C23.7198 5.71666 24.3914 6.38823 24.3914 7.21666V12.64C24.3914 13.4684 23.7198 14.14 22.8914 14.14H17.4587C16.6303 14.14 15.9587 13.4684 15.9587 12.64V7.21666ZM5.1167 18.0467C5.1167 17.2182 5.78827 16.5467 6.6167 16.5467H12.0494C12.8778 16.5467 13.5494 17.2182 13.5494 18.0467V23.47C13.5494 24.2984 12.8778 24.97 12.0494 24.97H6.6167C5.78827 24.97 5.1167 24.2984 5.1167 23.47V18.0467ZM17.4587 16.5467C16.6303 16.5467 15.9587 17.2182 15.9587 18.0467V23.47C15.9587 24.2984 16.6303 24.97 17.4587 24.97H22.8914C23.7198 24.97 24.3914 24.2984 24.3914 23.47V18.0467C24.3914 17.2182 23.7198 16.5467 22.8914 16.5467H17.4587Z"
                  fill="#6993FF"
                />
              </svg>
            </span>
            <p id='app-content'>Applications</p>
            <span className="rightIcon">
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3402 0.566988C10.6538 0.253701 11.1623 0.253701 11.476 0.566988C11.7896 0.880275 11.7896 1.38821 11.476 1.7015L6.65729 6.51484C6.35325 6.81854 5.86368 6.82917 5.54672 6.53894L0.728055 2.12672C0.401093 1.82733 0.379005 1.31987 0.67872 0.993275C0.978436 0.666675 1.48646 0.644611 1.81342 0.943995L6.06525 4.83719L10.3402 0.566988Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
          <div className="l-item">
            <span className="leftDash">-</span>
            <p>Users</p>
            <span className="rightIcon">
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.659511 1.89358C0.424284 1.65861 0.424284 1.27766 0.659511 1.04269C0.894736 0.807729 1.27611 0.807729 1.51134 1.04269L5.12534 4.65269C5.35337 4.88047 5.36135 5.24724 5.14344 5.4847L1.8306 9.09469C1.60582 9.33964 1.2248 9.35619 0.979579 9.13165C0.734358 8.90712 0.717793 8.52652 0.942578 8.28157L3.86571 5.09623L0.659511 1.89358Z"
                  fill="#494B69"
                />
              </svg>
            </span>
          </div>
          <div className="l-item">
            <span className="leftDash">-</span>
            <p>Contacts</p>
            <span className="rightIcon">
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.659511 1.89358C0.424284 1.65861 0.424284 1.27766 0.659511 1.04269C0.894736 0.807729 1.27611 0.807729 1.51134 1.04269L5.12534 4.65269C5.35337 4.88047 5.36135 5.24724 5.14344 5.4847L1.8306 9.09469C1.60582 9.33964 1.2248 9.35619 0.979579 9.13165C0.734358 8.90712 0.717793 8.52652 0.942578 8.28157L3.86571 5.09623L0.659511 1.89358Z"
                  fill="#494B69"
                />
              </svg>
            </span>
          </div>
          <div className="l-item">
            <span className="leftDash">-</span>
            <p>Chat</p>
            <span className="rightIcon">
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.659511 1.89358C0.424284 1.65861 0.424284 1.27766 0.659511 1.04269C0.894736 0.807729 1.27611 0.807729 1.51134 1.04269L5.12534 4.65269C5.35337 4.88047 5.36135 5.24724 5.14344 5.4847L1.8306 9.09469C1.60582 9.33964 1.2248 9.35619 0.979579 9.13165C0.734358 8.90712 0.717793 8.52652 0.942578 8.28157L3.86571 5.09623L0.659511 1.89358Z"
                  fill="#494B69"
                />
              </svg>
            </span>
          </div>
          <div className="l-item">
            <span className="leftIcon">
              <svg
                width="29"
                height="30"
                viewBox="0 0 29 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.3"
                  x="4.91187"
                  y="5.45334"
                  width="9.63733"
                  height="19.2533"
                  fill="#4A4B68"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.7772 7.86001H18.1632C18.1632 7.86001 16.9585 7.65355 16.9585 6.65667C16.9585 5.6598 18.1632 5.45334 18.1632 5.45334H24.1865V11.47C24.1865 11.47 24.1865 12.6733 22.9819 12.6733C21.7772 12.6733 21.7772 11.47 21.7772 11.47V7.86001ZM10.9352 22.3H7.3212V18.69C7.3212 18.69 7.3212 17.4867 6.11653 17.4867C4.91187 17.4867 4.91187 18.69 4.91187 18.69V24.7067H10.9352C10.9352 24.7067 12.1399 24.5002 12.1399 23.5033C12.1399 22.5065 10.9352 22.3 10.9352 22.3ZM21.7772 18.69V22.3H18.1632C18.1632 22.3 16.9585 22.3 16.9585 23.5033C16.9585 24.7067 18.1632 24.7067 18.1632 24.7067H24.1865V18.69C24.1865 18.69 23.9798 17.4867 22.9819 17.4867C21.9839 17.4867 21.7772 18.69 21.7772 18.69ZM7.3212 11.47V7.86001H10.9352C10.9352 7.86001 12.1399 7.86001 12.1399 6.65667C12.1399 5.45334 10.9352 5.45334 10.9352 5.45334H4.91187V11.47C4.91187 11.47 5.11855 12.6733 6.11653 12.6733C7.11451 12.6733 7.3212 11.47 7.3212 11.47Z"
                  fill="#4A4B68"
                />
              </svg>
            </span>
            <p>Pages</p>
            <span className="rightIcon">
            <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.659511 1.89358C0.424284 1.65861 0.424284 1.27766 0.659511 1.04269C0.894736 0.807729 1.27611 0.807729 1.51134 1.04269L5.12534 4.65269C5.35337 4.88047 5.36135 5.24724 5.14344 5.4847L1.8306 9.09469C1.60582 9.33964 1.2248 9.35619 0.979579 9.13165C0.734358 8.90712 0.717793 8.52652 0.942578 8.28157L3.86571 5.09623L0.659511 1.89358Z"
                  fill="#494B69"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar