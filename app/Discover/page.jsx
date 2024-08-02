"use client"
import React, { useState } from 'react'
import { InputWithButton } from '../../components/InputWithButton/InputWithButton'
import classes from './Discover.module.css'
import DiscoverComponent from '@/components/DiscoverComponent/DiscoverComponent'

function Discover() {

    const [searchQuery, setsearchQuery] = useState("");

    return (
        <section className={classes.discoverMain}>
            <div className={classes.inputContent}>
            <InputWithButton setsearchQuery={setsearchQuery} />
            </div>
            <div>
                <DiscoverComponent searchQuery={searchQuery} />
            </div>
        </section>
    );
}

export default Discover
