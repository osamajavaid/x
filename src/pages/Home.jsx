import React, { Fragment } from 'react'
import Card from '@components/Card'
import { useLocalization } from '../context/LocalizationWrapper';
import { Select } from 'antd'
import { languages } from '../constants/constants';
import Translate from '../components/Common/Translate';
import MyCard from '../components/Common/MyCard';

export default function Home() {
    const { switchLocale } = useLocalization();


    return (
        <main className='h-screen w-full'>
            <h1 className='text-5xl text-center'>Pratice</h1>
            <div className="grid grid-cols-4 gap-4">
                <MyCard
                    name="Shahmir"
                    fname="Ali"
                    dob="12/12/2021"
                    contact='432423423'
                    address="isb"
                />
                <MyCard
                    name="Ali Haider"
                    fname="Ali"
                    dob="12/12/2021"
                    contact='432423423'
                    address="isb"
                />
                <MyCard
                    name="Abdullah"
                    fname="Ali"
                    dob="12/12/2021"
                    contact='432423423'
                    address="isb"
                />
                <MyCard
                    name="Hubaib"
                    fname="Ali"
                    dob="12/12/2021"
                    contact='432423423'
                    address="isb"
                />
                <MyCard
                    name="Shahmir"
                    fname="Ali"
                    dob="12/12/2021"
                    contact='432423423'
                    address="isb"
                />
                <MyCard
                    name="Ali Haider"
                    fname="Ali"
                    dob="12/12/2021"
                    contact='432423423'
                    address="isb"
                />
                <MyCard
                    name="Abdullah"
                    fname="Ali"
                    dob="12/12/2021"
                    contact='432423423'
                    address="isb"
                />
                <MyCard
                    name="Hubaib"
                    fname="Ali"
                    dob="12/12/2021"
                    contact='432423423'
                    address="isb"
                />
                <MyCard
                    name="Shahmir"
                    fname="Ali"
                    dob="12/12/2021"
                    contact='432423423'
                    address="isb"
                />
                <MyCard
                    name="Ali Haider"
                    fname="Ali"
                    dob="12/12/2021"
                    contact='432423423'
                    address="isb"
                />
                <MyCard
                    name="Abdullah"
                    fname="Ali"
                    dob="12/12/2021"
                    contact='432423423'
                    address="isb"
                />
                <MyCard
                    name="Hubaib"
                    fname="Ali"
                    dob="12/12/2021"
                    contact='432423423'
                    address="isb"
                />
                <MyCard
                    name="Shahmir"
                    fname="Ali"
                    dob="12/12/2021"
                    contact='432423423'
                    address="isb"
                />
                <MyCard
                    name="Ali Haider"
                    fname="Ali"
                    dob="12/12/2021"
                    contact='432423423'
                    address="isb"
                />
                <MyCard
                    name="Abdullah"
                    fname="Ali"
                    dob="12/12/2021"
                    contact='432423423'
                    address="isb"
                />
                <MyCard
                    name="Hubaib"
                    fname="Ali"
                    dob="12/12/2021"
                    contact='432423423'
                    address="isb"
                />
                <MyCard
                    name="Shahmir"
                    fname="Ali"
                    dob="12/12/2021"
                    contact='432423423'
                    address="isb"
                />
                <MyCard
                    name="Ali Haider"
                    fname="Ali"
                    dob="12/12/2021"
                    contact='432423423'
                    address="isb"
                />
                <MyCard
                    name="Abdullah"
                    fname="Ali"
                    dob="12/12/2021"
                    contact='432423423'
                    address="isb"
                />
                <MyCard
                    name="Hubaib"
                    fname="Ali"
                    dob="12/12/2021"
                    contact='432423423'
                    address="isb"
                />
            </div>
        </main>
    )
}