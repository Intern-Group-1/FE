import React from 'react';
import BasicStatistics from './BasicStatistics'
import BarChart from './Chart'
import ChartAppointment from './ChartAppointment'
import Right from './RightTest'
import { Box } from '@chakra-ui/react'
import PieChartAppointment from  './StatisticAppointment'

export default function Dashboard(){
    return(
    <>
        <Right/>
        <Box
        
        ml={'280px'}
        >
            <BasicStatistics/>
            <Box>
                <PieChartAppointment/>
                <BarChart/>
                <ChartAppointment/>
            </Box>
        </Box>
    </>
    )
}