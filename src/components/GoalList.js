import * as React from 'react';
import FirstGoal from './goals/first-goal';
import SecondGoal from './goals/second-goal';
import ThirdGoal from './goals/third-goal';
import FourthGoal from './goals/fourth-goal';
import FifthGoal from './goals/fifth-goal';

function GoalList(){
    return(
        <>
            <h1>My Goals For This Book:</h1>
            <ul>
            <FirstGoal/>
            <SecondGoal/>
            <ThirdGoal/>
            <FourthGoal/>
            <FifthGoal/>
            </ul>
        </>
    )
};
export default GoalList;
