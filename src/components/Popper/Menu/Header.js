import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles); // Import your styles
function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')}>
                <FontAwesomeIcon icon={faChevronLeft} onClick={onBack} className={cx('icon-back')} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}

export default Header;
