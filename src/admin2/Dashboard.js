import React from 'react';
import BasicStatistics from './Statistics/BasicStatistics'
import BarChart from './Statistics/Chart'
import ChartAppointment from './Statistics/ChartAppointment'
import Right from './RightTest'
import { Box } from '@chakra-ui/react'
import PieChartAppointment from  './Statistics/StatisticAppointment'

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