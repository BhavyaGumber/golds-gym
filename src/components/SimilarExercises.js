import React from 'react'
import { Box,Stack,Typography } from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loaders from './Loaders'
const SimilarExercises = ({targetMuscleExercises,equipmentExercises}) => {
  return (
   <Box sx={{mt:{lg:"100px",xs:"0"}}}>
    <Typography variant="h3" ml={5} mt={5} mb={5}>Similar <span style={{color:"#ff2625",fontWeight:"bold", textTransform:"capitalize"}}>Target Muscle</span> exercises</Typography>
    <Stack direction="row" sx={{p:"2",position:"relative"}}>
        {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises}/>
          :<Loaders/>

        }
    </Stack>
    <Typography variant="h3" ml={5} mt={5} mb={5}>Similar <span style={{color:"#ff2625",fontWeight:"bold", textTransform:"capitalize"}}>equipment</span> exercises</Typography>
    <Stack direction="row" sx={{p:"2",position:"relative"}}>
        {equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises}/>
          :<Loaders/>

        }
    </Stack>
   </Box>
  )
}

export default SimilarExercises
