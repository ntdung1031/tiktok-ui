// import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faCircleQuestion,
    faCircleXmark,
    faClock,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faHomeUser,
    faKeyboard,
    faSignIn,
    faUser,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadLessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
// ----
import Button from '~/components/Button';
import Image from '~/components/Img';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles);
function Header() {
    // const [searchResult, setSearchResult] = useState([]);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1, 2, 3]);
    //     }, 1000);
    // });
    const handleMenuClick = (item) => {
        switch (item.type) {
            case 'link':
                window.location.href = item.to;
                break;
            case 'function':
                item.onClick();
                break;
            default:
                break;
        }
    };
    const currentUser = true;
    const MENU_iTEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        code: 'en',
                        title: 'English',
                    },
                    {
                        code: 'vi',
                        title: 'Vietnamese',
                    },
                ],
            },
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
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faTiktok} />,
            title: 'Get coins',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faHomeUser} />,
            title: 'Tools for creators',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/feedback',
        },

        ...MENU_iTEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Log out',
            to: '/feedback',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <img src="https://i.ibb.co/J3Tqwy5/Tik-Tok-logo.png" alt="TikTok" className={cx('img-logo')} />
                </div>
                <div>
                    <HeadLessTippy
                        interactive={true}
                        // visible={searchResult.length > 0}
                        delay={[300, 300]}
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
                    </HeadLessTippy>
                </div>
                {/* currentUsr */}
                {currentUser ? (
                    <div className={cx('avt')}>
                        <Button className={cx('upload')}>
                            <FontAwesomeIcon icon={faPlus} className={cx('icon-upload')} />
                            <span className={cx('text-upload')}>Upload</span>
                        </Button>
                        <div className={cx('content-mail')}>
                            <Tippy content={'mail box'} delay={[0, 200]}>
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
                            </Tippy>
                        </div>
                        <Menu items={userMenu} onClick={handleMenuClick}>
                            <Image
                                src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/458398813_1298930584405734_3644428127817530000_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGnAn-lrCgr3eL2eHD90-ajPnQaOW8zVOo-dBo5bzNU6uqVgTDyuCeVeCncZ0B879y_M39HaDnFVtX6MNKjMIXI&_nc_ohc=nMgLRDqB0cMQ7kNvgHkPA0B&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=Au4pbpZsfBg033A7VZ5qFgT&oh=00_AYB3gu7qNPMbNGCvPZmINezMJHVfe1386GU8XAGmnxw5Jw&oe=66F4365F"
                                alt="avt"
                                className={cx('avt-img')}
                            />
                        </Menu>
                    </div>
                ) : (
                    <div className={cx('action')}>
                        <Button text>Upload</Button>
                        <Button primary icon={<FontAwesomeIcon icon={faSignIn} />} className={cx('test-class')}>
                            Log in
                        </Button>

                        <Menu items={MENU_iTEMS} onClick={handleMenuClick}>
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} className={cx('icon-more')} />
                            </button>
                        </Menu>
                    </div>
                )}
                {/* icon */}

                {/* icon button log in */}
            </div>
        </header>
    );
}

export default Header;
