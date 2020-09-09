import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MenuFlex from '../../core/MenuFlex';
import Title from '../Page-Components/Title';
import AdminPanel from '../Page-Components/Admin-Dashboard';
import Upload from '../Page-Components/Upload';

export default function AdminPage() {
    return (
        <div>
            <MenuFlex/>
            <Title title={'Admin Page'}/>
            <AdminPanel/>
        </div>
    );
};