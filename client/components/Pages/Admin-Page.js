import React from 'react';
import MenuFlex from '../../core/MenuFlex';
import Title from '../Page-Components/Title';
import Dashboard from '../Page-Components/Admin-Dashboard';

export default function AdminPage() {
    return (
        <div>
            <MenuFlex/>
            <div style={{marginBottom: 100, marginTop: 100}}>
                <Title title={'Admin'}/>
            </div>
            <Dashboard/>
        </div>
    );
};