import React from 'react';
import {Alert} from 'antd';
import { withTranslation, WithTranslation } from 'react-i18next';

function MyAlert({t}: WithTranslation){
    return <Alert message={t('server_unavailable')} type="error"/>;
}

export default withTranslation("warning")(MyAlert);