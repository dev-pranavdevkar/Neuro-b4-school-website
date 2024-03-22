import React, { Fragment, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Branches } from '@/constants/db';
const bnr = '/images/background/bg10.jpg';

const Branch = () => {
    const router = useRouter();
    const { location } = router.query;

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    const intervalRef = useRef<NodeJS.Timeout | undefined>();

    const startTimer = () => {
        const WebsiteLaunchDate = new Date();
        WebsiteLaunchDate.setMonth(WebsiteLaunchDate.getMonth() + 1);
        const countdownDate = new Date(WebsiteLaunchDate.getFullYear(), WebsiteLaunchDate.getMonth(), WebsiteLaunchDate.getDate(), 23, 5).getTime();

        intervalRef.current = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(intervalRef.current!);
            } else {
                setTimerDays(days.toString().padStart(2, '0'));
                setTimerHours(hours.toString().padStart(2, '0'));
                setTimerMinutes(minutes.toString().padStart(2, '0'));
                setTimerSeconds(seconds.toString().padStart(2, '0'));
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(intervalRef.current!);
        };
    }, []);

    return (
        <Fragment>
            <div className="content-block">
                <div className="coming-soon" style={{ backgroundImage: `url(${bnr})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                    <div className="countdown-box">
                        <div className="comming-soon-logo">
                            <Link href='/' className="dez-page"><img src='/images/logo.png' className='comming-soon-logo' alt="" /></Link>
                        </div>
                        <div className="countdown">
                            <div className="branchName">
                                <span className="time days text-primary">{location}</span>
                            </div>
                        </div>
                    </div>
                    <div className="coming-head w-100 text-center ">
                        <h2><strong>Coming soon</strong></h2>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Branch;
