// import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faClock,
    faE,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faSignIn,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
// import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
// ----
import Button from '~/components/Button';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
const cx = classNames.bind(styles);
function Header() {
    // const [searchResult, setSearchResult] = useState([]);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1, 2, 3]);
    //     }, 1000);
    // });
    const MENU_iTEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src="https://i.ibb.co/J3Tqwy5/Tik-Tok-logo.png" alt="TikTok" className={cx('img-logo')} />
                </div>
                <div>
                    <Tippy
                        interactive={true}
                        // visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('tooltip-result')} tabIndex={-1} {...attrs}>
                                <PopperWrapper>
                                    <div className={cx('contai-result')}>
                                        <h2 className={cx('title')}>Tìm kiếm gần đây</h2>
                                        <ul className={cx('result-content')}>
                                            <li>
                                                <a
                                                    className={cx('result-link')}
                                                    href="https://v16-webapp-prime.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/oYSU1AMtEYNChpSicEjBmuBviZQpAs7gEMI91/?a=1988&bti=ODszNWYuMDE6&ch=0&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C&cv=1&br=1326&bt=663&cs=0&ds=6&ft=-Csk_m7nPD12Nao_XT-UxT42KY6e3wv25ocAp&mime_type=video_mp4&qs=0&rc=NzRkNmU4aTM0ZmU1OTpkZUBpajxuaXU5cmxldTMzODczNEAyMDBjMmAuXzYxMDAzMC01YSNkbWJnMmRrXi9gLS1kMS1zcw%3D%3D&btag=e00088000&expire=1726071024&l=202409111009531C0460E0622DEF048DA6&ply_type=2&policy=2&signature=46f40525b5c9b92de869a80d54ecc81b&tk=tt_chain_token"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <div className={cx('wrap-link')}>
                                                        <FontAwesomeIcon icon={faClock} className={cx('icon')} />
                                                        <span className={cx('link-search')}>Vạn sự tuỳ duyên</span>
                                                    </div>
                                                    <FontAwesomeIcon icon={faXmark} className={cx('icon')} />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={cx('contai-result')}>
                                        <h2 className={cx('title')}>Tìm kiếm gần đây</h2>
                                        <ul className={cx('result-content')}>
                                            <li>
                                                <AccountItem />
                                            </li>
                                            <li>
                                                <AccountItem />
                                            </li>
                                            <li>
                                                <AccountItem />
                                            </li>
                                            <li>
                                                <AccountItem />
                                            </li>
                                        </ul>
                                    </div>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <div className={cx('header-search')}>
                                <input
                                    type="text"
                                    placeholder="Search accounts and videos"
                                    className={cx('input-search')}
                                    spellCheck={false}
                                />
                                <FontAwesomeIcon
                                    icon={faCircleXmark}
                                    size="1x"
                                    className={cx('icon-of-seacrch', 'icon-exit')}
                                />
                                <FontAwesomeIcon
                                    icon={faSpinner}
                                    size="1x"
                                    className={cx('icon-of-seacrch', 'icon-spin')}
                                />
                            </div>
                            <div className={cx('search-result')}>
                                <button className={cx('btn-search')}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('icon-search')} />
                                </button>
                            </div>
                        </div>
                    </Tippy>
                </div>
                {/* icon */}
                {/* <div className={cx('avt')}>
                    <div className={cx('upload')}>
                        <FontAwesomeIcon icon={faPlus} className={cx('icon-upload')} />
                        <span className={cx('text-upload')}>Upload</span>
                    </div>
                    <div className={cx('content-mail')}>
                        <button className={cx('btn-mail-box')}>
                            <svg
                                width="32"
                                data-e2e=""
                                height="32"
                                viewBox="0 0 32 32"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z"
                                ></path>
                            </svg>
                        </button>
                        <span className={cx('taolao')}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="8"
                                viewBox="0 0 36 8"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 8h6.686a8 8 0 0 0 5.657-2.343l4.95-4.95a1 1 0 0 1 1.414 0l4.95 4.95A8 8 0 0 0 29.314 8H36 0z"
                                    fill="#545454"
                                    fillOpacity=".92"
                                />
                            </svg>
                        </span>
                    </div>
                    <img
                        src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-1/458398813_1298930584405734_3644428127817530000_n.jpg?stp=dst-jpg_s160x160&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGnAn-lrCgr3eL2eHD90-ajPnQaOW8zVOo-dBo5bzNU6uqVgTDyuCeVeCncZ0B879y_M39HaDnFVtX6MNKjMIXI&_nc_ohc=JYgdzlpHPfkQ7kNvgGsG-9L&_nc_ht=scontent.fsgn5-10.fna&oh=00_AYAzHLOc6dLwmwkI21kPDC99_ALZVTezLrdakvBIVjvhrA&oe=66E4915D"
                        alt="avt"
                        className={cx('avt-img')}
                    />
                </div> */}
                {/* icon button log in */}
                <div className={cx('action')}>
                    <Button text>Upload</Button>
                    <Button primary icon={<FontAwesomeIcon icon={faSignIn} />} className={cx('test-class')}>
                        Log in
                    </Button>

                    <Menu items={MENU_iTEMS}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} className={cx('icon-more')} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
