import React from 'react';
import {Alert} from 'antd';
import { withTranslation, WithTranslation } from 'react-i18next';

function MyAlert({t}: WithTranslation){
    console.log(t("Welcome to React"))
    return <Alert message={t('Welcome to React')} type="success"/>;
}

export default withTranslation()(MyAlert);