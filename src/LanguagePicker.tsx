import React from 'react';
import i18n from './i18n';
import {Select} from "antd";

function LanguagePicker() {
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    }

    const languages = [
        {value: 'cn', label: '中文'},
        {value: 'en', label: 'English'},
    ]

    return (
        <div>
            <Select
                defaultValue="cn"
                style={{ width: 120 }}
                onChange={changeLanguage}
                options={languages}
            />
        </div>
    )
}

export default LanguagePicker;