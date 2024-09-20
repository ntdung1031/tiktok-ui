import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    const classMenu = cx('btn-lang', {
        separate: data.separate,
    });
    return (
        <Button icon={data.icon} to={data.to} className={classMenu} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
