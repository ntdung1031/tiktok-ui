import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <div className={cx('avatar')}>
                <img
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/450a1f5803c2e0e2cc343f24353368f5.jpeg?lk3s=a5d48078&nonce=52616&refresh_token=4a82c8a0ca86602dd5a5d3c95a5ee44f&x-expires=1726272000&x-signature=YwZ3JcDC8XBYU0cMrZT4OpwIuO4%3D&shp=a5d48078&shcp=81f88b70"
                    alt="avatar"
                />
            </div>
            <div className={cx('info')}>
                <span className={cx('info__name')}>thchannn2512</span>
                <span className={cx('info__desc')}>Dễ thương vô cùng tận</span>
            </div>
        </div>
    );
}

export default AccountItem;
