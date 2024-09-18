import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import Header from './Header';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useState } from 'react';
const cx = classNames.bind(styles); // Import your styles
//
function Menu({ children, items, onClick }) {
    //
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const iSParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (iSParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onClick(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            delay={[200, 500]}
            interactive
            // visible
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex={-1} {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}

                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => {
                setHistory([{ data: items }]);
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
