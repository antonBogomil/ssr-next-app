import React from 'react';
import {useSelector} from 'react-redux';

const MainInfo = () => {
    const {locales, lang} = useSelector(state => state);
    return (
        <div>
            <small>
                <b>
                    {"Icecat " + locales.txt_whatisicecat + ' '}
                    <a href={'/'}>
                        {locales.open_catalog}
                    </a>
                    {' ' + locales.with + ' ' + locales.total_number_of_datasheets + ' ' + locales['data-sheets']}
                </b>
            </small>
        </div>
    );
};
// locales.open_catalog + locales.with + locales.total_number_of_datasheets
export default MainInfo;