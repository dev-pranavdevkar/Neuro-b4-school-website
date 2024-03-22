import React, { Fragment, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const bnr = '/images/background/bg10.jpg';

const CommingSoon = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    const interval = useRef<NodeJS.Timeout>();
    
    const startTimer = () => {
        /* Website Launch Date */
        const WebsiteLaunchDate = new Date();
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const formattedLaunchDate = WebsiteLaunchDate.getDate() + " " + monthNames[WebsiteLaunchDate.getMonth()] + " " + WebsiteLaunchDate.getFullYear();

        const countdownDate = new Date(formattedLaunchDate + ' 23:5').getTime();
        interval.current = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                if (interval.current !== undefined) {
                    // Stop the timer
                    clearInterval(interval.current);
                }
            } else {
                // Update the timer
                setTimerDays(days.toString().padStart(2, '0'));
                setTimerHours(hours.toString().padStart(2, '0'));
                setTimerMinutes(minutes.toString().padStart(2, '0'));
                setTimerSeconds(seconds.toString().padStart(2, '0'));
            }
        }, 1000);
    };

    // ComponentDidMount
    useEffect(() => {
        startTimer();
        return () => {
            if (interval.current !== undefined) {
                clearInterval(interval.current);
            }
        };
    }, []);

    return (
        <Fragment>
            <div className="content-block">
                <div className="coming-soon" style={{ backgroundImage: "url(" + bnr + ")", backgroundPosition: "center", backgroundSize: "cover" }}>
                    <div className="countdown-box">
                        <div className="button-home">
                            <Link href={"./"} className="btn btn-lg radius-xl"><i className="fa fa-home mr-1"></i>example@gmail.com</Link>
                        </div>
                        <div className="countdown">
                            <div className="date">
                                <span className="time days text-primary">{timerDays}</span>
                                <div><strong>Days</strong></div>
                            </div>
                            <div className="date">
                                <span className="time hours text-primary">{timerHours}</span>
                                <div><strong>Hours</strong></div>
                            </div>
                            <div className="date">
                                <span className="time mins text-primary">{timerMinutes}</span>
                                <div><strong>Minutes</strong></div>
                            </div>
                            <div className="date">
                                <span className="time secs text-primary">{timerSeconds}</span>
                                <div><strong>Seconds</strong></div>
                            </div>
                        </div>
                    </div>
                    <div className="coming-head">
                        <h2><span>Coming soon</span><strong>days</strong></h2>
                        <div className="subscribe-form p-a0 max-w400">
                            <form>
                                <div className="input-group">
                                    <input name="text" className="form-control radius-no bg-black" placeholder="Search For Pages" type="text" />
                                    <span className="input-group-btn">
                                        <button type="submit" className="btn radius-xl"><i className="fa fa-search"></i></button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default CommingSoon;
