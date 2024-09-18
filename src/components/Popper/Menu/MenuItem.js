import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    return (
        <Button icon={data.icon} to={data.to} className={cx('btn-lang')} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
